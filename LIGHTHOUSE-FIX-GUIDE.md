# Lighthouse NO_FCP Error - Troubleshooting Guide

## ❌ Current Issue: NO_FCP (No First Contentful Paint)

**What this means**: The page didn't render any content at all.

---

## 🔍 STEP-BY-STEP DEBUGGING

### Step 1: Where Are You Testing?

**Question 1**: What URL did you run Lighthouse on?
- [ ] `http://localhost:4000` (local development)
- [ ] `https://bwork.sa` (production)
- [ ] Other: _______________

**Question 2**: Is your site deployed to production?
- [ ] Yes, I pushed code and Amplify deployed it
- [ ] No, I'm still testing locally
- [ ] Not sure

---

### Step 2: Test Locally First

**If testing on localhost**:

1. **Start dev server**:
   ```bash
   npm run dev
   ```

2. **Open browser**: http://localhost:4000

3. **Does it load?**
   - ✅ YES → Site works, proceed to Step 3
   - ❌ NO → See "Fix 1" below

---

### Step 3: Check Browser Console

1. **Open browser** (Chrome recommended)
2. **Press F12** (open DevTools)
3. **Go to Console tab**
4. **Look for errors**

**Common errors and solutions**:

#### Error: "Refused to load script... CSP"
**Cause**: Content Security Policy blocking resources
**Fix**: Temporarily disable CSP (see Fix 2 below)

#### Error: "Failed to fetch" or "CORS"
**Cause**: API requests blocked
**Fix**: Check API URL in .env.local

#### Error: "Module not found"
**Cause**: Missing dependencies
**Fix**: Run `npm install`

#### Error: Nothing loads, blank page
**Cause**: JavaScript error preventing render
**Fix**: See Fix 3 below

---

## 🔧 FIXES

### Fix 1: Site Won't Load Locally

**Symptoms**: Blank page on localhost:4000

**Steps**:
```bash
# 1. Stop any running servers
# Press Ctrl+C in terminal

# 2. Clear Next.js cache
rm -rf .next

# 3. Reinstall dependencies
npm install

# 4. Rebuild
npm run build

# 5. Start dev server
npm run dev

# 6. Visit http://localhost:4000
```

**Still not working?**
- Check for error messages in terminal
- Check package.json dependencies
- Ensure Node.js version is 18+ or 20+

---

### Fix 2: CSP Blocking Resources

**Symptoms**:
- Console shows "Refused to load... CSP"
- Styles not loading
- Scripts not executing

**Temporary Fix** (for testing):

1. **Rename current middleware**:
   ```bash
   mv middleware.ts middleware.backup.ts
   ```

2. **Create simple middleware**:
   ```bash
   mv middleware.test.ts middleware.ts
   ```

3. **Test again**:
   ```bash
   npm run dev
   ```

4. **Run Lighthouse again**

**If this fixes it**:
- CSP was too strict
- We need to adjust CSP rules
- I'll help you create a working CSP

---

### Fix 3: JavaScript Errors

**Symptoms**:
- Site loads partially
- Some components missing
- Console shows errors

**Steps**:

1. **Check error message in console**
2. **Common fixes**:

   **Error: "Cannot find module"**
   ```bash
   npm install
   ```

   **Error: "Unexpected token"**
   - TypeScript compilation error
   - Run: `npm run build` to see full error

   **Error: "X is not defined"**
   - Import missing
   - Check component imports

---

### Fix 4: Production Deployment Issues

**Symptoms**: Works on localhost, not on production

**Steps**:

1. **Check Amplify build logs**:
   - Go to AWS Amplify Console
   - Check latest build
   - Look for errors

2. **Check environment variables**:
   - Ensure `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
   - Ensure `NEXT_PUBLIC_API_URL` is set

3. **Check Amplify build settings**:
   ```yaml
   # amplify.yml should have:
   frontend:
     phases:
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

4. **Redeploy**:
   ```bash
   git add .
   git commit -m "fix: Resolve deployment issues"
   git push origin main
   ```

---

## 📊 EXPECTED LIGHTHOUSE SCORES (After Fix)

### Good Scores:
- **Performance**: 70-90 ✅
- **Accessibility**: 85-95 ✅
- **Best Practices**: 90-100 ✅
- **SEO**: 90-100 ✅

### Current Optimizations We Added:
- ✅ Code splitting (lazy loading)
- ✅ Image optimization
- ✅ Font optimization
- ✅ Accessibility features
- ✅ SEO metadata

**Your site SHOULD score well** once the loading issue is fixed!

---

## 🎯 QUICK TEST CHECKLIST

Run through this checklist:

### Local Testing:
- [ ] `npm run dev` - Server starts without errors
- [ ] http://localhost:4000 - Site loads
- [ ] F12 Console - No critical errors
- [ ] All pages work (home, services, contact)
- [ ] Forms submit successfully

### Production Testing (after deployment):
- [ ] https://bwork.sa - Site loads
- [ ] All pages accessible
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Lighthouse scores 70+

---

## 🚀 RECOMMENDED TESTING FLOW

### 1. Test Locally FIRST:
```bash
# Clear everything
rm -rf .next
npm install

# Build production version
npm run build

# Test production build locally
npm start

# Visit: http://localhost:4000
```

### 2. Run Lighthouse on Localhost:
- Open http://localhost:4000
- F12 → Lighthouse tab
- Select all categories
- Click "Analyze page load"

**Expected results**:
- Performance: 80+ (localhost is fast)
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

### 3. Deploy to Production:
```bash
git add .
git commit -m "fix: Resolve lighthouse issues"
git push origin main
```

### 4. Wait 5-10 Minutes for Deployment

### 5. Test Production:
- Visit https://bwork.sa
- Check it loads
- Run Lighthouse again

---

## ⚠️ KNOWN ISSUES & SOLUTIONS

### Issue: "upgrade-insecure-requests" in CSP
**Problem**: Forces HTTPS, might block localhost
**Solution**: Remove from CSP for local testing

### Issue: Framer Motion Large Bundle
**Problem**: Adds ~100KB to bundle size
**Solution**: Already using code splitting ✅

### Issue: Google Fonts Blocking Render
**Problem**: Fonts loading slowly
**Solution**: Already using font-display: swap ✅

### Issue: API Requests Failing
**Problem**: Backend API not responding
**Solution**: Check API is running at https://apis.bwork.sa/api

---

## 📞 STILL NOT WORKING?

If you've tried everything and it still doesn't work, share:

1. **Screenshot of browser console** (F12 → Console)
2. **What URL you're testing** (localhost or production)
3. **Terminal output** when running `npm run dev`
4. **Amplify build logs** (if deploying to production)

I'll help you debug further!

---

## 💡 MOST COMMON FIX

**95% of NO_FCP errors are caused by**:

1. ✅ **Not deployed yet** → Push code to production
2. ✅ **CSP too strict** → Temporarily disable middleware
3. ✅ **JavaScript error** → Check browser console
4. ✅ **Testing wrong URL** → Make sure you're on the right site

**Start with these 4 checks!**
