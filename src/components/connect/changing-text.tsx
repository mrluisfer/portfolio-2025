import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const messages = [
  'Join me on my journey!',
  'Hit me up on my socials!',
  'Connect with me on social media:',
  "Let's connect!",
  'Let’s stay connected!',
];

const DURATION = 5000;

const ChangingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl font-bold text-gray-800 h-10 relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full text-center"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ChangingText;
