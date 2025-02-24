import { useId } from 'react';

/**
 * This hook generates unique ids for a given count.
 * @param count - The number of unique ids to generate.
 * @example const a = useId();
 * const b = useId();
 * const c = useId();
 * const d = useId();
 * const e = useId();
 * const f = useId();
 * const g = useId();
 *
 */
export const useUniqueIds = (count: number) => {
  try {
    return Array.from({ length: count }, () => useId());
  } catch (error) {
    console.error(error);
    return [];
  }
};
