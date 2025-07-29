import React from 'react';

export default function LoginButton({ isDark }) {
  return (
    <button
      className={`px-3 py-1 border rounded-md text-sm transition ${
        isDark
          ? 'border-light text-light hover:bg-gray-800'
          : 'border-gray-700 text-dark hover:bg-gray-200'
      }`}
    >
      Fazer Login
    </button>
  );
}
