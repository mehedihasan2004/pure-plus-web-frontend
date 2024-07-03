import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        disabledOpacity: '0.3',
        radius: {
          small: '2px',
          medium: '4px',
          large: '6px'
        },
        borderWidth: {
          small: '1px',
          medium: '1.5px',
          large: '2px'
        }
      },
      themes: {
        light: {
          colors: {
            primary: {
              50: '#D6E4FF',
              100: '#D6E4FF',
              200: '#ADC8FF',
              300: '#84A9FF',
              400: '#6690FF',
              500: '#3366FF',
              600: '#254EDB',
              700: '#1939B7',
              800: '#102693',
              900: '#091A7A',
              DEFAULT: '#3366FF',
              foreground: '#000000'
            }
          }
        },
        dark: {
          colors: {
            primary: {
              50: '#DDE9FE',
              100: '#DDE9FE',
              200: '#BCD2FD',
              300: '#9BB8FB',
              400: '#81A2F8',
              500: '#587FF4',
              600: '#4060D1',
              700: '#2C46AF',
              800: '#1C2F8D',
              900: '#101F75',
              DEFAULT: '#587FF4',
              foreground: '#ffffff'
            }
          }
        }
      }
    })
  ]
};
export default config;
