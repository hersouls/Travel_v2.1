import { User } from 'firebase/auth';

// 확장된 User 타입
export interface ExtendedUser extends User {
  name?: string;
  joinDate?: string;
}

export interface AuthState {
  user: ExtendedUser | null;
  loading: boolean;
  error: string | null;
}

export interface AuthContextType {
  user: ExtendedUser | null;
  loading: boolean;
  error: string | null;
  signInAnonymously: () => Promise<void>;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  signUpWithEmailAndPassword: (email: string, password: string, displayName?: string) => Promise<any>;
  signInWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signOut: () => Promise<{ success: boolean; error?: string }>;
}