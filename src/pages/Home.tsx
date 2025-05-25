import React, { useState } from 'react';
import Calculator from '../components/Calculator';
import { SemesterData } from '../types/types';

const Home: React.FC = () => {
  const [semesters, setSemesters] = useState<SemesterData[]>([]);
  const [cgpa, setCgpa] = useState<number | null>(null);

  const addSemesterData = (semesterData: SemesterData) => {
    setSemesters([...semesters, semesterData]);
  };

  const calculateCGPA = () => {
    if (semesters.length === 0) return;
    
    let totalCreditPoints = 0;
    let totalCredits = 0;
    
    semesters.forEach(semester => {
      // Filter out F grades for CGPA calculation
      const validCourses = semester.courses.filter(course => course.grade !== 'F');
      
      validCourses.forEach(course => {
        totalCreditPoints += course.credits * course.gradePoint;
        totalCredits += course.credits;
      });
    });
    
    const calculatedCGPA = totalCredits > 0 ? totalCreditPoints / totalCredits : 0;
    setCgpa(parseFloat(calculatedCGPA.toFixed(2)));
  };

  const resetCalculator = () => {
    setSemesters([]);
    setCgpa(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-blue-800 text-white p-4">
            <h2 className="text-xl font-semibold">SGPA & CGPA Calculator for MCA</h2>
            <p className="text-sm text-blue-100">Enter your course details to calculate your SGPA and CGPA</p>
          </div>
          
          <Calculator onSemesterCalculated={addSemesterData} />
          
          {semesters.length > 0 && (
            <div className="p-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Semester Results</h3>
              <div className="space-y-4 mb-6">
                {semesters.map((semester, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium">Semester {index + 1}</h4>
                    <p className="text-blue-800 font-bold text-lg">SGPA: {semester.sgpa}</p>
                    <p className="text-sm text-gray-600">Total Courses: {semester.courses.length}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={calculateCGPA}
                  className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                >
                  Calculate CGPA
                </button>
                <button 
                  onClick={resetCalculator}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Reset All
                </button>
              </div>
              
              {cgpa !== null && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
                  <h3 className="text-xl font-bold text-blue-900">Your CGPA: {cgpa}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Calculated across {semesters.length} semester{semesters.length !== 1 ? 's' : ''}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;