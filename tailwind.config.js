/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montrealBook: ['"Montreal Book"', 'sans-serif'],
                montrealBold: ['"Montreal Bold"', 'sans-serif'],
                montrealItalic: ['"Montreal Italic"', 'sans-serif'],
                montrealMedium: ['"Montreal Medium"', 'sans-serif'],
                montrealSemiBolditalic: [
                    '"Montreal SemiBolditalic"',
                    'sans-serif',
                ],
                montrealThin: ['"Montreal Thin"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};