import React from 'react';

const CourseSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {[...Array(16)].map((_, index) => (
        <div key={index} className="border rounded-lg p-2 animate-pulse">
          <div className="w-full h-36 bg-gray-200 rounded-lg"></div>
          <div className="mt-1.5">
            <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
            <div className="w-1/2 h-4 bg-gray-200 rounded mt-1"></div>
          </div>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
            <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="w-1/4 h-4 bg-gray-200 rounded mt-1"></div>
        </div>
      ))}
    </div>
  );
};

export default CourseSkeleton;
