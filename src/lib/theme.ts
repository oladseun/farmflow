// FarmFlow Design System
// Color Palette and Typography Standards

export const colors = {
    // Brand Colors
    forestGreen: '#0B3D2E', // Primary Dark
    techTeal: '#00C2CB',    // Primary Action
    neonSprout: '#39FF14',  // Highlights/Status
    slateGrey: '#2D3748',   // Secondary Text
    cleanWhite: '#FFFFFF',  // Backgrounds

    // Legacy/Semantic mapping
    primary: '#0B3D2E',
    white: '#FFFFFF',
    black: '#000000',
    grey: '#F7F9FC',

    // Status
    success: '#39FF14',
    error: '#FF4D4F',
    warning: '#FAAD14',
    info: '#00C2CB',
};

export const typography = {
    fontFamily: {
        primary: "'Plus Jakarta Sans', sans-serif",
        secondary: "'Inter', sans-serif",
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
    },
};

export const spacing = {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
};

// Ant Design Theme Configuration
export const antdTheme = {
    token: {
        colorPrimary: colors.techTeal, // Buttons and active states use the pop color
        colorTextHeading: colors.forestGreen, // Headings use the deep brand color

        fontFamily: typography.fontFamily.secondary, // Body text uses Inter
        fontFamilyCode: typography.fontFamily.primary, // Headers override

        borderRadius: 8,

        colorBgLayout: '#F7F9FC',
        colorText: colors.slateGrey,
    },
    components: {
        Button: {
            fontFamily: typography.fontFamily.primary,
            fontWeight: 600,
        },
        Typography: {
            fontFamily: typography.fontFamily.primary,
        },
        Layout: {
            headerBg: colors.forestGreen,
            siderBg: colors.cleanWhite,
        },
        Menu: {
            itemSelectedColor: colors.techTeal,
            itemSelectedBg: '#E6F9FA', // Light version of tech teal
        }
    },
};

export default {
    colors,
    typography,
    spacing,
    antdTheme,
};
