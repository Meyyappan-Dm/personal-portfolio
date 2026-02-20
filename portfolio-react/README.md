# 🚀 Meyyappan DM - Portfolio Website

A stunning, modern portfolio website built with React, Framer Motion, and Tailwind CSS. Showcasing ML engineering projects, experience, certifications, and skills with beautiful animations and interactions.

![Portfolio Preview](https://img.shields.io/badge/React-19.2.0-blue) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.34.2-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-cyan)

## ✨ Features

- **🎨 Modern Design**: Glassmorphism, gradients, and smooth animations
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🎭 Advanced Animations**: Framer Motion powered scroll reveals, hover effects, and transitions
- **⚡ Performance Optimized**: Fast loading with Vite build tool
- **🌙 Dark Theme**: Beautiful dark color scheme with accent colors
- **📊 Interactive Sections**: 
  - Hero with particle effects and parallax
  - Animated project cards with 3D transforms
  - Timeline-style experience section
  - Interactive skill chips
  - Scroll progress indicator
  - Smooth scroll navigation

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.3.1** - Build tool and dev server
- **Framer Motion 12.34.2** - Animation library
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **React Intersection Observer** - Scroll-triggered animations
- **React Spring** - Physics-based animations

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Setup Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd portfolio-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Project Structure

```
portfolio-react/
├── public/                 # Static assets
│   ├── favicon.svg        # Site favicon
│   └── vite.svg          # Vite logo
├── src/
│   ├── components/       # React components
│   │   ├── About.jsx     # About section
│   │   ├── Certifications.jsx  # Certifications grid
│   │   ├── Contact.jsx   # Contact section
│   │   ├── Experience.jsx # Experience timeline
│   │   ├── Footer.jsx    # Footer component
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Hero.jsx      # Hero section with animations
│   │   ├── Projects.jsx  # Projects grid
│   │   └── Skills.jsx    # Skills showcase
│   ├── data/
│   │   └── portfolio.js  # All portfolio data (EDIT THIS!)
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles & Tailwind
├── index.html            # HTML template
├── package.json          # Dependencies & scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 📝 Customization Guide

### Updating Your Information

All your portfolio data is stored in `src/data/portfolio.js`. Edit this file to update:

- **Personal Info**: Name, title, tagline, bio, location
- **Experience**: Add/edit work experience entries
- **Projects**: Update project details, links, descriptions
- **Skills**: Modify skill categories and items
- **Certifications**: Add/remove certifications
- **Contact**: Update email, LinkedIn, GitHub links

### Example: Adding a New Project

```javascript
// In src/data/portfolio.js
projects: [
  // ... existing projects
  {
    title: "Your New Project",
    description: "A brief description of what it does.",
    highlight: "Key achievement or feature.",
    tech: "React, Node.js, MongoDB",
    url: "https://github.com/yourusername/project",
  },
]
```

### Example: Adding Experience

```javascript
experience: [
  // ... existing experience
  {
    title: "Your Role",
    company: "Company Name",
    date: "Jan 2024 – Present",
    location: "City, Country",
    description: "Overall description of your role.",
    bullets: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3",
    ],
    tags: ["React", "Python", "ML"],
  },
]
```

### Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      accent: "#3b82f6", // Change this to your preferred accent color
    },
  },
}
```

### Modifying Animations

Animations are configured in each component using Framer Motion. Key props:

- `initial`: Starting state
- `animate`: End state
- `whileHover`: Hover state
- `transition`: Animation timing

Example:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## 🚀 Building for Production

### Create Production Build

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 🌐 Deployment

### Netlify (Recommended)

#### Option 1: Git-based Deployment (Auto-deploy)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-react.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure build settings:
     - **Base directory**: `portfolio-react`
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Auto-deployment:**
   - Every push to `main` branch will automatically deploy
   - Netlify will rebuild and redeploy your site

#### Option 2: Manual Deploy (Drag & Drop)

1. **Build your site:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site is live!

### Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd portfolio-react
   vercel
   ```

3. **Follow prompts** and your site will be deployed!

### GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🔄 Updating Your Deployed Site

### If Using Netlify with Git:

1. **Make your changes** in `src/data/portfolio.js` or components
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. **Netlify auto-deploys** within 1-2 minutes!

### If Using Manual Deploy:

1. **Make your changes**
2. **Rebuild:**
   ```bash
   npm run build
   ```
3. **Upload the new `dist` folder** to Netlify/Vercel

## 🎨 Design Features Explained

### Hero Section
- **Particle effects**: Animated background particles
- **Gradient orbs**: Floating gradient blobs
- **Parallax scrolling**: Content moves at different speeds
- **Text reveal**: Staggered text animations

### Project Cards
- **3D transforms**: Cards tilt on hover
- **Shine effect**: Animated shine sweep on hover
- **Gradient overlays**: Color transitions
- **Scroll parallax**: Cards move with scroll

### Experience Timeline
- **Animated timeline**: Vertical line with dots
- **Card animations**: Slide-in from left
- **Hover effects**: Cards lift and glow
- **Staggered bullets**: List items animate in sequence

### Skills Section
- **Interactive chips**: Hover to see color changes
- **Group animations**: Cards animate in sequence
- **Floating elements**: Some skills float continuously

### Navigation
- **Scroll progress**: Top progress bar
- **Active section**: Highlights current section
- **Smooth scroll**: Smooth navigation between sections
- **Mobile menu**: Animated hamburger menu

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is busy:
```bash
# Vite will automatically try the next available port
# Or specify a port:
npm run dev -- --port 3000
```

### Build Errors

1. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node version:**
   ```bash
   node --version  # Should be 18+
   ```

### Animations Not Working

- Ensure Framer Motion is installed: `npm list framer-motion`
- Check browser console for errors
- Verify components are using `motion.` prefix

### Styles Not Applying

- Ensure Tailwind is configured correctly
- Check `tailwind.config.js` content paths
- Rebuild: `npm run build`

## 📚 Learning Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use!

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Meyyappan DM**
- Email: meyyappandm1705@gmail.com
- LinkedIn: [meyyappan-dm](https://www.linkedin.com/in/meyyappan-dm/)
- GitHub: [Meyyappan-Dm](https://github.com/Meyyappan-Dm)

---

**Built with ❤️ using React, Framer Motion, and Tailwind CSS**
