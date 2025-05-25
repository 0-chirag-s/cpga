import React from 'react';
import { Course } from '../types/types';
import { Trash2 } from 'lucide-react';

interface CourseListProps {
  courses: Course[];
  onRemove: (index: number) => void;
}

const CourseList: React.FC<CourseListProps> = ({ courses, onRemove }) => {
  if (courses.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">Courses</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Course Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Code
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Credits
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Grade
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Grade Points
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Credit Points
              </th>
              <th className="px-4 py-2 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course, index) => {
              const creditPoints = course.credits * course.gradePoint;
              
              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{course.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{course.code}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{course.credits}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                    <span className={`
                      px-2 py-1 rounded-full text-xs font-semibold
                      ${course.grade === 'O' ? 'bg-green-100 text-green-800' : ''}
                      ${course.grade === 'A+' ? 'bg-blue-100 text-blue-800' : ''}
                      ${course.grade === 'A' ? 'bg-indigo-100 text-indigo-800' : ''}
                      ${course.grade === 'B+' ? 'bg-purple-100 text-purple-800' : ''}
                      ${course.grade === 'B' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${course.grade === 'C' ? 'bg-orange-100 text-orange-800' : ''}
                      ${course.grade === 'D' ? 'bg-red-100 text-red-800' : ''}
                      ${course.grade === 'F' ? 'bg-gray-100 text-gray-800' : ''}
                    `}>
                      {course.grade}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{course.gradePoint}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">{creditPoints}</td>
                  <td className="px-4 py-3 text-sm text-gray-500 text-center">
                    <button 
                      onClick={() => onRemove(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Remove course"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <td colSpan={2} className="px-4 py-2 text-sm font-medium text-gray-900">
                Total
              </td>
              <td className="px-4 py-2 text-sm font-medium text-gray-900">
                {courses.reduce((sum, course) => sum + course.credits, 0)}
              </td>
              <td colSpan={2} className="px-4 py-2 text-sm"></td>
              <td className="px-4 py-2 text-sm font-medium text-gray-900">
                {courses.reduce((sum, course) => sum + (course.credits * course.gradePoint), 0)}
              </td>
              <td className="px-4 py-2 text-sm"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CourseList;