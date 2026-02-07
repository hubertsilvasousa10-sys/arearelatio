
export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoUrl?: string;
  releaseDays: number; // Days after enrollment to unlock
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Bonus {
  id: string;
  title: string;
  description: string;
  icon: string;
  downloadUrl?: string; // URL do arquivo para download
  requiresPassword?: boolean;
  password?: string;
}

export type ViewType = 'welcome' | 'lesson' | 'bonuses' | 'upsell';
