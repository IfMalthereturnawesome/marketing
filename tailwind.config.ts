/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				desktop: '1440px',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: 'hsl(var(--primary) / <alpha-value>)',
				'primary-inverted': 'hsl(var(--primary-inverted) / <alpha-value>)',
				'primary-hover': 'hsl(var(--primary-hover) / <alpha-value>)',
				secondary: 'hsl(var(--secondary) / <alpha-value>)',
				'secondary-hover': 'hsl(var(--secondary-hover) / <alpha-value>)',
				tertiary: 'hsl(var(--tertiary) / <alpha-value>)',
				disabled: 'hsl(var(--disabled) / <alpha-value>)',
				'disabled-emphasize': 'hsl(var(--disabled-emphasize) / <alpha-value>)',
				'brand-primary': 'hsl(var(--brand) / <alpha-value>)',
				'brand-primary-emphasize': 'hsl(var(--brand-emphasize) / <alpha-value>)',
				'brand-subtle': 'hsl(var(--brand-subtle) / <alpha-value>)',
				error: 'hsl(var(--error) / <alpha-value>)',
				'error-emphasize': 'hsl(var(--error-emphasize) / <alpha-value>)',
				'error-subtle': 'hsl(var(--error-subtle) / <alpha-value>)',
				'success-subtle': 'hsl(var(--success-subtle) / <alpha-value>)',
				'neutral-subtle': 'hsl(var(--neutral-subtle) / <alpha-value>)',
				'warning-subtle': 'hsl(var(--warning-subtle) / <alpha-value>)',

				/* Text Colors (using the '-foreground' suffix) */
				'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
				'primary-hover-foreground': 'hsl(var(--primary-hover-foreground) / <alpha-value>)',
				'primary-inverted-foreground': 'hsl(var(--primary-inverted-foreground) / <alpha-value>)',
				'secondary-foreground': 'hsl(var(--secondary-foreground) / <alpha-value>)',
				'tertiary-foreground': 'hsl(var(--tertiary-foreground) / <alpha-value>)',
				'brand-foreground': 'hsl(var(--brand-foreground) / <alpha-value>)',
				'disabled-foreground': 'hsl(var(--disabled-foreground) / <alpha-value>)',
				'error-foreground': 'hsl(var(--error-foreground) / <alpha-value>)',
				'error-emphasize-foreground': 'hsl(var(--error-emphasize-foreground) / <alpha-value>)',
				'success-foreground': 'hsl(var(--success-foreground) / <alpha-value>)',
				'warning-foreground': 'hsl(var(--warning-foreground) / <alpha-value>)',
				'success-border': 'hsl(var(--success-border) / <alpha-value>)',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			fontFamily: {
				sans: ['Noto Sans', 'Helvetica', 'Arial', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('tailwindcss-animate')],
};
