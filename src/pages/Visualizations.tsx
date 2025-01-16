import React from 'react';
import { motion } from 'framer-motion';
import { LinkedList } from '../components/visualizations/LinkedList';
import { Stack } from '../components/visualizations/Stack';
import { Queue } from '../components/visualizations/Queue';
import { Tree } from '../components/visualizations/Tree';
import { Graph } from '../components/visualizations/Graph';

const Visualizations: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('linkedList');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Data Structure Visualizations
      </motion.h1>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('linkedList')}
              className={`${
                activeTab === 'linkedList'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            >
              Linked List
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`${
                activeTab === 'stack'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            >
              Stack
            </button>
            <button
              onClick={() => setActiveTab('queue')}
              className={`${
                activeTab === 'queue'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            >
              Queue
            </button>
            <button
              onClick={() => setActiveTab('tree')}
              className={`${
                activeTab === 'tree'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            >
              Binary Tree
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`${
                activeTab === 'graph'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            >
              Graph
            </button>
          </nav>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'linkedList' && <LinkedList />}
          {activeTab === 'stack' && <Stack />}
          {activeTab === 'queue' && <Queue />}
          {activeTab === 'tree' && <Tree />}
          {activeTab === 'graph' && <Graph />}
        </motion.div>
      </div>
    </div>
  );
};

export default Visualizations;