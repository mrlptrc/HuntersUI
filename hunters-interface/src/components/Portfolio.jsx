import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio({ isDark, projects = [], placeholderImage }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (projects.length === 0) {
    projects = Array(6).fill({ image: placeholderImage });
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <section className="py-10 px-4">
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold ${isDark ? 'text-light' : 'text-dark'}`}>
          Portfólio
        </h2>
        <p className={`mt-2 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          arte que pulsa na pele — veja alguns projetos recentes
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={project.image || placeholderImage}
              alt={`Projeto ${index + 1}`}
              className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <button
                className="px-4 py-2 bg-white text-black font-semibold rounded-md shadow-lg"
                onClick={() => setSelectedIndex(index)}
              >
                Ver mais
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4 sm:px-8">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-black/50 rounded-full p-2 hover:bg-black"
          >
            <X size={24} />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 text-white bg-black/50 rounded-full p-2 hover:bg-black"
          >
            <ChevronLeft size={28} />
          </button>

          <img
            src={projects[selectedIndex].image || placeholderImage}
            alt={`Projeto ampliado`}
            className="max-h-[80vh] max-w-full rounded-xl shadow-lg"
          />

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 text-white bg-black/50 rounded-full p-2 hover:bg-black"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
