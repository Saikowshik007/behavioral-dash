'use client';

import React from 'react';

export const ToastContext = React.createContext({
  toast: () => {},
});

const AlertDialogContext = React.createContext({ onOpenChange: () => {} });

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const toast = ({ title, description, variant = 'default' }) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, title, description, variant }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map(({ id, title, description, variant }) => (
          <div
            key={id}
            className={`rounded-lg p-4 shadow-lg transform transition-all duration-300 ${
              variant === 'destructive' ? 'bg-red-500 text-white' : 'bg-white text-gray-800'
            }`}
          >
            {title && <div className="font-semibold">{title}</div>}
            {description && <div className="text-sm">{description}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function AlertDialog({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <AlertDialogContext.Provider value={{ onOpenChange }}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => onOpenChange(false)}
        />
        <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4">
          {children}
        </div>
      </div>
    </AlertDialogContext.Provider>
  );
}

export function AlertDialogContent({ children }) {
  return <div className="space-y-4">{children}</div>;
}

export function AlertDialogHeader({ children }) {
  return <div className="space-y-2">{children}</div>;
}

export function AlertDialogTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function AlertDialogDescription({ children }) {
  return <p className="text-gray-500">{children}</p>;
}

export function AlertDialogFooter({ children }) {
  return <div className="flex justify-end space-x-2 mt-4">{children}</div>;
}

export function AlertDialogAction({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      {children}
    </button>
  );
}

export function AlertDialogCancel({ children }) {
  const { onOpenChange } = React.useContext(AlertDialogContext);
  return (
    <button
      onClick={() => onOpenChange(false)}
      className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-50"
    >
      {children}
    </button>
  );
}

export function ToastButton({ children, size = 'md', variant = 'default', onClick, className = '', ...props }) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  const variantClasses = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-gray-200 hover:bg-gray-50',
    destructive: 'bg-red-500 text-white hover:bg-red-600'
  };

  return (
    <button
      onClick={onClick}
      className={`rounded font-medium transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}