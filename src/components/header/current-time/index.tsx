import { motion } from 'motion/react';

import { useCurrentTime } from '../../../hooks/use-current-time.ts';
import { getMonthById } from '../../../utils/get-month.ts';

export default function CurrentTime() {
  const { time, hour, minutes, meridiem } = useCurrentTime();
  const monthId = time.getMonth();
  const day = time.getDate();

  return (
    <motion.div className="flex items-center gap-1">
      <motion.p className="flex items-center text-4xl font-bold tracking-wider text-blue-500 transition hover:text-blue-600">
        {hour}:{minutes}
      </motion.p>
      <div className="text-sm opacity-80 transition hover:opacity-100">
        <p className="lowercase">{meridiem}</p>
        <p>
          {getMonthById(monthId)} {day}
        </p>
      </div>
    </motion.div>
  );
}
