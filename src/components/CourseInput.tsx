import React, { useState } from 'react';
import { Course } from '../types/types';
import { gradePoints } from '../data/gradePoints';
import { predefinedCourses } from '../data/courses';

interface CourseInputProps {
  onAdd: (course: Course) => void;
  semesterNumber: number;
}

const CourseInput: React.FC<CourseInputProps> = ({ onAdd, semesterNumber }) => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [marks, setMarks] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCourse || !grade || !marks) {
      alert('Please fill in all fields');
      return;
    }

    const courseDetails = predefinedCourses.find(c => c.code === selectedCourse);
    if (!courseDetails) return;

    const gradePoint = gradePoints.find(g => g.grade === grade)?.points || 0;
    
    const course: Course = {
      name: courseDetails.name,
      code: courseDetails.code,
      credits: courseDetails.credits,
      grade: grade,
      gradePoint: gradePoint,
      marks: parseInt(marks)
    };
    
    onAdd(course);
    
    // Reset form
    setSelectedCourse('');
    setMarks('');
    setGrade('');
  };

  const semesterCourses = predefinedCourses.filter(course => course.semester === semesterNumber);

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Add Course</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Course
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Course</option>
            {semesterCourses.map((course) => (
              <option key={course.code} value={course.code}>
                {course.name} ({course.code}) - {course.credits} credits
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Marks
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            placeholder="Enter marks (0-100)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Grade
          </label>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Grade</option>
            {gradePoints.map((gradeOption) => (
              <option key={gradeOption.grade} value={gradeOption.grade}>
                {gradeOption.grade} ({gradeOption.description})
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Add Course
      </button>
    </form>
  );
};

export default CourseInput;