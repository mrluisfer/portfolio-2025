import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'motion/react';

export default function Phrase() {
  return (
    <div className="grid place-content-center flex-1 gap-1 flex-col bg-gradient-to-br from-orange-100 to-orange-300 p-2 rounded-[inherit] lg:w-full h-full">
      <p className="text-center font-mono text-sm italic">"Talk is cheap. Show me the code."</p>
      <div className="flex items-center justify-end gap-2">
        <Avatar>
          <AvatarImage
            className="object-cover"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcvkis4xm8lwEjTUpieGsxFMUXY9EdQSlEs-JW-qoQjrzXFi2OmXzGr12Ena1Dl6HZpxMaIGtrBLAmTou80kIgeg"
            alt="Linus Torvalds"
          />
          <AvatarFallback>LT</AvatarFallback>
        </Avatar>
        <motion.a
          href="https://en.wikipedia.org/wiki/Linus_Torvalds"
          target="_blank"
          rel="noreferrer noopener"
          className="text-right text-xs hover:cursor-pointer border-b-2 border-transparent hover:border-orange-400 transition"
        >
          Linus Torvalds
        </motion.a>
      </div>
    </div>
  );
}
