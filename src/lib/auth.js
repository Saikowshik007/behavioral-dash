import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

const googleProvider = new GoogleAuthProvider();


const createInitialQuestions = async (userId) => {
  try {
    console.log('Creating initial questions for user:', userId);
    const response = await fetch(`${window.location.origin}/questions.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const sampleQuestions = await response.json();

    Object.keys(sampleQuestions).forEach(key => {
      sampleQuestions[key].updatedAt = new Date().toISOString();
    });

    const questionsRef = doc(db, 'questions', userId);
    await setDoc(questionsRef, sampleQuestions);

    console.log('Successfully saved questions for user:', userId);
    return true;
  } catch (error) {
    console.error('Error loading questions:', error);
    throw error;
  }
};

const createUserProfile = async (userId, userData) => {
  try {
    await setDoc(doc(db, 'users', userId), {
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
      await createInitialQuestions(userId);
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};


export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if user profile exists, if not create it
    await createUserProfile(user.uid, {
      name: user.displayName,
      email: user.email,
      authProvider: 'google'
    });

    const token = await user.getIdToken();
    document.cookie = `auth-token=${token}; path=/`;

    return { user, error: null };
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

export const signInWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if user profile exists, if not create it
    await createUserProfile(user.uid, {
      name: user.displayName,
      email: user.email,
      authProvider: 'github'
    });
    const token = await user.getIdToken();
    document.cookie = `auth-token=${token}; path=/`;

    return { user, error: null };
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Get the ID token
    const token = await userCredential.user.getIdToken();
    console.log(userCredential)
    // Store the token in a cookie
    document.cookie = `auth-token=${token}; path=/`;
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    // Remove the auth token cookie
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// lib/auth.js (update the registerUser function)

export const registerUser = async (email, password, name) => {
  try {
    // Create authentication user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create user profile
    await createUserProfile(user.uid, {
      name,
      email,
      authProvider: 'email'
    });

    // Create initial questions
    await createInitialQuestions(user.uid);

    // Get the ID token
    const token = await user.getIdToken();
    document.cookie = `auth-token=${token}; path=/`;

    return { user, error: null };
  } catch (error) {
    let errorMessage = 'Failed to register';

    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'This email is already registered';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password is too weak';
        break;
      default:
        errorMessage = error.message;
    }

    return { user: null, error: errorMessage };
  }
};