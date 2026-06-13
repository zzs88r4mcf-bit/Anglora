import type { DayContent } from '@/types';
import { days1to15 } from './curriculum-1';
import { days16to30 } from './curriculum-2';
import { days31to45 } from './curriculum-3';
import { days46to60 } from './curriculum-4';

export const curriculum: DayContent[] = [
  ...days1to15,
  ...days16to30,
  ...days31to45,
  ...days46to60,
];

export function getDay(id: number): DayContent | undefined {
  return curriculum.find(d => d.id === id);
}
