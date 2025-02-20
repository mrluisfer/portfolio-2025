import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { getCurrentFormattedDate } from '@/utils/get-current-date';

const terminalLogs = [
  `mrluisfeer@ ~ ${getCurrentFormattedDate()}`,
  `mrluisfeer@ ~ $ echo "Hello, World!"`,
  `Hello, World!`,
  `mrluisfeer@ ~ $ cat POEM.md`,
  `A ship in harbor is safe, but that is not what ships are built for.`,
];

export default function Content() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < terminalLogs.length) {
      if (charIndex < terminalLogs[currentIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + terminalLogs[currentIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50);

        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setLines((prev) => [...prev, currentLine]);
          setCurrentLine('');
          setCurrentIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
      }
    }
  }, [charIndex, currentIndex, currentLine]);

  return (
    <div className="font-mono text-sm leading-relaxed text-gray-800">
      {lines.map((line, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'block' }}
        >
          {line}
        </motion.span>
      ))}

      {currentIndex < terminalLogs.length && (
        <motion.span>
          {currentLine}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
          >
            |
          </motion.span>
        </motion.span>
      )}
    </div>
  );
}
