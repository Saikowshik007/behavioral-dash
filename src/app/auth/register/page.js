'use client';

import RegisterForm from '@/components/auth/RegisterForm';
import Link from 'next/link';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl w-full mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left side with illustration and decorative elements */}
            <div className="md:w-1/2 relative bg-blue-50 p-6 flex flex-col justify-center items-center">
              <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                  Join Behavioural Dash
                </h1>
                <Image
                  src="/register.png"
                  alt="Interview illustration"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg w-full h-auto"
                  priority
                />
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 translate-x-1/4 translate-y-1/4" />
            </div>

            {/* Right side with registration form */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="max-w-sm mx-auto w-full">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-semibold text-gray-800">Create Account</h2>
                  <p className="text-gray-600 mt-2">Join us today</p>
                </div>

                <RegisterForm />

                <div className="mt-8 text-center text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/signin" className="text-blue-600 hover:underline">
                    Sign in here
                  </Link>
                </div>
              </div>
            </div>
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