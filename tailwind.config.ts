import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	screens: {
  		xs: '480px',
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px'
  	},
  	fontSize: {
  		xs: '0.75rem',
  		sm: '0.875rem',
  		base: '1rem',
  		lg: '1.125rem',
  		xl: '1.25rem',
  		'2xl': '1.5rem',
  		'3xl': '1.875rem',
  		'4xl': '2.25rem',
  		'5xl': '3rem',
  		'6xl': '4rem'
  	},
  	extend: {
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			'fade-out': {
  				'0%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				},
  				'100%': {
  					opacity: '0',
  					transform: 'translateY(-10px)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(0)'
  				},
  				'100%': {
  					transform: 'translateY(-100%)'
  				}
  			},
  			'gradient-x': {
  				'0%, 100%': {
  					'background-size': '200% 200%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				}
  			}
  		},
  		animation: {
  			'float-slow': 'float 6s ease-in-out infinite',
  			'float-delayed': 'float 6s ease-in-out infinite 3s',
  			'fade-out': 'fade-out 0.5s ease-out forwards',
  			'fade-in': 'fade-in 0.5s ease-in forwards',
  			'slide-up': 'slide-up 0.3s ease-out forwards',
  			'gradient-x': 'gradient-x 15s ease infinite'
  		},
  		colors: {
  			gray: {
  				'100': '#f7fafc',
  				'200': '#edf2f7',
  				'300': '#e2e8f0',
  				'400': '#cbd5e0',
  				'500': '#a0aec0',
  				'600': '#718096',
  				'700': '#4a5568',
  				'800': '#2d3748',
  				'900': '#1a202c'
  			},
  			blue: {
  				'100': '#ebf8ff',
  				'200': '#bee3f8',
  				'300': '#90cdf4',
  				'400': '#63b3ed',
  				'500': '#4299e1',
  				'600': '#3182ce',
  				'700': '#2b6cb0',
  				'800': '#2c5282',
  				'900': '#2a4365'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string | Record<string, string>>>) => void }) => {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    },
      require("tailwindcss-animate")
],
} satisfies Config;
