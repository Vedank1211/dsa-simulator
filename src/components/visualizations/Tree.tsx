import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TreeNode {
  value: number;
  id: string;
  left?: TreeNode;
  right?: TreeNode;
}

export const Tree: React.FC = () => {
  const [root, setRoot] = useState<TreeNode | null>(null);
  const [newValue, setNewValue] = useState('');

  const insert = (value: number) => {
    const newNode = {
      value,
      id: Date.now().toString(),
    };

    if (!root) {
      setRoot(newNode);
      return;
    }

    const insertNode = (node: TreeNode): TreeNode => {
      if (value < node.value) {
        if (!node.left) {
          return { ...node, left: newNode };
        }
        return { ...node, left: insertNode(node.left) };
      } else {
        if (!node.right) {
          return { ...node, right: newNode };
        }
        return { ...node, right: insertNode(node.right) };
      }
    };

    setRoot(insertNode(root));
  };

  const TreeNodeComponent: React.FC<{ node: TreeNode; depth: number }> = ({ node, depth }) => (
    <div className="relative flex flex-col items-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4"
      >
        {node.value}
      </motion.div>
      <div className={`flex gap-8 ${depth > 2 ? 'gap-4' : ''}`}>
        {node.left && (
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2 -translate-y-8" />
            <TreeNodeComponent node={node.left} depth={depth + 1} />
          </div>
        )}
        {node.right && (
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2 -translate-y-8" />
            <TreeNodeComponent node={node.right} depth={depth + 1} />
          </div>
        )}
      </div>
    </div>
  );

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
          onClick={() => {
            if (newValue) {
              insert(parseInt(newValue));
              setNewValue('');
            }
          }}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Insert
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[500px] p-4">
          <AnimatePresence>
            {root && <TreeNodeComponent node={root} depth={0} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};