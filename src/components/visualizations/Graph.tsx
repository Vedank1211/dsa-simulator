import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Node {
  id: string;
  value: number;
  x: number;
  y: number;
}

interface Edge {
  from: string;
  to: string;
}

export const Graph: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [newValue, setNewValue] = useState('');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const addNode = () => {
    if (newValue && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const newNode = {
        id: Date.now().toString(),
        value: parseInt(newValue),
        x: Math.random() * (rect.width - 100) + 50,
        y: Math.random() * (rect.height - 100) + 50,
      };
      setNodes([...nodes, newNode]);
      setNewValue('');
    }
  };

  const handleNodeClick = (nodeId: string) => {
    if (selectedNode === null) {
      setSelectedNode(nodeId);
    } else if (selectedNode !== nodeId) {
      setEdges([...edges, { from: selectedNode, to: nodeId }]);
      setSelectedNode(null);
    } else {
      setSelectedNode(null);
    }
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

      <div
        ref={containerRef}
        className="relative h-[400px] border rounded-lg bg-gray-50 dark:bg-gray-800"
      >
        {edges.map((edge, index) => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return null;

          return (
            <svg
              key={`edge-${index}`}
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
            >
              <line
                x1={fromNode.x + 20}
                y1={fromNode.y + 20}
                x2={toNode.x + 20}
                y2={toNode.y + 20}
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-300 dark:text-gray-600"
              />
            </svg>
          );
        })}

        <AnimatePresence>
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1, x: node.x, y: node.y }}
              className={`absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer ${
                selectedNode === node.id
                  ? 'bg-yellow-500'
                  : 'bg-primary hover:bg-primary-light'
              } text-white font-bold`}
              onClick={() => handleNodeClick(node.id)}
            >
              {node.value}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};