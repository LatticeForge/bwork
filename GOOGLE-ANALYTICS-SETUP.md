# Google Analytics 4 Setup Guide - Beyond Work

## Step 1: Create Google Analytics 4 Account

### 1.1 Sign In
1. Go to **https://analytics.google.com/**
2. Sign in with your Google account (use your business Gmail)

### 1.2 Create Account
1. Click **"Admin"** (gear icon in bottom left)
2. Click **"Create Account"**
3. Fill in:
   - **Account name**: "Beyond Work"
   - Check all data sharing options (recommended for better insights)
4. Click **"Next"**

### 1.3 Create Property
1. **Property name**: "Beyond Work Website"
2. **Reporting time zone**: "(GMT+03:00) Arabia Standard Time"
3. **Currency**: "Saudi Riyal (SAR)"
4. Click **"Next"**

### 1.4 Business Information
1. **Industry category**: "Technology"
2. **Business size**: Select your company size
3. **How you plan to use Analytics**: Select all that apply:
   - Examine user behavior
   - Measure advertising ROI
   - Generate leads
4. Click **"Create"**
5. Accept Terms of Service ✅

---

## Step 2: Set Up Data Stream

### 2.1 Create Web Data Stream
1. You'll automatically be on **"Choose a platform"** screen
2. Click **"Web"**
3. Fill in:
   - **Website URL**: `https://bwork.sa`
   - **Stream name**: "Beyond Work Main Website"
   - ✅ **Enable enhanced measurement** (IMPORTANT - leave this ON)
4. Click **"Create stream"**

### 2.2 Get Your Measurement ID
1. You'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. **COPY THIS ID** - you'll need it next!

Example: `G-ABC1234567`

---

## Step 3: Add Measurement ID to Your Website

### 3.1 Update Environment File
1. Open `C:\bwork\.env.local`
2. Replace this line:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=
   ```

   With your actual ID:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC1234567
   ```
   (Use your real ID, not the example!)

3. **Save the file**

### 3.2 Test Locally (Optional)
If you want to test analytics in development:
```env
NEXT_PUBLIC_GA_ENABLED=true
```

Then:
```bash
npm run dev
```

Visit http://localhost:4000 and check Google Analytics Real-Time view to see your visit!

---

## Step 4: Configure Enhanced Measurement (Already Enabled!)

Google Analytics is automatically tracking:
- ✅ Page views
- ✅ Scrolls
- ✅ Outbound clicks
- ✅ Site search
- ✅ Video engagement
- ✅ File downloads

**No additional setup needed!** Your custom events will also track automatically.

---

## Step 5: Set Up Conversions (IMPORTANT for Business!)

### 5.1 Mark Events as Conversions
1. In GA4, go to **Admin** → **Events** (under Data display)
2. Wait 24 hours for events to appear, then mark these as conversions:
   - ✅ `form_submit` - Contact form submissions
   - ✅ `contact_click` - Contact button clicks
   - ✅ `view_service` - Service page views
   - ✅ `cta_click` - Call-to-action clicks

Or create them manually:
1. Click **"Create event"**
2. Event name: `form_submit`
3. Mark as conversion ✅

### 5.2 Set Up Custom Dimensions (Advanced)
1. Go to **Admin** → **Custom Definitions**
2. Create custom dimensions:
   - **Dimension name**: "Service Name"
   - **Scope**: Event
   - **Event parameter**: `service_name`

Repeat for:
   - CTA Name (`cta_name`)
   - Form Name (`form_name`)
   - Click Location (`click_location`)

---

## Step 6: Configure Reports

### 6.1 Create Custom Report - Lead Generation
1. Go to **Explore** in left menu
2. Click **"Blank"** template
3. Name: "Lead Generation Funnel"
4. Add segments:
   - All Users
   - Converters
5. Add dimensions:
   - Page path
   - Event name
   - Device category
6. Add metrics:
   - Conversions
   - Event count
   - Engagement rate

### 6.2 Create Dashboard - Website Performance
1. Go to **Reports** → **Library**
2. Click **"Create new collection"**
3. Add reports for:
   - Traffic sources
   - User demographics (Riyadh, Saudi Arabia)
   - Top converting pages
   - Service page performance

---

## Step 7: Link to Google Search Console

