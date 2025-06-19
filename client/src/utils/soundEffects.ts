// Sound effects utility for the application
export class SoundEffects {
  private static audioContext: AudioContext | null = null;
  
  private static getAudioContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.audioContext;
  }
  
  // Create a beep sound using Web Audio API
  private static createBeep(frequency: number, duration: number, volume: number = 0.12): void {
    try {
      const ctx = this.getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    } catch (error) {
      console.log('Audio playback not available');
    }
  }
  
  // Success sound - pleasant chime (20%+ volume increase)
  static playSuccess(): void {
    this.createBeep(523.25, 0.2, 0.13); // C5
    setTimeout(() => this.createBeep(659.25, 0.2, 0.13), 100); // E5
    setTimeout(() => this.createBeep(783.99, 0.3, 0.13), 200); // G5
  }
  
  // Button click sound - subtle click
  static playClick(): void {
    this.createBeep(800, 0.1, 0.06);
  }
  
  // Hover sound - soft tone
  static playHover(): void {
    this.createBeep(400, 0.05, 0.04);
  }
  
  // Error sound - descending tone
  static playError(): void {
    this.createBeep(300, 0.2, 0.13);
    setTimeout(() => this.createBeep(200, 0.3, 0.13), 150);
  }
  
  // Notification sound - gentle ping
  static playNotification(): void {
    this.createBeep(660, 0.15, 0.1);
  }
  
  // App load sound - ascending melody (25% volume increase)
  static playAppLoad(): void {
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, index) => {
      setTimeout(() => this.createBeep(freq, 0.15, 0.08), index * 100);
    });
  }

  // Chart animation sound - professional data visualization feedback
  static playChartAnimation(dataPoints: number = 5): void {
    // Single professional ascending tone for data loading
    this.createBeep(440, 0.08, 0.06); // A4 - professional, subtle
  }

  // Chart value increment sound - minimal professional feedback
  static playChartTick(): void {
    this.createBeep(600, 0.015, 0.04); // Very brief, soft tick
  }

  // Chart completion sound - subtle confirmation
  static playChartComplete(): void {
    this.createBeep(523.25, 0.06, 0.05); // C5 - gentle completion
  }
}