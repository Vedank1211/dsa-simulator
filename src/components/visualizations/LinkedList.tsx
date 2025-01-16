import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Node {
  value: number;
  id: string;
}

export const LinkedList: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([
    { value: 1, id: '1' },
    { value: 2, id: '2' },
    { value: 3, id: '3' }
  ]);
  const [newValue, setNewValue] = useState('');

  const addNode = () => {
    if (newValue) {
      const newNode = {
        value: parseInt(newValue),
        id: Date.now().toString()
      };
      setNodes([...nodes, newNode]);
      setNewValue('');
    }
  };

  const removeNode = (id: string) => {
    setNodes(nodes.filter(node => node.id !== id));
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
          onClick={addNode}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Add Node
        </button>
      </div>

      <div className="flex items-center flex-wrap gap-2">
        <AnimatePresence>
          {nodes.map((node, index) => (
            <React.Fragment key={node.id}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="relative group"
              >
                <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-lg text-white font-bold text-xl">
                  {node.value}
                  <button
                    onClick={() => removeNode(node.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                </div>
              </motion.div>
              {index < nodes.length - 1 && (
                <ChevronRight className="text-gray-400" size={24} />
              )}
            </React.Fragment>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};