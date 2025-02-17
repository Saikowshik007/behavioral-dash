'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center space-y-8 max-w-md w-full mx-4">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Behavioral Interview Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Sign in to access your dashboard
            </p>
          </div>
          <div className="space-y-4">
            <Link
              href="/auth/signin"
              className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="block w-full px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200"
            >
              Create Account
            </Link>
          </div>
        </div>
      </main>

      <footer className="p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-t border-gray-200 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2">
                      <p className="text-gray-600 font-medium">
                        Developed by{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Sai Kowshik Ananthula
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