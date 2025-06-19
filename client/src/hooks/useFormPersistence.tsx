
import { useState, useEffect } from 'react';

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
  const STORAGE_KEY = 'contact-form-draft';
  
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
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        setFormData(parsed.formData || formData);
        setLinks(parsed.links || []);
        // Note: Files can't be persisted in localStorage
      }
    } catch (error) {
      console.error('Error loading saved form data:', error);
    }
  }, []);

  // Save form data whenever it changes
  useEffect(() => {
    try {
      const dataToSave = {
        formData,
        links,
        timestamp: Date.now()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  }, [formData, links]);

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const clearSavedData = () => {
    localStorage.removeItem(STORAGE_KEY);
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
