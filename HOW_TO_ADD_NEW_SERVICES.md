# How to Add New Services - Complete Guide

## Overview

Your BWORK website now supports **automatic service pages**! When you add a service in the admin panel, it automatically gets a page on your website.

## How It Works

### Architecture

1. **Admin Panel** (`bwork admin`) - Add/edit services with data
2. **Backend API** (`bwork backend`) - Stores service data in database
3. **User Website** (`bwork`) - Displays services with dynamic routing

### Service Page Types

Your website now has **TWO types** of service pages:

#### 1. Custom Hardcoded Pages (Existing)
- **Example**: `/services/passive-cabling`
- **Location**: `app/services/passive-cabling/page.tsx`
- **Features**: Custom content, SEO optimized, detailed features
- **When to use**: Main services that need special content/design

#### 2. Dynamic Pages (New!)
- **Example**: `/services/new-link`
- **Location**: `app/services/[slug]/page.tsx` (one file for all)
- **Features**: Automatic, uses data from admin panel
- **When to use**: New services added via admin

### How Routing Works

When a user visits `/services/some-slug`:

1. **Next.js checks** if `app/services/some-slug/page.tsx` exists
2. **If YES** → Shows the custom hardcoded page
3. **If NO** → Uses the dynamic `[slug]` route
4. **Dynamic route** → Fetches service data from API
5. **If service found** → Shows the service page
6. **If not found** → Shows 404 page

## Step-by-Step: Adding a New Service

### Method 1: Automatic (Using Admin Panel)

1. **Login to Admin Panel**
   - Go to `http://localhost:3001` (dev) or your admin URL
   - Login with your credentials

2. **Navigate to Services**
   - Click "Services" in the sidebar

3. **Click "Add Service"**

4. **Fill in the Form:**

   **Required Fields:**
   - **ID**: Unique number (e.g., 10, 11, 12)
   - **Title**: Service name (e.g., "Network Infrastructure")
   - **Slug**: URL-friendly version (e.g., "network-infrastructure")
     - Only use lowercase letters, numbers, and hyphens
     - No spaces or special characters
   - **Description**: Brief description of the service
   - **Sub-services**: At least one offering (e.g., "LAN Design", "WAN Setup")
   - **Link**: Internal link (e.g., "/services/network-infrastructure")

   **Optional Fields** (for richer pages):
   - **Service Image URL**: Link to service image (e.g., `https://example.com/network.jpg`)
   - **Rich Content**: Detailed paragraphs about the service
   - **Key Features**: List of standout features
   - **CTA Text**: Button text (default: "Learn More")

5. **Click "Create Service"**

6. **✅ Done!**
   - Service is now live at `/services/your-slug`
   - No code changes needed
   - No deployment needed (after initial [slug] setup)

### Method 2: Custom Page (For Important Services)

For services that need custom design or extensive content:

1. **Create a folder** in `app/services/`
   ```
   app/services/your-slug/
   ```

2. **Copy an existing page** (e.g., `passive-cabling/page.tsx`)

3. **Customize the content**:
   - Update metadata (title, description, keywords)
   - Add custom features array
   - Add technical specs
   - Customize the layout

4. **Deploy** the changes

This custom page will take priority over the dynamic route.

## Examples

### Example 1: Quick Service (Using Admin)

**Scenario**: Add "IT Consulting" service

**Admin Panel Input:**
```
Title: IT Consulting Services
Slug: it-consulting
Description: Expert IT consulting to optimize your technology infrastructure
Sub-services:
  - Technology Assessment
  - IT Strategy Planning
  - Infrastructure Optimization
Link: /services/it-consulting
Image: https://yourcdn.com/images/consulting.jpg
Rich Content:
  Our IT consulting services help businesses...
  We provide comprehensive assessments...
Features:
  - Expert Team
  - Proven Methodologies
  - Cost-Effective Solutions
CTA Text: Get Consulting
```

**Result**:
✅ Instant page at `https://bwork.tech/services/it-consulting`

### Example 2: Updating an Existing Service

1. Go to Admin → Services
2. Click edit icon on the service
3. Update any fields
4. Click "Update Service"
5. ✅ Page automatically updates (may take up to 60 seconds to reflect due to caching)

## Important Notes

### Slug Guidelines

