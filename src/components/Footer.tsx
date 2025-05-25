import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} MCA SGPA/CGPA Calculator. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-400">
          Developed for MCA students to calculate SGPA and CGPA as per university guidelines.
        </p>
      </div>
    </footer>
  );
};

export default Footer;