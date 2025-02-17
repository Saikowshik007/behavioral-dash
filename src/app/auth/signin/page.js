'use client';

import SignInForm from '@/components/auth/SignInForm';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md space-y-8 border border-gray-100">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Behavioural Dash
            </h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>
          <SignInForm />
          <div className="pt-4 text-center border-t border-gray-100">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                href="/auth/register"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-t border-gray-200 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2">
                      <p className="text-gray-600 font-medium">
                        Developed by{' '}

                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        <a href="https://saikowshik007.github.io/" className="hover:underline">
                          Sai Kowshik Ananthula
                          </a>
                        </span>

                      </p>

            <p className="text-gray-600 hover:text-blue-600 transition-colors">
              <a href="mailto:askowshik@outlook.com" className="hover:underline">
                For any queries contact: askowshik@outlook.com
              </a>



            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}