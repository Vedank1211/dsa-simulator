import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StackItem {
  value: number;
  id: string;
}

export const Stack: React.FC = () => {
  const [items, setItems] = useState<StackItem[]>([]);
  const [newValue, setNewValue] = useState('');

  const push = () => {
    if (newValue) {
      const newItem = {
        value: parseInt(newValue),
        id: Date.now().toString()
      };
      setItems([newItem, ...items]);
      setNewValue('');
    }
  };

  const pop = () => {
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
          onClick={push}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 mr-2"
        >
          Push
        </button>
        <button
          onClick={pop}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          disabled={items.length === 0}
        >
          Pop
        </button>
      </div>

      <div className="flex flex-col-reverse items-center gap-2 max-w-xs mx-auto">
        <div className="w-full h-2 bg-gray-300 rounded"></div>
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full h-16 bg-primary flex items-center justify-center rounded-lg text-white font-bold text-xl"
            >
              {item.value}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};