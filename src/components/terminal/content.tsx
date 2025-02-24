import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

import { getCurrentFormattedDate } from '@/utils/get-current-date';

function BlueText({ children }: { children: ReactNode | string }) {
  return <span className="font-medium text-blue-500">{children}</span>;
}
function GreenText({ children }: { children: ReactNode | string }) {
  return <span className="font-medium text-green-500">{children}</span>;
}
function GrayText({ children }: { children: ReactNode | string }) {
  return <span className="text-gray-500 transition hover:text-gray-600">{children}</span>;
}

const terminalLogs = [
  <span></span>,
  <span key={0}>
    <GrayText>Last Session: {getCurrentFormattedDate()}</GrayText>
  </span>,
  <span key={1}>
    <BlueText>mrluisfeer@</BlueText> <GreenText>~ $</GreenText>{' '}
    <GrayText>echo "Hello, World!"</GrayText>
  </span>,
  <span key={2}>
    <GrayText>Hello, World!</GrayText>
  </span>,
  <span key={3}>
    <BlueText>mrluisfeer@</BlueText> <GreenText>~ $</GreenText> <GrayText>cat POEM.md</GrayText>
  </span>,
  <span key={4}>
    <GrayText>A ship in harbor is safe, but that is not what ships are built for.</GrayText>
  </span>,
];

export default function Content() {
  const [lines, setLines] = useState<JSX.Element[]>([]);
  const [currentLine, setCurrentLine] = useState<ReactNode | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < terminalLogs.length) {
      const textContent = terminalLogs[currentIndex].props.children;

      if (typeof textContent === 'string') {
        if (charIndex < textContent.length) {
          const timeout = setTimeout(() => {
            setCurrentLine(<span>{textContent.slice(0, charIndex + 1)}</span>);
            setCharIndex((prev) => prev + 1);
          }, 50);
          return () => clearTimeout(timeout);
        }
      } else {
        setLines((prev) => [...prev, terminalLogs[currentIndex]]);
        setCurrentLine(null);
        setCurrentIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }
  }, [charIndex, currentIndex]);

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
