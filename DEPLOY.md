# Deployment Guide

## Quick Start - GitHub Pages (Easiest)

Since you already have a GitHub account, this is the fastest way:

### Step 1: Initialize Git Repository

Open terminal in this folder (`portfolio_website`) and run:

```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

### Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio-website` (or any name you like)
3. Make it **Public** (required for free GitHub Pages)
4. **Don't** initialize with README
5. Click **Create repository**

### Step 3: Push Your Code

Copy the commands GitHub shows you, or use these (replace `YOUR_USERNAME`):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes, then visit: `https://YOUR_USERNAME.github.io/portfolio-website/`

**Done!** Your portfolio is now live! 🎉

---

## Alternative: Netlify (Drag & Drop - No Git Needed)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your entire `portfolio_website` folder
3. Your site is live instantly at a random URL like `random-name-123.netlify.app`
4. You can customize the URL in site settings

---

## Alternative: Vercel (CLI Method)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (run from portfolio_website folder)
vercel

# Follow prompts - it's that simple!
```

---

## Update Your Site

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages/Netlify/Vercel will automatically update your live site!

---

## Custom Domain (Optional)

Want `yourname.com` instead of `username.github.io`?

1. Buy a domain from Namecheap, Google Domains, etc.
2. In GitHub Pages settings → Custom domain, add your domain
3. Update your domain's DNS records (GitHub will show you how)

---

## Troubleshooting

**Site not loading?**
- Wait 2-3 minutes after enabling Pages
- Check repository is Public (not Private)
- Verify `index.html` is in the root folder

**Changes not showing?**
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Check GitHub Actions tab for build errors

**Need help?** Check the main README.md for more details!
