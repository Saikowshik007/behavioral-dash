'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

// Protected routes that require authentication
const protectedRoutes = ['/dashboard'];
// Public routes that should redirect to dashboard if already authenticated
const authRoutes = ['/auth/signin', '/auth/register'];

export function AuthGuard({ children }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Get the current path
      const path = window.location.pathname;

      if (user) {
        // If user is logged in and tries to access auth routes, redirect to dashboard
        if (authRoutes.includes(path)) {
          router.push('/dashboard');
        }
      } else {
        // If user is not logged in and tries to access protected routes, redirect to signin
        if (protectedRoutes.includes(path)) {
          router.push('/auth/signin');
        }
      }
    });

    return () => unsubscribe();
  }, [router]);

  return children;
}
