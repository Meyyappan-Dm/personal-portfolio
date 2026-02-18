# Meyyappan Dm – ML Engineer Portfolio

Simple single-page portfolio site built with plain HTML, CSS, and JavaScript.

## Structure

- `index.html` – main page with hero, about, experience, skills, projects, certifications, and contact sections.
- `styles.css` – styling, dark theme with blue accent.
- `script.js` – JavaScript for mobile menu, smooth scrolling, and animations.
- `favicon.svg` – site favicon.

## Running Locally

Just open `index.html` in your browser:

- On Windows: double-click `index.html`, or
- From a terminal in this folder:

```bash
start index.html
```

No build tools or dependencies are required.

## Deployment

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a GitHub repository** (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **main** branch and `/ (root)` folder
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio-website/`

### Option 2: Netlify (Free & Easy)

1. **Drag and Drop**:
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up/login (can use GitHub)
   - Drag your `portfolio_website` folder to Netlify's deploy area
   - Your site is live instantly!

2. **Or via Git**:
   - Push your code to GitHub
   - Connect Netlify to your GitHub repo
   - Netlify auto-deploys on every push

### Option 3: Vercel (Free & Fast)

1. **Via CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```
   Follow the prompts - your site will be live!

2. **Via Website**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Import your GitHub repository
   - Deploy!

### Option 4: Cloudflare Pages (Free)

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Select the `portfolio_website` folder
4. Deploy!

## Custom Domain (Optional)

All platforms above support custom domains:
- GitHub Pages: Settings → Pages → Custom domain
- Netlify: Domain settings → Add custom domain
- Vercel: Project Settings → Domains

## Quick Deploy Commands

**GitHub Pages** (after initial setup):
```bash
git add .
git commit -m "Update portfolio"
git push
```

**Netlify/Vercel**: Auto-deploys on git push if connected!

## Updating Netlify Deployment

See **[NETLIFY_DEPLOY.md](./NETLIFY_DEPLOY.md)** for detailed instructions on:
- How to update your Netlify site after making changes
- Setting up Git-based auto-deployment
- Troubleshooting deployment issues
- Adding custom domains

