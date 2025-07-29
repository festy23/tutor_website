import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Service } from '../data/services';

interface StudentWorkModalProps {
  service: Service | null;
  onClose: () => void;
}

const StudentWorkModal: React.FC<StudentWorkModalProps> = ({ service, onClose }) => {
  if (!service || !service.studentWork) return null;

  const { studentWork } = service;

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
          className="relative bg-white rounded-xl shadow-2xl p-6 sm:p-8 border-2 border-gray-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="text-center">
            <h3 className="font-mono text-xl sm:text-2xl font-bold mb-2 text-accent">{studentWork.title}</h3>
            <p className="font-mono text-sm sm:text-base text-gray-600 mb-8">{studentWork.description}</p>
            <div className="space-y-6">
              {studentWork.items.map((item, i) => (
                <div key={i} className="border-t pt-4">
                  <h4 className="font-mono text-lg font-bold mb-2">{item.title}</h4>
                  {item.type === 'video' && (
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={item.url}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                  )}
                  {item.type === 'image' && (
                    <img src={item.url} alt={item.title} className="w-full h-auto rounded-lg shadow-md" />
                  )}
                   {item.type === 'link' && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">
                      Посмотреть проект
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StudentWorkModal;
