import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Code, BookOpen, Brain, Clock } from 'lucide-react';
import { sampleTutorials } from './Tutorials';

const TutorialDetails: React.FC = () => {
  const { tutorialId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'learn' | 'implement' | 'quiz'>('learn');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const tutorial = sampleTutorials.find((t) => t.id === tutorialId);

  if (!tutorial) return <div>Tutorial not found</div>;

  const handleQuizSubmit = () => {
    setShowResults(true);
  };

  const getScore = () => {
    return tutorial.quiz.reduce((score, question) => {
      return score + (selectedAnswers[question.id] === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/tutorials')}
        className="flex items-center text-teal-500 hover:text-teal-600 mb-6"
      >
        <ChevronLeft size={20} />
        <span>Back to Tutorials</span>
      </button>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 dark:text-teal-300 mb-4"
      >
        {tutorial.title}
      </motion.h1>

      <div className="mb-8 flex space-x-4">
        <button
          onClick={() => setActiveTab('learn')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            activeTab === 'learn'
              ? 'bg-teal-500 text-white'
              : 'text-gray-600 dark:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          <BookOpen size={20} />
          <span>Learn</span>
        </button>
        <button
          onClick={() => setActiveTab('implement')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            activeTab === 'implement'
              ? 'bg-teal-500 text-white'
              : 'text-gray-600 dark:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          <Code size={20} />
          <span>Implementation</span>
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            activeTab === 'quiz'
              ? 'bg-teal-500 text-white'
              : 'text-gray-600 dark:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          <Brain size={20} />
          <span>Quiz</span>
        </button>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        {activeTab === 'learn' && (
          <div>
            <p className="text-gray-600 dark:text-teal-200 mb-6">{tutorial.description}</p>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-teal-300 flex items-center">
                <Clock className="mr-2" size={20} />
                Time Complexity
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-teal-200">
                <li>Insert: {tutorial.timeComplexity.insert}</li>
                <li>Delete: {tutorial.timeComplexity.delete}</li>
                <li>Search: {tutorial.timeComplexity.search}</li>
              </ul>
            </div>
            {tutorial.steps.map((step) => (
              <div key={step.id} className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-teal-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-teal-200 mb-4">{step.content}</p>
                {step.code && (
                  <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm text-gray-800 dark:text-teal-300">{step.code}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'implement' && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-teal-300">
              Implementation
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-gray-800 dark:text-teal-300">{tutorial.implementation}</code>
            </pre>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-teal-300">Test Your Knowledge</h3>
            {tutorial.quiz.map((question) => (
              <div key={question.id} className="mb-6">
                <p className="text-gray-800 dark:text-teal-200 mb-3">{question.question}</p>
                <div className="space-y-2">
                  {question.options.map((option, index) => (
                    <label
                      key={index}
                      className={`block p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedAnswers[question.id] === index
                          ? 'bg-teal-50 dark:bg-teal-900 border-teal-500'
                          : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={index}
                        checked={selectedAnswers[question.id] === index}
                        onChange={() =>
                          setSelectedAnswers({
                            ...selectedAnswers,
                            [question.id]: index,
                          })
                        }
                        className="mr-2"
                      />
                      <span className="text-gray-700 dark:text-teal-200">{option}</span>
                    </label>
                  ))}
                </div>
                {showResults && (
                  <div className="mt-2">
                    {selectedAnswers[question.id] === question.correctAnswer ? (
                      <p className="text-green-500">Correct!</p>
                    ) : (
                      <div>
                        <p className="text-red-500">Incorrect</p>
                        <p className="text-gray-600 dark:text-teal-200 mt-1">
                          {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            {!showResults && (
              <button
                onClick={handleQuizSubmit}
                className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600"
              >
                Submit Answers
              </button>
            )}
            {showResults && (
              <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900 rounded-lg">
                <p className="text-gray-800 dark:text-teal-200">
                  Your score: {getScore()} out of {tutorial.quiz.length}
                </p>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TutorialDetails;