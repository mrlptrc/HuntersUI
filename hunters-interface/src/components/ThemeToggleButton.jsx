import React from 'react';

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`px-3 py-1 border rounded-md text-sm transition hover:bg-gray-700 ${
        isDark
          ? 'border-light hover:bg-gray-800 text-light'
          : 'border-gray-700 hover:bg-gray-200 text-dark'
      }`}
      aria-label="Alternar tema claro/escuro"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
