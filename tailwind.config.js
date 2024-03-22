/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.tsx",
   ],
   theme: {
      extend: {
         colors: {
            'soft-cyan': '#61dafb',
            'dark-grayish-blue': '#282c34'

         }
      },
   },
   plugins: [],
}