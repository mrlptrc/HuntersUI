import React, { useState, useEffect } from 'react';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { Menu, X } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

import logo from './assets/logo.svg';
import teste from './assets/teste.avif';

import ThemeToggle from './components/ThemeToggleButton';
import LoginButton from './components/LoginButton';
import OrcamentoForm from './components/OrcamentoForm';
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';

import './styles/App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const projects = [
    { image: teste },
    { image: teste },
    { image: teste },
    { image: teste },
    { image: teste },
    { image: teste },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Provider theme={defaultTheme} colorScheme={isDark ? 'dark' : 'light'}>
      <div
        className={`max-w-screen-lg mx-auto px-4 min-h-screen transition-colors duration-500 ${
          isDark ? 'bg-dark text-gray-900' : 'bg-light text-gray-900'
        }`}
      >
        <header
          className={`flex flex-wrap justify-between items-center p-4 border-b transition-colors duration-500 ${
            isDark ? 'border-gray-700' : 'border-gray-700'
          }`}
        >
          <div className="flex items-center space-x-2">
            <img src={logo} className="h-10" alt="logo" />
            <h1 className={`text-2xl font-light ${isDark ? 'text-light' : 'text-dark'}`}>
              HUNTERS
            </h1>
          </div>

          <nav
            className={`hidden md:flex flex-grow justify-center items-center space-x-6 ${
              isDark ? 'text-light' : 'text-dark'
            }`}
          >
            <h1 className="cursor-pointer">Home</h1>
            <h1 className="cursor-pointer">Cliente</h1>
            <h1 className="cursor-pointer">Portfólio</h1>
          </nav>

          <div className="flex items-center space-x-3 ml-auto">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <LoginButton isDark={isDark} />

            <div className="md:hidden">
              <button onClick={toggleMenu} className={isDark ? 'text-light' : 'text-dark'}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </header>

        {menuOpen && (
          <div
            className={`md:hidden flex flex-col items-start space-y-2 px-4 py-2 transition-colors duration-500 ${
              isDark ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
          >
            <h1 className="cursor-pointer">Home</h1>
            <h1 className="cursor-pointer">Cliente</h1>
            <h1 className="cursor-pointer">Fazer Login</h1>
          </div>
        )}

        <Hero isDark={isDark} scroll={scroll} />
        <header
          className={`flex flex-wrap justify-between items-center p-4 border-b transition-colors duration-500 ${
              isDark ? 'border-gray-700' : 'border-gray-700'
            }`}
          ></header>
      <Portfolio isDark={isDark} projects={projects} placeholderImage={teste} />
        <header
          className={`flex flex-wrap justify-between items-center p-4 border-b transition-colors duration-500 ${
              isDark ? 'border-gray-700' : 'border-gray-700'
            }`}
          ></header>
          <OrcamentoForm isDark={isDark} />
      </div>
    </Provider>
  );
}

export default App;
