import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Service } from '../data/services';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative bg-white rounded-xl shadow-2xl p-6 sm:p-8 border-2 border-gray-800 w-full max-w-lg max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="text-center">
            <img src={service.icon} alt={service.title} className="w-24 h-24 sm:w-28 sm:h-28 object-contain mx-auto mb-4" />
            <h3 className="font-mono text-lg sm:text-xl font-bold mb-3 text-accent">{service.title}</h3>
            <ul className="space-y-3 sm:space-y-4 mb-8 text-left">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-2 sm:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="font-mono text-sm sm:text-base text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-accent text-white text-sm font-bold py-3 px-8 rounded-full hover:bg-black transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Записаться
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;
