# 🚀 Quick Setup Guide

## Installation

```bash
cd portfolio-react
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Update Your Info

Edit `src/data/portfolio.js` with your information:

- Personal details (name, bio, location)
- Experience entries
- Projects
- Skills
- Certifications
- Contact links

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## Deploy to Netlify

### Option 1: Git Auto-Deploy (Recommended)

1. Push code to GitHub
2. Connect repo to Netlify
3. Set build settings:
   - Base directory: `portfolio-react`
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Option 2: Manual Deploy

1. Run `npm run build`
2. Drag `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

## Update Deployed Site

**With Git:**
```bash
git add .
git commit -m "Update portfolio"
git push
# Netlify auto-deploys!
```

**Manual:**
1. Make changes
2. Run `npm run build`
3. Upload new `dist` folder

## Key Files

- `src/data/portfolio.js` - **Edit this for your info**
- `src/components/` - Component files
- `tailwind.config.js` - Color/styling config
- `package.json` - Dependencies

## Need Help?

Check `README.md` for detailed documentation!
