import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface QueueItem {
  value: number;
  id: string;
}

export const Queue: React.FC = () => {
  const [items, setItems] = useState<QueueItem[]>([]);
  const [newValue, setNewValue] = useState('');

  const enqueue = () => {
    if (newValue) {
      const newItem = {
        value: parseInt(newValue),
        id: Date.now().toString()
      };
      setItems([...items, newItem]);
      setNewValue('');
    }
  };

  const dequeue = () => {
    setItems(items.slice(1));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className="mr-2 p-2 border rounded"
          placeholder="Enter value"
        />
        <button
          onClick={enqueue}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 mr-2"
        >
          Enqueue
        </button>
        <button
          onClick={dequeue}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          disabled={items.length === 0}
        >
          Dequeue
        </button>
      </div>

      <div className="flex items-center gap-2 max-w-3xl mx-auto overflow-x-auto p-4">
        <AnimatePresence>
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex-shrink-0 w-16 h-16 bg-primary flex items-center justify-center rounded-lg text-white font-bold text-xl"
              >
                {item.value}
              </motion.div>
              {index < items.length - 1 && (
                <ArrowRight className="text-gray-400 flex-shrink-0" size={24} />
              )}
            </React.Fragment>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};