import React from 'react';

interface TickMarkProps {
  className?: string;
}

const TickMark: React.FC<TickMarkProps> = ({ className = '' }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="24" height="24" rx="12" fill="#20BF12" />
      <path
        d="M9.99993 14.7999L7.19993 11.9999L6.2666 12.9333L9.99993 16.6666L17.9999 8.66661L17.0666 7.73328L9.99993 14.7999Z"
        fill="white"
      />
    </svg>
  );
};

export default TickMark;
