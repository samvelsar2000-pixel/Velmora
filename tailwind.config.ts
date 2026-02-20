import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#18191d',
        steel: '#2b2d32'
      },
      boxShadow: {
        glow: '0 10px 30px rgba(255,255,255,0.08)'
      },
      backgroundImage: {
        'metal-gradient': 'linear-gradient(135deg, #0a0a0b 0%, #18191d 40%, #2b2d32 100%)'
      }
    }
  },
  plugins: []
};

export default config;
