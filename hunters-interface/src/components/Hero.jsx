import { motion } from 'framer-motion';
import { Button, Text } from '@adobe/react-spectrum';
import { User, Tag, Instagram } from 'lucide-react';
import teste from '../assets/teste.avif';
import { animateScroll as scroll } from 'react-scroll';

export default function Hero({ isDark }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row items-center gap-8 py-10 px-4 max-w-screen-lg mx-auto font-sans"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full lg:w-1/2"
      >
        <h1 className={`text-4xl sm:text-5xl font-medium mb-6 text-center lg:text-left ${isDark ? 'text-light' : 'text-dark'}`}>
          Murilo Patrício
        </h1>

        <div className="space-y-6 text-left">
          <div className="flex items-center gap-2">
          </div>
          <p className={`text-base sm:text-lg ${isDark ? 'text-light' : 'text-dark'}`}>
            entre sombras, texturas e formas desconstruídas, arthur gregorio com seus traços escuros, densos e orgânicos constrói uma poética da existência, onde traduz na pele a estética do silêncio — uma arte que grita aquilo que a alma suplica em dizer. seu trabalho transita entre o dark, o abstrato e o desconstruído, refletindo uma visão pós-humanista, melancólica e pós-moderna. solicite seu orçamento através do botão abaixo, entraremos em contato com você pelo whatsapp dentro de 72h.
          </p>

          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <Text UNSAFE_className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
              especialidades
            </Text>
          </div>
          <Text UNSAFE_className={`text-base sm:text-lg ${isDark ? 'text-light' : 'text-dark'}`}>
            abstract, darkart, blackwork
          </Text>

          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <Text UNSAFE_className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
              instagram
            </Text>
          </div>
          <Text UNSAFE_className={`text-base sm:text-lg ${isDark ? 'text-light' : 'text-dark'}`}>
            @murilo.patricio.art
          </Text>

          <div className="flex flex-wrap gap-4 mt-6">
            <Button
              variant="primary"
              staticColor="black"
              style="fill"
              onPress={() => scroll.scrollTo(document.getElementById('orcamento')?.offsetTop - 80)}
            >
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
        className="w-full lg:w-1/2 flex justify-center"
      >
        <img
          src={teste}
          alt="profile"
          className="w-full max-w-md max-h-[500px] object-cover rounded-xl shadow-xl"
        />
      </motion.div>
    </motion.section>
  );
}
