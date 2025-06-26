// Local Storage Manager for Form Draft Persistence
export class LocalStorageManager {
  private static readonly FORM_DRAFT_KEY = 'contact-form-draft';

  // Get form draft from local storage
  static getFormDraft(): any {
    try {
      const draft = localStorage.getItem(this.FORM_DRAFT_KEY);
      return draft ? JSON.parse(draft) : null;
    } catch (error) {
      console.error('Error reading form draft:', error);
      return null;
    }
  }

  // Save form draft to local storage
  static saveFormDraft(formData: any, links: any[]): void {
    try {
      const draftData = {
        formData,
        links,
        timestamp: Date.now()
      };
      localStorage.setItem(this.FORM_DRAFT_KEY, JSON.stringify(draftData));
    } catch (error) {
      console.error('Error saving form draft:', error);
    }
  }

  // Clear form draft
  static clearFormDraft(): void {
    try {
      localStorage.removeItem(this.FORM_DRAFT_KEY);
    } catch (error) {
      console.error('Error clearing form draft:', error);
    }
  }
}