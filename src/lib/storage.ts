// Funções para gerenciar Local Storage

import type { UserProfile, ProgressEntry, CommunityPost, MealCalories } from './types';

const STORAGE_KEYS = {
  USER_PROFILE: 'fitapp_user_profile',
  PROGRESS: 'fitapp_progress',
  COMMUNITY_POSTS: 'fitapp_community_posts',
  MEAL_CALORIES: 'fitapp_meal_calories',
} as const;

// User Profile
export const saveUserProfile = (profile: UserProfile): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  }
};

export const getUserProfile = (): UserProfile | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export const clearUserProfile = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
  }
};

// Progress Entries
export const saveProgressEntry = (entry: ProgressEntry): void => {
  if (typeof window !== 'undefined') {
    const entries = getProgressEntries();
    entries.push(entry);
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(entries));
  }
};

export const getProgressEntries = (): ProgressEntry[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

// Community Posts
export const saveCommunityPost = (post: CommunityPost): void => {
  if (typeof window !== 'undefined') {
    const posts = getCommunityPosts();
    posts.unshift(post);
    localStorage.setItem(STORAGE_KEYS.COMMUNITY_POSTS, JSON.stringify(posts));
  }
};

export const getCommunityPosts = (): CommunityPost[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.COMMUNITY_POSTS);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const updateCommunityPost = (postId: string, updatedPost: CommunityPost): void => {
  if (typeof window !== 'undefined') {
    const posts = getCommunityPosts();
    const index = posts.findIndex(p => p.id === postId);
    if (index !== -1) {
      posts[index] = updatedPost;
      localStorage.setItem(STORAGE_KEYS.COMMUNITY_POSTS, JSON.stringify(posts));
    }
  }
};

// Meal Calories
export const saveMealCalories = (meal: MealCalories): void => {
  if (typeof window !== 'undefined') {
    const meals = getMealCalories();
    meals.unshift(meal);
    localStorage.setItem(STORAGE_KEYS.MEAL_CALORIES, JSON.stringify(meals));
  }
};

export const getMealCalories = (): MealCalories[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.MEAL_CALORIES);
    return data ? JSON.parse(data) : [];
  }
  return [];
};