✅ **Good Slugs:**
- `network-infrastructure`
- `cloud-solutions`
- `data-center-management`
- `passive-cabling`

❌ **Bad Slugs:**
- `Network Infrastructure` (has spaces)
- `cloud_solutions` (uses underscore)
- `Data-Center!` (special characters)
- `CLOUD` (uppercase)

### Image URLs

- Must be public, accessible URLs
- Use HTTPS for security
- Recommended: Upload to your CDN or image hosting service
- Format: `https://cdn.example.com/images/service-name.jpg`

### Caching

- Service pages are cached for 60 seconds
- After updating a service, changes may take up to 1 minute to appear
- To force refresh: restart the Next.js server (in production, redeploy)

## Testing Your New Service

### Local Testing

1. **Start the admin panel**:
   ```bash
   cd "C:/bwork admin"
   npm run dev
   ```

2. **Start the user website**:
   ```bash
   cd C:/bwork
   npm run dev
   ```

3. **Add a service** in admin panel

4. **Visit the service page**:
   ```
   http://localhost:3000/services/your-slug
   ```

5. **Verify** all fields display correctly

### Production Testing

1. **Add service** in admin panel (on production)

2. **Visit** `https://bwork.tech/services/your-slug`

3. **Check**:
   - Page loads without 404
   - Title and description show correctly
   - Sub-services list displays
   - Images load (if provided)
   - CTA button works
   - Links to contact page work

## Troubleshooting

### Issue: 404 Error

**Possible Causes:**
1. ❌ Service doesn't exist in database
2. ❌ Slug mismatch (check admin vs URL)
3. ❌ API is down or not responding
4. ❌ Cache hasn't updated yet

**Solutions:**
1. Verify service exists in admin panel
2. Check the exact slug used
3. Wait 60 seconds for cache to clear
4. Check backend API is running

### Issue: Missing Data

**Possible Causes:**
1. ❌ Fields left empty in admin
2. ❌ API response format changed
3. ❌ Frontend code issue

**Solutions:**
1. Edit service in admin and fill all desired fields
2. Check browser console for errors
3. Verify API response structure

### Issue: Old Data Showing

**Cause:** Caching

**Solutions:**
1. Wait 60 seconds
2. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. In production: Redeploy the site

## API Reference

### Get All Services
```
GET https://apis.bwork.sa/api/services

Response:
{
  "success": true,
  "data": {
    "services": [...]
  }
}
```

### Service Data Structure
```typescript
{
  _id: string,
  id: number,
  title: string,
  slug: string,
  description: string,
  subServices: string[],
  link: string,
  image?: string,
  richContent?: string,
  features?: string[],
  ctaText?: string
}
```

## Best Practices

### For Quick Services (Dynamic Pages)

✅ **Do:**
- Fill in all optional fields for better pages
- Use high-quality images
- Write clear, concise sub-services
- Add 3-6 key features

❌ **Don't:**
- Leave description empty
- Use very long sub-service names
- Use low-quality or inappropriate images

### For Important Services (Custom Pages)

✅ **Do:**
- Create custom page for SEO-critical services
- Add detailed technical specifications
- Include custom icons and graphics
- Optimize metadata thoroughly

❌ **Don't:**
- Create custom pages for every service (unnecessary work)
- Duplicate content across pages

## File Structure

```
bwork/
├── app/
│   └── services/
│       ├── [slug]/                    # Dynamic route (new!)
│       │   ├── page.tsx              # Main dynamic page
│       │   └── not-found.tsx         # 404 page
│       ├── passive-cabling/           # Custom page
│       │   └── page.tsx
│       ├── active-networking/         # Custom page
│       │   └── page.tsx
│       └── ...other custom pages
```

## Deployment

### After Adding Dynamic Route (One-time)

```bash
# In the bwork folder
git add .
git commit -m "Add dynamic service page routing"
git push origin main
```

Your deployment platform (Vercel, Netlify, etc.) will automatically deploy.

### After Adding Services via Admin

✅ **No deployment needed!**
Services added through admin panel work immediately.

## Summary

🎉 **You can now add services in two ways:**

1. **Quick**: Use admin panel → Automatic page creation
2. **Custom**: Create dedicated page → Full control

Both methods work together seamlessly!

---

**Questions?** Check the console logs or contact your development team.
