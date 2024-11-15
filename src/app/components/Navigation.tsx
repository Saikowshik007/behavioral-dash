// app/components/Navigation.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              href="/"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname === '/'
                  ? 'border-blue-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/add-question"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname === '/add-question'
                  ? 'border-blue-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Add Question
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;