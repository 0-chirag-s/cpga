import React, { useState } from 'react';
import CourseInput from './CourseInput';
import CourseList from './CourseList';
import { Course, SemesterData } from '../types/types';

interface CalculatorProps {
  onSemesterCalculated: (data: SemesterData) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onSemesterCalculated }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [sgpa, setSgpa] = useState<number | null>(null);
  const [semesterNumber, setSemesterNumber] = useState<number>(1);

  const addCourse = (course: Course) => {
    setCourses([...courses, course]);
  };

  const removeCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const calculateSGPA = () => {
    if (courses.length === 0) return;
    
    let totalCreditPoints = 0;
    let totalCredits = 0;
    
    courses.forEach(course => {
      totalCreditPoints += course.credits * course.gradePoint;
      totalCredits += course.credits;
    });
    
    const calculatedSGPA = totalCredits > 0 ? totalCreditPoints / totalCredits : 0;
    setSgpa(parseFloat(calculatedSGPA.toFixed(2)));
    
    onSemesterCalculated({
      semesterNumber,
      courses: [...courses],
      sgpa: parseFloat(calculatedSGPA.toFixed(2))
    });
  };

  const resetCalculator = () => {
    setCourses([]);
    setSgpa(null);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Semester
        </label>
        <select
          value={semesterNumber}
          onChange={(e) => setSemesterNumber(parseInt(e.target.value))}
          className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[1, 2, 3, 4].map(num => (
            <option key={num} value={num}>Semester {num}</option>
          ))}
        </select>
      </div>
      
      <CourseInput onAdd={addCourse} semesterNumber={semesterNumber} />
      
      {courses.length > 0 && (
        <>
          <CourseList courses={courses} onRemove={removeCourse} />
          
          <div className="mt-6 flex flex-wrap gap-4">
            <button 
              onClick={calculateSGPA}
              className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
            >
              Calculate SGPA
            </button>
            <button 
              onClick={resetCalculator}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Reset
            </button>
          </div>
          
          {sgpa !== null && (
            <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-md">
              <h3 className="text-xl font-bold text-green-800">Your SGPA: {sgpa}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Based on {courses.length} course{courses.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Calculator;