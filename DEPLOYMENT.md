# Vercel Deployment Guide

## Changes Made

### 1. Updated `package.json`
Added the `build:web` script that Vercel needs to build your Expo app for web:
```json
"build:web": "expo export --platform web"
```

### 2. Created `vercel.json`
Configuration file that tells Vercel:
- How to build your project
- Where to find the built files (`dist` directory)
- How to handle routing for your single-page application

### 3. Created `.vercelignore`
Prevents unnecessary files from being uploaded to Vercel, speeding up deployments.

## Deployment Steps

### Option 1: Deploy from Git (Recommended)

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Add Vercel deployment configuration"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will automatically detect the settings from `vercel.json`
   - Click "Deploy"

### Option 2: Deploy using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **For production:**
   ```bash
   vercel --prod
   ```

## Testing Locally

Before deploying, test the build locally:

```bash
npm run build:web
```

This will create a `dist` folder with your production-ready web app.

## Troubleshooting

### Build Fails
- Ensure all dependencies are listed in `package.json`
- Check for any TypeScript errors: `npm run lint`
- Try building locally first: `npm run build:web`

### Routes Don't Work
The `vercel.json` rewrites configuration handles client-side routing. All requests are redirected to `index.html`.

### Environment Variables
If you need environment variables:
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables there

## Important Notes

- The build output directory is `dist/` (configured in both `app.json` and `vercel.json`)
- Your app is configured for static site generation (SSG) as specified in `app.json`
- Make sure your repository is connected to Vercel for automatic deployments on every push

