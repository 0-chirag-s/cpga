import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-800 text-white p-6">
          <h1 className="text-2xl font-bold mb-2">About SGPA/CGPA Calculator</h1>
          <p className="text-blue-100">
            Understanding the grading system for MCA students
          </p>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Grading System</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Letter Grade</th>
                  <th className="px-4 py-2 text-left">Grade Points</th>
                  <th className="px-4 py-2 text-left">Marks Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">O (Outstanding)</td>
                  <td className="px-4 py-2">10</td>
                  <td className="px-4 py-2">90-100</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-2">A+</td>
                  <td className="px-4 py-2">9</td>
                  <td className="px-4 py-2">80-89</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">A</td>
                  <td className="px-4 py-2">8</td>
                  <td className="px-4 py-2">70-79</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-2">B+</td>
                  <td className="px-4 py-2">7</td>
                  <td className="px-4 py-2">60-69</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">B</td>
                  <td className="px-4 py-2">6</td>
                  <td className="px-4 py-2">50-59</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-2">C</td>
                  <td className="px-4 py-2">5</td>
                  <td className="px-4 py-2">45-49</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">D</td>
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">40-44</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">F (Fail)</td>
                  <td className="px-4 py-2">0</td>
                  <td className="px-4 py-2">Below 40</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">How SGPA and CGPA are Calculated</h2>
          
          <div className="mb-6 space-y-4">
            <h3 className="text-lg font-medium">Semester Grade Point Average (SGPA)</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="mb-2 font-medium">Formula:</p>
              <div className="p-3 bg-white rounded border border-gray-200">
                <p className="text-center">
                  SGPA = Σ[(Course Credits)(Grade Points)] / Σ[(Course Credits)]
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                All courses registered in that semester (including those with F Grade) are considered for SGPA calculation.
              </p>
            </div>
            
            <h3 className="text-lg font-medium">Cumulative Grade Point Average (CGPA)</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="mb-2 font-medium">Formula:</p>
              <div className="p-3 bg-white rounded border border-gray-200">
                <p className="text-center">
                  CGPA = Σ[(Course Credits)(Grade Points)] / Σ[(Course Credits)]
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                All courses registered until that semester, excluding courses with F Grade, are considered for CGPA calculation.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">MCA Curriculum Structure</h2>
          <p className="mb-4">
            The MCA program has a structured curriculum with specific credit weightage for different courses:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Basic Science Courses (BSC)</li>
            <li>Integrated Professional Core Courses (IPCC)</li>
            <li>Professional Core Courses (PCC)</li>
            <li>Professional Core lab (PCL)</li>
            <li>Humanities, Social Science courses (HS)</li>
            <li>Non-Credit Mandatory Courses (NCMC)</li>
          </ul>
          
          <p className="text-sm text-gray-600 italic">
            Note: This calculator follows the grading system as specified by the university guidelines.
            The SGPA and CGPA are calculated to two decimal places.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;