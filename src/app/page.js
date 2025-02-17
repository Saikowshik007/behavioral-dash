'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl w-full mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Image */}
            <div className="md:w-1/2 relative bg-blue-50 p-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 text-center md:text-left">
                Behavioral Interview Dashboard
              </h1>
              <Image
                src="/welcome.jpg"
                alt="Interview illustration"
                width={400}
                height={300}
                className="rounded-xl shadow-lg w-full h-auto"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 translate-x-1/4 translate-y-1/4" />
            </div>

            {/* Right side - Login */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="max-w-sm mx-auto w-full space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Welcome Back
                  </h2>
                  <p className="text-gray-600">
                    Sign in to access your dashboard
                  </p>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/auth/signin"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 text-center font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/register"
                    className="block w-full px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-200 text-center font-medium border border-gray-200"
                  >
                    Create Account
                  </Link>
                </div>

                <div className="pt-4 text-center text-sm text-gray-500">
                  Need help?{' '}
                  <a href="mailto:askowshik@outlook.com" className="text-blue-600 hover:underline">
                    Contact support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-4 text-center text-gray-600 text-sm">
        <p>
          Developed by{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                                    <a href="https://saikowshik007.github.io/" className="hover:underline">
                                      Sai Kowshik Ananthula
                                      </a>
          </span>
        </p>
      </footer>
    </div>
  );
}