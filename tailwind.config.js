/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                appBackground: '#FFFAFC',
                appBackgroundDark: '#272d35',
                sidebarBackground: '#b8d4fc',
                sidebarBackgroundDark: '#0f172a',
                cardBackgroundDark: '#0e1f38',
                primaryText: '#2c3649',
                primaryTextDark: '#edf0f4',
                secondaryText: '#9399A1',
                primary: {
                    100: '#a9c3ea',
                    200: '#93b5e5',
                    300: '#7ba7e0',
                    400: '#428bd5',
                    500: '#077ad9',
                },
                secondary: {
                    100: '#9197af',
                    400: '#27344c',
                },
            },
            fontFamily: {
                display: ['Inter', 'sans-serif'],
                content: ['Nunito Sans', 'serif'],
            },
        },
        screens: {
            sm: '640px', // Small devices (640px and up)
            md: '768px', // Medium devices (768px and up)
            lg: '1024px', // Large devices (1024px and up)
            xl: '1280px', // Extra large devices (1280px and up)
            '2xl': '1536px', // 2XL devices (1536px and up)
        },
    },
    darkMode: ['class'],
    plugins: [],
}
