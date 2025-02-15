'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/lib/auth';
import Button from '../ui/Button';
import Input from '../ui/Input';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    console.log('Change event:', e.target.name, e.target.value);
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');

      if (!validateForm()) {
        return;
      }

      setLoading(true);

      try {
        const { user, error: registerError } = await registerUser(
          formData.email,
          formData.password,
          formData.name
        );

        if (registerError) {
          throw new Error(registerError);
        }

        if (user) {
          router.push('/dashboard');
        }
      } catch (err) {
        setError(err.message || 'Failed to register. Please try again.');
      } finally {
        setLoading(false);
      }
    };

      return (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />

            <Input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            <Input
              type="password"
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              placeholder="Password"
              required
            />

            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword || ''}
              onChange={handleChange}
              placeholder="Confirm password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>
      );
    }