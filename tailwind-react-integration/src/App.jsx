// App.jsx
import React from 'react';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <div className="flex items-center top-0 justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-lg max-w-md top-0">
        <p className="text-lg text-gray-700">
          This is a simple paragraph styled with Tailwind CSS in a React application.
        </p>
      </div>
      <UserProfile></UserProfile>
    </div>
  );
};

export default App;
