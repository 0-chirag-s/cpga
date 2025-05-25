import React, { useState } from 'react';
import { Course } from '../types/types';
import { gradePoints } from '../data/gradePoints';
import { predefinedCourses } from '../data/courses';

interface CourseInputProps {
  onAdd: (course: Course) => void;
  semesterNumber: number;
}

const CourseInput: React.FC<CourseInputProps> = ({ onAdd, semesterNumber }) => {
  const [grades, setGrades] = useState<{ [key: string]: string }>({});

  const handleGradeChange = (courseCode: string, grade: string) => {
    setGrades(prev => ({ ...prev, [courseCode]: grade }));
    
    const courseDetails = predefinedCourses.find(c => c.code === courseCode);
    if (!courseDetails || !grade) return;

    const gradePoint = gradePoints.find(g => g.grade === grade)?.points || 0;
    
    const course: Course = {
      name: courseDetails.name,
      code: courseDetails.code,
      credits: courseDetails.credits,
      grade: grade,
      gradePoint: gradePoint
    };
    
    onAdd(course);
    
    // Reset grade for this course
    setGrades(prev => ({ ...prev, [courseCode]: '' }));
  };

  const semesterCourses = predefinedCourses.filter(course => course.semester === semesterNumber);

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Enter Grades for Semester {semesterNumber}</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Course Code</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Course Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Credits</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {semesterCourses.map((course) => (
              <tr key={course.code} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">{course.code}</td>
                <td className="px-4 py-2 text-sm">{course.name}</td>
                <td className="px-4 py-2 text-sm">{course.credits}</td>
                <td className="px-4 py-2 text-sm">
                  <select
                    value={grades[course.code] || ''}
                    onChange={(e) => handleGradeChange(course.code, e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Grade</option>
                    {gradePoints.map((gradeOption) => (
                      <option key={gradeOption.grade} value={gradeOption.grade}>
                        {gradeOption.grade} ({gradeOption.description})
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseInput