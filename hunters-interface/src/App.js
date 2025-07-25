import logo from './assets/logo.svg';
import teste from './assets/teste.avif';
import { Provider, defaultTheme, Button, Text } from '@adobe/react-spectrum';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Tag, Instagram, User } from 'lucide-react';
import './styles/App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

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
          className={`flex justify-between items-center p-4 border-b transition-colors duration-500 ${
            isDark ? 'border-gray-700' : 'border-gray-700'
          }`}
        >
          <div className="flex items-center space-x-2">
            <img src={logo} className="h-10" alt="logo" />
            <h1 className={`text-2xl font-light ${isDark ? 'text-light' : 'text-dark'}`}>
              HUNTERS
            </h1>
          </div>

          <nav className={`hidden md:flex items-center space-x-6 ${isDark ? 'text-light' : 'text-dark'}`}>
            <h1 className="cursor-pointer">Home</h1>
            <h1 className="cursor-pointer">Cliente</h1>
            <h1 className="cursor-pointer">Fazer Login</h1>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`px-3 py-1 border rounded-md text-sm transition hover:bg-gray-700 ${
                isDark ? 'border-light hover:bg-gray-800 text-light' : 'border-gray-700 hover:bg-gray-200 text-dark'
              }`}
              aria-label="Alternar tema claro/escuro"
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>

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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col h-screen px-4 py-10"
        >
          <h1 className={`text-6xl font-medium text-center mb-10 ${isDark ? 'text-light' : 'text-dark'}`}>
            Murilo Patrício
          </h1>

          <div className="flex flex-1 items-center flex-col lg:flex-row gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 lg:pr-8"
            >
              <div className="text-left space-y-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <Text UNSAFE_className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                    Sobre
                  </Text>
                </div>
                <p className={`text-lg ${isDark ? 'text-light' : 'text-dark'}`}>
                  entre sombras, texturas e formas desconstruídas, arthur gregorio com seus traços escuros, densos e orgânicos constrói uma poética da existência, onde traduz na pele a estética do silêncio — uma arte que grita aquilo que a alma suplica em dizer. seu trabalho transita entre o dark, o abstrato e o desconstruído, refletindo uma visão pós-humanista, melancólica e pós-moderna. solicite seu orçamento através do botão abaixo, entraremos em contato com você pelo whatsapp dentro de 72h                </p>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <Text UNSAFE_className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                    Especialidades
                  </Text>
                </div>
                <Text UNSAFE_className={`text-lg mt-2 ${isDark ? 'text-light' : 'text-dark'}`}>
                  abstract, darkart, blackwork
                </Text>
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <Text UNSAFE_className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                    Instagram
                  </Text>
                </div>
                <Text UNSAFE_className={`text-lg mt-2 ${isDark ? 'text-light' : 'text-dark'}`}>
                  @murilo.patricio.art
                </Text>
                <div className="flex space-x-8 mt-6">
                  <Button variant="primary" staticColor="black" style="fill">
                    solicitar orçamento
                  </Button>
                  <Button variant="primary">
                    projetos disponíveis
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/2 h-full flex items-stretch justify-center mt-10 lg:mt-0"
            >
              <img
                src={teste}
                alt="profile"
                className="h-full w-auto object-cover rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Provider>
  );
}

export default App;
