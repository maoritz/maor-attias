import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-teal-300 text-center py-4 shadow-inner">
      <button
        className="absolute top-0 transform -translate-x-1/2 -translate-y-3/4 bg-gray-800 rounded-full rounded-b pt-3 pb-1 pl-10 pr-10"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg
          className="w-12 h-12 text-teal-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <p className="mt-6">&copy; 2024 Maor Attias</p>
    </footer>
  );
};

export default Footer;
