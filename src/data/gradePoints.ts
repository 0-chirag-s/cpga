import { GradePoint } from '../types/types';

export const gradePoints: GradePoint[] = [
  { grade: 'O', points: 10, description: 'Outstanding (90-100)' },
  { grade: 'A+', points: 9, description: 'Excellent (80-89)' },
  { grade: 'A', points: 8, description: 'Very Good (70-79)' },
  { grade: 'B+', points: 7, description: 'Good (60-69)' },
  { grade: 'B', points: 6, description: 'Average (50-59)' },
  { grade: 'C', points: 5, description: 'Poor (45-49)' },
  { grade: 'D', points: 4, description: 'Pass (40-44)' },
  { grade: 'F', points: 0, description: 'Fail (Below 40)' }
];