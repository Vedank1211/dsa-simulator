export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface DataStructure {
  id: string;
  name: string;
  description: string;
  category: 'basic' | 'advanced';
  visualComponent: React.ComponentType;
}

export interface Algorithm {
  id: string;
  name: string;
  description: string;
  category: 'sorting' | 'searching' | 'graph';
  timeComplexity: string;
  spaceComplexity: string;
  visualComponent: React.ComponentType;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  steps: TutorialStep[];
  completed: boolean;
  implementation: string;
  timeComplexity: {
    insert: string;
    delete: string;
    search: string;
  };
  spaceComplexity: string;
  quiz: Quiz[];
}

export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  code?: string;
  animation?: string;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface VisualizationState {
  speed: number;
  isPlaying: boolean;
  currentStep: number;
  data: any[];
}