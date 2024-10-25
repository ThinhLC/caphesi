
import React from 'react';

function CustomButton({ children, onClick, size = 'medium', className = '', ...props }) {
    const sizeClasses = {
        small: 'py-1 px-3 text-sm',     //nhỏ
        medium: 'py-2 px-4 text-base',  //vừa
        large: 'py-3 px-6 text-lg',     //lớn
    };

    return (
        <button
            onClick={onClick}
            className={`text-color-main font-bold hover:bg-color-main hover:text-white ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default CustomButton;
