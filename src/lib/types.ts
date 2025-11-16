// Tipos do aplicativo de fitness

export type Goal = 'weight-loss' | 'weight-gain' | 'endurance';
export type WorkoutLocation = 'gym' | 'home';
export type UserTier = 'free' | 'premium';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  age: number;
  weight: number;
  height: number;
  goal: Goal;
  workoutLocation: WorkoutLocation;
  tier: UserTier;
  createdAt: string;
}

export interface QuestionnaireData {
  name: string;
  email: string;
  age: number;
  weight: number;
  height: number;
  goal: Goal;
  workoutLocation: WorkoutLocation;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  availableDays: number;
  soccerFocus: boolean;
}

export interface WorkoutPlan {
  id: string;
  name: string;
  goal: Goal;
  location: WorkoutLocation;
  duration: string;
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  description: string;
}

export interface ProgressEntry {
  id: string;
  userId: string;
  date: string;
  weight: number;
  notes: string;
  photos?: string[];
}

export interface CommunityPost {
  id: string;
  userId: string;
  userName: string;
  content: string;
  likes: number;
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: string;
}

export interface MealCalories {
  id: string;
  userId: string;
  imageUrl: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  description: string;
  createdAt: string;
}
