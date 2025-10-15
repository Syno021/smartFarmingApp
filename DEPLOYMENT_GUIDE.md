# Vercel Deployment Guide

## Quick Deploy Steps

### Option 1: Vercel Dashboard (Recommended)

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Add Vercel configuration"
   git push
   ```

2. **Configure Vercel Project:**
   - Go to https://vercel.com
   - Select your project
   - Go to Settings → Build & Development Settings
   - Set:
     - Framework Preset: **Other**
     - Build Command: `npm run build:web`
     - Output Directory: `dist`
     - Install Command: `npm install`
   
3. **Redeploy:**
   - Go to Deployments tab
   - Click ⋯ menu → "Redeploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? (Yes if exists, No if new)
# - Project name: (use default or custom)
# - Directory: ./ (current directory)
# - Override settings? No (vercel.json will be used)
```

## Troubleshooting

### Still Getting 404?

1. **Check Build Logs:**
   - In Vercel dashboard, go to Deployments
   - Click on the latest deployment
   - Check "Building" logs for errors

2. **Common Issues:**
   - **Node version**: Make sure Node.js 18+ is being used
     - Add to vercel.json: `"framework": null`
   - **Build fails**: Check that all dependencies are in package.json
   - **404 on routes**: vercel.json routes configuration handles this

3. **Verify Local Build:**
   ```bash
   npm run build:web
   # Check that dist/ folder is created with index.html
   ```

### Environment Variables

If you need environment variables:
1. Go to Settings → Environment Variables in Vercel
2. Add your variables
3. Redeploy

## Verification

After deployment, your app should be accessible at:
- Production: `https://your-project.vercel.app`
- All routes should work (no 404s)
- Static assets should load from `/_expo/static/`

## Support

If you still have issues:
1. Check Vercel build logs
2. Ensure vercel.json is in the root directory
3. Verify package.json has the build:web script
4. Check that Node.js version is 18+

