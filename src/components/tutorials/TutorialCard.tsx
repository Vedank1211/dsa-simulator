import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle } from 'lucide-react';
import { Tutorial } from '../../types';

interface TutorialCardProps {
  tutorial: Tutorial;
  onClick: () => void;
}

export const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer border border-gray-200 dark:border-teal-900"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <BookOpen className="text-teal-500 dark:text-teal-400" size={24} />
          {tutorial.completed && (
            <CheckCircle className="text-green-500 dark:text-green-400" size={24} />
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-teal-300">{tutorial.title}</h3>
        <p className="text-gray-600 dark:text-teal-200">{tutorial.description}</p>
        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-teal-400">
          <span>{tutorial.steps.length} steps</span>
          <span className="mx-2">•</span>
          <span>{tutorial.completed ? 'Completed' : 'Not started'}</span>
        </div>
      </div>
    </motion.div>
  );
};