export interface Course {
  name: string;
  code: string;
  credits: number;
  grade: string;
  gradePoint: number;
}

export interface SemesterData {
  semesterNumber: number;
  courses: Course[];
  sgpa: number;
}

export interface PredefinedCourse {
  semester: number;
  code: string;
  name: string;
  credits: number;
}

export interface GradePoint {
  grade: string;
  points: number;
  description: string;
}