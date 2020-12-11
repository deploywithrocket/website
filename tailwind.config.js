const { fontFamily } = require('tailwindcss/defaultTheme');
const typography = require('./typography.config');

module.exports = {
    purge: {
        content: ['./src/**/*.vue', './src/**/*.md'],
        options: {
            whitelistPatterns: [/token$/],
        },
    },

    theme: {
        extend: {
            fontFamily: {
                sans: ['Varela', ...fontFamily.sans],
                code: ['Fira Code'],
            },
            fontSize: {
                'xs': '.75rem',
                'sm': '12px',
                'base': '14px',
                'lg': '16px',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
            },
            inset: {
                10: '4.5rem',
                12: '5rem',
                14: '5.5rem',
                16: '6rem',
                18: '6.5rem',
            },
            width: {
                sidebar: '20rem',
            },
        },

        typography,
    },

    variants: {
        boxShadow: ['focus', 'responsive', 'focus-visible'],
        typography: ['responsive'],
        animation: ['motion-safe'],
    },

    plugins: [
        //
        require('tailwindcss-theming'),
        require('@tailwindcss/typography'),
    ],
};
