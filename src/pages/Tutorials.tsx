import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TutorialCard } from '../components/tutorials/TutorialCard';
import type { Tutorial } from '../types';

export const sampleTutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Introduction to Linked Lists',
    description: 'Learn the basics of linked lists and their operations',
    steps: [
      {
        id: '1-1',
        title: 'What is a Linked List?',
        content: 'A linked list is a linear data structure where elements are stored in nodes that contain a data field and a reference (link) to the next node in the sequence. Unlike arrays, linked list elements are not stored at contiguous memory locations.',
        code: 'class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}',
      },
      {
        id: '1-2',
        title: 'Basic Operations',
        content: 'The main operations in a linked list include insertion (at beginning, end, or middle), deletion, and traversal.',
        code: 'class LinkedList {\n  constructor() {\n    this.head = null;\n  }\n\n  // Insert at beginning\n  insertFirst(data) {\n    const newNode = new Node(data);\n    newNode.next = this.head;\n    this.head = newNode;\n  }\n}',
      }
    ],
    implementation: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at beginning
  insertFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert at end
  insertLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Delete first node
  deleteFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  // Print list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}`,
    completed: false,
    timeComplexity: {
      insert: 'O(1) at beginning, O(n) at end',
      delete: 'O(1) at beginning, O(n) at end',
      search: 'O(n)',
    },
    spaceComplexity: 'O(n)',
    quiz: [
      {
        id: 'l1',
        question: 'What is the time complexity of inserting at the beginning of a linked list?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
        correctAnswer: 0,
        explanation: 'Inserting at the beginning of a linked list is O(1) because we only need to update the head pointer.',
      },
      {
        id: 'l2',
        question: 'Which of the following is NOT an advantage of linked lists over arrays?',
        options: [
          'Dynamic size',
          'Ease of insertion/deletion',
          'Random access',
          'Memory efficiency'
        ],
        correctAnswer: 2,
        explanation: 'Linked lists do not support random access like arrays. To access an element, we need to traverse from the beginning.',
      }
    ]
  },
  {
    id: '2',
    title: 'Understanding Stacks',
    description: 'Master the stack data structure and its applications',
    steps: [
      {
        id: '2-1',
        title: 'Stack Basics',
        content: 'A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Think of it like a stack of plates - you can only add or remove plates from the top.',
        code: 'class Stack {\n  constructor() {\n    this.items = [];\n  }\n\n  push(element) {\n    this.items.push(element);\n  }\n\n  pop() {\n    if (this.isEmpty()) return "Underflow";\n    return this.items.pop();\n  }\n}',
      }
    ],
    implementation: `class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return top element
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Return top element
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return size of stack
  size() {
    return this.items.length;
  }

  // Clear stack
  clear() {
    this.items = [];
  }
}`,
    completed: false,
    timeComplexity: {
      insert: 'O(1)',
      delete: 'O(1)',
      search: 'O(n)',
    },
    spaceComplexity: 'O(n)',
    quiz: [
      {
        id: 's1',
        question: 'What principle does a stack follow?',
        options: ['FIFO', 'LIFO', 'Random Access', 'Priority Based'],
        correctAnswer: 1,
        explanation: 'A stack follows the Last In First Out (LIFO) principle.',
      },
      {
        id: 's2',
        question: 'What is the time complexity of push operation in a stack?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
        correctAnswer: 0,
        explanation: 'Push operation in a stack is O(1) as we are just adding an element to the top.',
      }
    ]
  },
  {
    id: '3',
    title: 'Queue Operations',
    description: 'Learn how queues work and their real-world applications',
    steps: [
      {
        id: '3-1',
        title: 'Queue Fundamentals',
        content: 'A queue is a linear data structure that follows the First In First Out (FIFO) principle. Think of it like a line of people waiting - the first person to join the line is the first one to be served.',
        code: 'class Queue {\n  constructor() {\n    this.items = [];\n  }\n\n  enqueue(element) {\n    this.items.push(element);\n  }\n\n  dequeue() {\n    if (this.isEmpty()) return "Underflow";\n    return this.items.shift();\n  }\n}',
      }
    ],
    implementation: `class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  // Add element to queue
  enqueue(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }

  // Remove and return front element
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  // Return front element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.frontIndex];
  }

  // Check if queue is empty
  isEmpty() {
    return this.frontIndex === this.backIndex;
  }

  // Return size of queue
  size() {
    return this.backIndex - this.frontIndex;
  }

  // Clear queue
  clear() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
}`,
    completed: false,
    timeComplexity: {
      insert: 'O(1)',
      delete: 'O(1)',
      search: 'O(n)',
    },
    spaceComplexity: 'O(n)',
    quiz: [
      {
        id: 'q1',
        question: 'What principle does a queue follow?',
        options: ['FIFO', 'LIFO', 'Random Access', 'Priority Based'],
        correctAnswer: 0,
        explanation: 'A queue follows the First In First Out (FIFO) principle.',
      },
      {
        id: 'q2',
        question: 'Which operation removes an element from a queue?',
        options: ['enqueue', 'dequeue', 'push', 'pop'],
        correctAnswer: 1,
        explanation: 'The dequeue operation removes an element from the front of the queue.',
      }
    ]
  },
  {
    id: '4',
    title: 'Binary Trees',
    description: 'Explore tree structures and traversal algorithms',
    steps: [
      {
        id: '4-1',
        title: 'Tree Basics',
        content: 'A binary tree is a hierarchical data structure where each node has at most two children, referred to as left child and right child. Binary trees are used in various applications including expression parsing and binary search trees.',
        code: 'class TreeNode {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}',
      }
    ],
    implementation: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert value into tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Inorder traversal
  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  // Search for a value
  search(value, node = this.root) {
    if (!node || node.value === value) {
      return node;
    }
    if (value < node.value) {
      return this.search(value, node.left);
    }
    return this.search(value, node.right);
  }
}`,
    completed: false,
    timeComplexity: {
      insert: 'O(log n) average, O(n) worst',
      delete: 'O(log n) average, O(n) worst',
      search: 'O(log n) average, O(n) worst',
    },
    spaceComplexity: 'O(n)',
    quiz: [
      {
        id: 't1',
        question: 'What is the maximum number of children a node can have in a binary tree?',
        options: ['1', '2', '3', 'Unlimited'],
        correctAnswer: 1,
        explanation: 'In a binary tree, each node can have at most 2 children (left and right child).',
      },
      {
        id: 't2',
        question: 'What is the time complexity of searching in a balanced binary search tree?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
        correctAnswer: 2,
        explanation: 'Searching in a balanced binary search tree takes O(log n) time as we eliminate half of the remaining nodes at each step.',
      }
    ]
  },
  {
    id: '5',
    title: 'Graph Theory',
    description: 'Master graph concepts and algorithms',
    steps: [
      {
        id: '5-1',
        title: 'Graph Fundamentals',
        content: 'A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect these vertices. Graphs can be directed or undirected and can be used to represent many real-world relationships.',
        code: 'class Graph {\n  constructor() {\n    this.adjacencyList = {};\n  }\n\n  addVertex(vertex) {\n    if (!this.adjacencyList[vertex]) {\n      this.adjacencyList[vertex] = [];\n    }\n  }\n}',
      }
    ],
    implementation: `class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add edge
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Remove edge
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
      .filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
      .filter(v => v !== vertex1);
  }

  // Remove vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Depth First Search
  dfs(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfsHelper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfsHelper(neighbor);
        }
      });
    })(start);

    return result;
  }
}`,
    completed: false,
    timeComplexity: {
      insert: 'O(1) for vertex, O(1) for edge',
      delete: 'O(V + E) for vertex, O(1) for edge',
      search: 'O(V + E)',
    },
    spaceComplexity: 'O(V + E)',
    quiz: [
      {
        id: 'g1',
        question: 'What is the time complexity of adding an edge in an adjacency list representation?',
        options: ['O(1)', 'O(V)', 'O(E)', 'O(V + E)'],
        correctAnswer: 0,
        explanation: 'Adding an edge in an adjacency list takes O(1) time as we just need to add to the vertex\'s list.',
      },
      {
        id: 'g2',
        question: 'Which traversal algorithm uses a stack?',
        options: ['Breadth First Search', 'Depth First Search', 'Binary Search', 'Linear Search'],
        correctAnswer: 1,
        explanation: 'Depth First Search (DFS) uses a stack (either explicitly or through recursion) to traverse the graph.',
      }
    ]
  }
];

const Tutorials: React.FC = () => {
  const navigate = useNavigate();

  const handleTutorialClick = (tutorial: Tutorial) => {
    navigate(`/tutorials/${tutorial.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-gray-900 dark:text-teal-300"
      >
        Interactive Tutorials
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleTutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            tutorial={tutorial}
            onClick={() => handleTutorialClick(tutorial)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tutorials;