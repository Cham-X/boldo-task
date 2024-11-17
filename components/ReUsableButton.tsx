// components/Button.tsx
import React from 'react';

type ButtonProps = {
  backgroundColor?: string;      
  textColor?: string;            
  content: string;               
  onClick?: () => void;          
  className?: string;             
  disabled?: boolean;             
};

const Button: React.FC<ButtonProps> = ({        
  content,
  onClick,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` 
        ${className} 
        rounded-full 
        px-12 
        py-4
        flex 
        items-center 
        justify-center
        text-center
        font-semibold 
        text-xl
        transition 
        duration-200 
        ease-in-out 
        transform 
        hover:scale-105 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-opacity-75 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {content}
    </button>
  );
};

export default Button;
