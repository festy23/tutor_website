import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StudentWorkModalProps {
  onClose: () => void;
}

const StudentWorkModal: React.FC<StudentWorkModalProps> = ({ onClose }) => {
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
            <p className="font-mono text-xl sm:text-2xl font-bold text-accent">TODO</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StudentWorkModal;
