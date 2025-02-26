import React from 'react';
import Logo from './Logo';

const LogoDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-4">Logo Component Demo</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Logo className="w-24 h-24" />
      </div>
    </div>
  );
};

export default LogoDemo;
