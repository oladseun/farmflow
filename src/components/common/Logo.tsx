import React from 'react';

interface LogoProps {
    variant?: 'full' | 'icon';
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '' }) => {
    if (variant === 'icon') {
        return (
            <div className={`flex items-center justify-center ${className}`}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="8" fill="#0B3D2E" />
                    <path d="M16 8L20 14H12L16 8Z" fill="#39FF14" />
                    <path d="M16 24L12 18H20L16 24Z" fill="#00C2CB" />
                    <circle cx="16" cy="16" r="2" fill="#FFFFFF" />
                </svg>
            </div>
        );
    }

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#0B3D2E" />
                <path d="M16 8L20 14H12L16 8Z" fill="#39FF14" />
                <path d="M16 24L12 18H20L16 24Z" fill="#00C2CB" />
                <circle cx="16" cy="16" r="2" fill="#FFFFFF" />
            </svg>
            <span className="text-xl font-bold font-jakarta text-forest-green">
                FarmFlow
            </span>
        </div>
    );
};

export default Logo;
