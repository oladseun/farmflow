// FarmFlow Design System
// Color Palette and Typography Standards

export const colors = {
    // Primary Colors
    primary: '#13171F',

    // Secondary Colors
    lightGreen: '#E4FFC4',
    oliveGreen: '#DDE8AC',
    pink: '#FFC1C1',
    champee: '#FFEADC',
    lightGrey: '#EFEFF5',
    sky: '#C1EEFF',
    violet: '#C3C1FF',

    // Semantic Colors
    success: '#E4FFC4',
    warning: '#FFEADC',
    error: '#FFC1C1',
    info: '#C1EEFF',

    // Neutral Colors
    white: '#FFFFFF',
    black: '#13171F',
    grey: '#EFEFF5',

    // Text Colors
    textPrimary: '#13171F',
    textSecondary: '#6B7280',
    textLight: '#9CA3AF',
};

export const typography = {
    fontFamily: {
        primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        black: 900,
    },
    fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
    },
    lineHeight: {
        tight: 1.25,
        normal: 1.5,
        relaxed: 1.75,
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

export const borderRadius = {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
};

export const shadows = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
};

// Ant Design Theme Configuration
export const antdTheme = {
    token: {
        colorPrimary: colors.primary,
        colorSuccess: colors.lightGreen,
        colorWarning: colors.champee,
        colorError: colors.pink,
        colorInfo: colors.sky,

        fontFamily: typography.fontFamily.primary,
        fontSize: 16,
        borderRadius: 12,

        colorBgContainer: colors.white,
        colorBgLayout: colors.lightGrey,
        colorText: colors.textPrimary,
        colorTextSecondary: colors.textSecondary,
    },
    components: {
        Button: {
            borderRadius: 12,
            controlHeight: 44,
            fontWeight: typography.fontWeight.semibold,
        },
        Input: {
            borderRadius: 12,
            controlHeight: 44,
        },
        Card: {
            borderRadius: 16,
        },
        Layout: {
            headerBg: colors.white,
            siderBg: colors.white,
            bodyBg: colors.lightGrey,
        },
    },
};

export default {
    colors,
    typography,
    spacing,
    borderRadius,
    shadows,
    antdTheme,
};
