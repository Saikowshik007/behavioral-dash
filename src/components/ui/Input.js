const Input = ({ type = 'text', name, value, onChange, placeholder, required = false, className = '' }) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}  // Now name will be properly passed through
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200 ${className}`}
      />
      <div className="absolute inset-0 rounded-lg border border-gray-200 border-opacity-0 group-focus-within:border-opacity-100 pointer-events-none"></div>
    </div>
  );
};

export default Input;