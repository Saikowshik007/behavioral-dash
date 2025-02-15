'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInUser, signInWithGoogle } from '@/lib/auth';
import Button from '../ui/Button';
import Input from '../ui/Input';
import GoogleSignInButton from './GoogleSignInButton';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { user, error } = await signInUser(email, password);

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    if (user) {
      router.push('/dashboard');
    }

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');

    const { user, error } = await signInWithGoogle();

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    if (user) {
      router.push('/dashboard');
    }

    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleEmailSignIn} className="space-y-4">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}
        <Button type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <GoogleSignInButton
        onSignIn={handleGoogleSignIn}
        disabled={loading}
      />
    </div>
  );
}