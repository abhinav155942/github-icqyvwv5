
import { useState, useEffect } from 'react';
import { LocalStorageManager } from "@/utils/localStorageManager";

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  coachingNiche: string;
  otherNiche: string;
  currentChallenges: string;
  monthlyRevenue: string;
  services: string[];
}

interface LinkItem {
  url: string;
  description: string;
}

export const useFormPersistence = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    business: "",
    coachingNiche: "",
    otherNiche: "",
    monthlyRevenue: "",
    currentChallenges: "",
    services: []
  });
  
  const [files, setFiles] = useState<File[]>([]);
  const [links, setLinks] = useState<LinkItem[]>([]);

  // Load saved form data on mount
  useEffect(() => {
    const savedData = LocalStorageManager.getFormDraft();
    if (savedData) {
      setFormData(savedData.formData || formData);
      setLinks(savedData.links || []);
      // Note: Files can't be persisted in localStorage
    }
    
    // Note: No cleanup needed for simple form drafts
  }, []);

  // Save form data whenever it changes
  useEffect(() => {
    LocalStorageManager.saveFormDraft(formData, links);
  }, [formData, links]);

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const clearSavedData = () => {
    LocalStorageManager.clearFormDraft();
  };

  const backupFormData = () => {
    const backup = {
      formData,
      links,
      files: files.map(f => ({ name: f.name, size: f.size, type: f.type })),
      timestamp: Date.now(),
      userAgent: navigator.userAgent
    };
    
    // Save backup with timestamp
    const backupKey = `form-backup-${Date.now()}`;
    localStorage.setItem(backupKey, JSON.stringify(backup));
    
    return backup;
  };

  return {
    formData,
    files,
    links,
    setFiles,
    setLinks,
    updateFormData,
    clearSavedData,
    backupFormData
  };
};
