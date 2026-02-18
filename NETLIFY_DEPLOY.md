# How to Update Your Netlify Deployment

## Quick Update (After Making Changes)

### Method 1: Drag & Drop (Easiest - No Git Required)

1. **Make your changes** to files in `portfolio_website` folder
2. **Go to** [app.netlify.com/drop](https://app.netlify.com/drop)
3. **Drag your entire `portfolio_website` folder** to Netlify
4. **Done!** Your site updates instantly

**Note:** This creates a new deployment each time. For better workflow, use Method 2.

---

### Method 2: Git-Based Deployment (Recommended)

If you connected Netlify to your GitHub repository, updates are automatic:

1. **Make your changes** locally
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio: add experience section"
   git push
   ```
3. **Netlify automatically deploys** your changes (usually takes 1-2 minutes)
4. **Check deployment status** at [app.netlify.com](https://app.netlify.com) → Your Site → Deploys

---

## Step-by-Step: First Time Netlify Setup with Git

### 1. Push Your Code to GitHub

```bash
cd C:\Users\Lenovo\Documents\portfolio_website

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio website"

# Create repository on GitHub first, then:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

### 2. Connect Netlify to GitHub

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up/login (use GitHub to connect)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** → Authorize Netlify
5. Select your `portfolio-website` repository
6. Configure build settings:
   - **Build command:** (leave empty - no build needed)
   - **Publish directory:** `/` (root folder)
7. Click **"Deploy site"**

### 3. Your Site is Live!

Netlify will give you a URL like: `random-name-123.netlify.app`

---

## Updating Your Site (After Initial Setup)

### Every Time You Make Changes:

```bash
# 1. Make your changes to HTML/CSS/JS files

# 2. Stage changes
git add .

# 3. Commit with descriptive message
git commit -m "Add experience section and update logo"

# 4. Push to GitHub
git push

# 5. Netlify automatically deploys (check Netlify dashboard)
```

**That's it!** Your site updates automatically within 1-2 minutes.

---

## Custom Domain (Optional)

1. **Buy a domain** from Namecheap, Google Domains, etc.
2. **In Netlify Dashboard:**
   - Go to your site → **Domain settings**
   - Click **"Add custom domain"**
   - Enter your domain (e.g., `meyyappan.dev`)
3. **Update DNS records** (Netlify will show you exactly what to add)
4. **Wait 24-48 hours** for DNS propagation

---

## Troubleshooting

### Changes Not Showing?

1. **Hard refresh:** Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Check Netlify Deploys:** Make sure latest deploy succeeded (green checkmark)
3. **Clear browser cache:** Or try incognito mode
4. **Check file paths:** Make sure all files are in the root folder

### Deployment Failed?

1. **Check Netlify logs:** Site → Deploys → Click failed deploy → View logs
2. **Common issues:**
   - Missing `index.html` in root
   - File path errors (use relative paths)
   - Build command errors (should be empty for static sites)

### Need to Rollback?

1. Go to Netlify → Your Site → **Deploys**
2. Find previous successful deploy
3. Click **"..."** → **"Publish deploy"**

---

## Pro Tips

- **Preview Deploys:** Every push creates a preview URL (great for testing before going live)
- **Branch Deploys:** Deploy from different Git branches
- **Environment Variables:** Store API keys securely in Netlify settings
- **Form Handling:** Netlify can handle contact forms automatically (no backend needed)

---

## Quick Reference

**Update site:**
```bash
git add .
git commit -m "Your update message"
git push
```

**Check deployment:** [app.netlify.com](https://app.netlify.com)

**Manual deploy:** Drag folder to [app.netlify.com/drop](https://app.netlify.com/drop)
