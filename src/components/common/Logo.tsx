import React from 'react';

interface LogoProps {
    variant?: 'full' | 'icon';
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '' }) => {
    return (
        <div className={className}>
            <img
                src="/branding/main-logo.png"
                alt="FarmFlow Logo"
                style={{
                    height: variant === 'icon' ? '32px' : '40px',
                    width: 'auto',
                    objectFit: 'contain'
                }}
            />
        </div>
    );
};

export default Logo;
