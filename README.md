# Aditya Panda - Cybersecurity & Machine Learning Portfolio

A modern, dark hacker-themed personal portfolio built with React, Vite, TailwindCSS, and Framer Motion. This project features a Matrix digital rain background, a hacker booting sequence splash screen, and functional interactive terminal.

## Requirements

- **Node.js**: Ensure Node.js (v18+) is installed on your system.

## Setup & Installation

1. **Open a terminal** inside this folder (`Portfolio`).
2. **Install all dependencies** by running:
   ```bash
   npm install --legacy-peer-deps
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** and navigate to `http://localhost:5173` to view your portfolio!

## Structure

```
portfolio/
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   ├── HackerSplash.tsx
│   │   ├── MatrixRain.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── TerminalApp.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Achievements.tsx
│       └── Contact.tsx
└── public/
    └── Aditya_Panda_Resume.pdf
```

## Adding Your Resume

Before deployment, ensure you place your PDF resume directly inside the `public/` directory and name it **Aditya_Panda_Resume.pdf**. The download buttons are configured to point precisely to this file.

## Deployment

The website can be hosted on **GitHub Pages, Vercel, or Netlify** easily because it's a static frontend site.
To create a production build manually:
```bash
npm run build
```
The output will be inside the `dist/` directory.

---
*Built with ❤️ utilizing React, TailwindCSS, and Framer Motion.*