### 7.1 Set Up Search Console First
1. Go to **https://search.google.com/search-console**
2. Click **"Add Property"**
3. Choose **URL prefix**: `https://bwork.sa`
4. Verify ownership:
   - **Method 1 - HTML Tag** (easiest):
     - Copy the meta tag
     - Add to `app/layout.tsx` in metadata
   - **Method 2 - DNS** (if you have access)
     - Add TXT record to your domain

### 7.2 Link to Analytics
1. In GA4, go to **Admin** → **Product Links** → **Search Console Links**
2. Click **"Link"**
3. Select your Search Console property
4. Click **"Confirm"**
5. Click **"Submit"**

Now you'll see search queries in GA4! 🎉

---

## Step 8: Set Up Alerts (Recommended)

### 8.1 Create Custom Alerts
1. Go to **Admin** → **Custom Alerts** (under Property)
2. Create alerts for:
   - **Traffic drop**: Daily users decrease by 20%
   - **Conversion spike**: Form submissions increase by 50%
   - **Error tracking**: Exceptions increase

### 8.2 Email Notifications
1. Go to **Admin** → **Property Access Management**
2. Add team members who should receive alerts
3. They'll get email notifications for important changes

---

## Verification Checklist

After setup, verify everything works:

### ✅ Real-Time Testing
1. Visit https://bwork.sa (after deployment)
2. Open GA4 → **Reports** → **Real-time**
3. You should see your visit within 30 seconds!

### ✅ Event Tracking Test
1. Click around your site:
   - Click a service card
   - Scroll down
   - Click contact button
   - Submit contact form (use test data)
2. Check **Real-time** → **Event count by event name**
3. You should see:
   - `scroll_depth`
   - `cta_click`
   - `view_service`
   - `form_submit`

### ✅ Web Vitals Check
1. Wait 24 hours
2. Go to **Reports** → **Engagement** → **Events**
3. Look for events: `CLS`, `INP`, `LCP`, `FCP`, `TTFB`
4. These show your website performance!

---

## What You'll See in GA4 (After 24-48 Hours)

### Automatic Tracking:
- Page views
- User demographics (Riyadh, Saudi Arabia)
- Device types (mobile, desktop, tablet)
- Traffic sources (Google, direct, social)
- Scroll depth (25%, 50%, 75%, 100%)

### Custom Events:
- **form_submit** - Every contact form submission
- **view_service** - When users view service pages
- **cta_click** - All CTA button clicks
- **contact_click** - Contact button clicks
- **scroll_depth** - User engagement metric
- **page_engagement** - Time spent on pages
- **Web Vitals** - CLS, INP, LCP, FCP, TTFB

### Business Insights:
- Top converting services
- Most visited pages
- User journey paths
- Conversion funnel
- Bounce rate
- Average session duration

---

## Troubleshooting

### "Not seeing any data in Real-Time"
**Solution**:
1. Check `.env.local` has correct `NEXT_PUBLIC_GA_MEASUREMENT_ID`
2. Rebuild and redeploy: `npm run build`
3. Check browser console for errors (F12)
4. Disable ad blockers
5. Try incognito mode

### "Events not tracking"
**Solution**:
1. Wait 24 hours for events to appear
2. Check browser console for GA errors
3. Verify `NEXT_PUBLIC_GA_ENABLED=true` in development
4. In production, events track automatically

### "Web Vitals not showing"
**Solution**:
1. Wait 48 hours (Web Vitals take longer to appear)
2. Generate traffic to your site
3. Check **Reports** → **Engagement** → **Events**

---

## Next: Google Tag Manager (Optional, Advanced)

If you want more advanced tracking later:
1. Set up Google Tag Manager
2. Add GTM container to site
3. Move GA4 to GTM
4. Add more tracking (Facebook Pixel, LinkedIn Insight, etc.)

**Not needed now** - your current setup is perfect for starting!

---

## Summary

Your Analytics is now tracking:
- ✅ All page views
- ✅ User behavior
- ✅ Form submissions (conversions!)
- ✅ Service interest
- ✅ Website performance (Web Vitals)
- ✅ User demographics

**Remember**: Add your Measurement ID to `.env.local` before deploying to production!

Format:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-ID-HERE
```

Good luck! 🚀
