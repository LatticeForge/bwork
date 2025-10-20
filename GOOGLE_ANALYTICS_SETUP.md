# Google Analytics 4 & Search Console Setup Guide

Complete step-by-step guide to set up Google Analytics 4 and Google Search Console for BWORK.

---

## ✅ What's Already Done

- [x] Google Analytics component created (`components/GoogleAnalytics.tsx`)
- [x] GA4 integrated into main layout (`app/layout.tsx`)
- [x] Environment variables configured (`.env.local`)
- [x] Event tracking functions ready for conversion tracking
- [x] Production-only loading (won't track in development)

---

## 📊 Part 1: Google Analytics 4 Setup

### Step 1: Create Google Analytics Account

1. **Go to:** [https://analytics.google.com/](https://analytics.google.com/)

2. **Sign in** with your Google account (or create one)

3. **Click "Start measuring"** or "Admin" (gear icon)

### Step 2: Set Up Property

1. **Property Name:** Enter "BWORK Website"

2. **Reporting Time Zone:** Select your timezone (e.g., "United States - Pacific")

3. **Currency:** USD or your preferred currency

4. **Click "Next"**

### Step 3: Business Information

1. **Industry Category:** Select "Technology" or "Business Services"

2. **Business Size:** Select appropriate size

3. **How you intend to use Google Analytics:** Select relevant options
   - Measure advertising ROI
   - Examine user behavior
   - Track conversions

4. **Click "Create"** and accept Terms of Service

### Step 4: Set Up Data Stream

1. **Platform:** Click "Web"

2. **Website URL:** `https://bwork.tech`

3. **Stream Name:** "BWORK Main Website"

4. **Click "Create stream"**

### Step 5: Get Your Measurement ID

1. You'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)

2. **COPY THIS ID** - you'll need it next!

### Step 6: Add Measurement ID to Your Website

1. **Open:** `.env.local` file in your project

2. **Update this line:**
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. **Save the file**

### Step 7: Test Your Setup

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Enable GA in development** (temporary, for testing):
   Update `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ENABLED=true
   ```

3. **Visit your website:** `http://localhost:4000`

4. **Check Real-Time Reports:**
   - Go back to Google Analytics
   - Click "Reports" → "Realtime"
   - You should see yourself as an active user!

5. **After testing, disable in development:**
   ```env
   NEXT_PUBLIC_GA_ENABLED=false
   ```

### Step 8: Deploy to Production

1. **Add to your production environment variables:**
   - If using Vercel/Netlify: Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` in dashboard
   - Value: Your `G-XXXXXXXXXX` ID

2. **Deploy your site**

3. **Visit your live site** and check Realtime reports again

---

## 🎯 Part 2: Set Up Conversion Tracking

### Event 1: Track Contact Form Submissions

**Already implemented!** The code is ready to use.

**In your contact form component:**

```typescript
import { trackFormSubmit } from '@/components/GoogleAnalytics'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  // ... your form submission logic ...

  if (response.success) {
    // Track successful submission
    trackFormSubmit('contact_form')
  }
}
```

### Event 2: Track Service Page Views

**Add to service pages:**

```typescript
import { trackServiceView } from '@/components/GoogleAnalytics'

useEffect(() => {
  trackServiceView('Cloud Infrastructure') // or dynamic service name
}, [])
```

### Event 3: Track CTA Button Clicks

**Add to buttons:**

```typescript
import { trackContactClick } from '@/components/GoogleAnalytics'

<button onClick={() => {
  trackContactClick('hero_section')
  // ... navigate to contact page
}}>
  Get a Consultation
</button>
```

### View Events in GA4:

1. Go to **Reports** → **Engagement** → **Events**
2. You'll see: `form_submit`, `view_service`, `contact_click`, etc.

### Set Up Conversions:

1. In GA4, go to **Admin** → **Events**
2. Find your event (e.g., `form_submit`)
3. Toggle "Mark as conversion"
4. Now you can track conversion rates!

---

## 🔍 Part 3: Google Search Console Setup

### Step 1: Add Property

1. **Go to:** [https://search.google.com/search-console](https://search.google.com/search-console)

2. **Click "Add Property"**

3. **Enter your domain:** `bwork.tech`

### Step 2: Verify Ownership

**Method 1: DNS Verification (Recommended)**

1. GSC will provide a **TXT record**
2. Add this to your domain's DNS settings
3. Format: `google-site-verification=XXXX...`
4. Click "Verify"

**Method 2: HTML File Upload**

1. Download verification file from GSC
2. Place in `public/` folder
3. Deploy your site
4. Click "Verify" in GSC

**Method 3: Google Analytics (Easiest)**

1. If you're already signed in with same Google account
2. GSC can auto-verify via your GA4 property
3. Just click "Verify"

### Step 3: Submit Sitemap

1. In Google Search Console, go to **Sitemaps** (left sidebar)

2. **Add sitemap URL:**
   ```
   https://bwork.tech/sitemap.xml
   ```

3. **Click "Submit"**

4. **Wait 24-48 hours** for indexing to begin

### Step 4: Monitor Indexing

1. Go to **Pages** → **Why pages aren't indexed**
2. Check for any errors
3. Common issues:
   - Duplicate canonical URLs (should be fine - we set these correctly)
   - Blocked by robots.txt (check if accidentally blocking)

---

## 📈 Part 4: What to Monitor

### In Google Analytics:

**Weekly:**
- Realtime users
- Traffic sources
- Popular pages
- User demographics

**Monthly:**
- Conversion rates
- User behavior flow
- Device breakdown (mobile vs desktop)
- Average session duration

**Key Metrics to Watch:**
- **Users:** Unique visitors
- **Sessions:** Total visits
- **Bounce Rate:** < 50% is good
- **Avg Session Duration:** > 2 minutes is good
- **Conversions:** Form submissions, contact clicks

### In Google Search Console:

**Weekly:**
- Total clicks (from search results)
- Total impressions (how often you appear in search)
- Average click-through rate (CTR)
- Average position in search results

**Monthly:**
- Which keywords are driving traffic
- Which pages rank highest
- Mobile usability issues
- Core Web Vitals performance

---

## 🎯 Goal Metrics for BWORK

### Target Goals (6 months):

- **Organic Traffic:** 5,000+ visitors/month
- **Bounce Rate:** < 45%
- **Avg Session Duration:** > 3 minutes
- **Form Conversions:** 50+ per month
- **Search Impressions:** 100,000+ per month
- **Average Search Position:** Top 10 for main keywords

### Keywords to Track:

1. "Enterprise IT solutions"
2. "Cloud infrastructure services"
3. "Data center design"
4. "Network infrastructure solutions"
5. "Managed IT services"
6. "IT integration services"
7. "Structured cabling solutions"
8. "IT infrastructure consulting"

---

## 🔔 Set Up Alerts

### Google Analytics Alerts:

1. Go to **Admin** → **Custom Alerts**

2. **Create Alert for Traffic Drops:**
   - Alert Name: "Weekly Traffic Drop"
   - Alert conditions: Sessions decreased by 25%
   - Period: Week over week
   - Send me an email: Yes

3. **Create Alert for Conversion Spikes:**
   - Alert Name: "Conversion Increase"
   - Alert conditions: form_submit increased by 50%
   - Period: Week over week

### Google Search Console Alerts:

1. Go to **Settings** → **Users and permissions**

2. **Email notifications:** Enabled

3. You'll get alerts for:
   - Critical indexing issues
   - Manual actions
   - Security issues

---

## 🚀 Advanced: Google Tag Manager (Optional)

If you want more flexibility with tracking:

### Benefits:
- Add tracking codes without code changes
- A/B testing setup
- Third-party integration (Facebook Pixel, etc.)
- Advanced event tracking

### Setup:

1. Create account at [tagmanager.google.com](https://tagmanager.google.com/)

2. Get Container ID (format: `GTM-XXXXXXX`)

3. Replace Google Analytics component with GTM code

4. Manage all tracking through GTM dashboard

**Note:** For your current needs, direct GA4 integration (already done) is sufficient!

---

## 📊 Dashboard Recommendations

### Google Analytics 4 Reports to Check:

1. **Acquisition Overview**
   - Where users come from
   - Organic search vs direct vs referral

2. **Engagement > Pages and Screens**
   - Most visited pages
   - Which services get most views

3. **Conversions > Events**
   - Form submissions
   - Button clicks
   - Service views

4. **User Attributes > Demographics**
   - Age and gender (if enough data)
   - Interests

5. **Tech > Overview**
   - Mobile vs desktop
   - Browser types
   - Operating systems

---

## ✅ Post-Setup Checklist

- [ ] GA4 Measurement ID added to `.env.local`
- [ ] Real-time tracking verified
- [ ] Events appearing in GA4
- [ ] Conversions marked in GA4
- [ ] Google Search Console verified
- [ ] Sitemap submitted to GSC
- [ ] Email alerts configured
- [ ] Bookmarked GA4 and GSC dashboards
- [ ] Documented your Measurement ID safely
- [ ] Production environment variable set (if applicable)

---

## 🆘 Troubleshooting

### GA4 Not Tracking

**Issue:** No data in Real-time reports

**Solutions:**
1. Check Measurement ID is correct
2. Verify `NEXT_PUBLIC_GA_ENABLED=true` in dev (if testing)
3. Clear browser cache
4. Check browser ad blockers (disable for testing)
5. Open browser console for errors

### Search Console Not Indexing

**Issue:** Pages not appearing in Google

**Solutions:**
1. Wait 48-72 hours after sitemap submission
2. Check robots.txt isn't blocking pages
3. Request indexing manually (URL Inspection tool)
4. Ensure sitemap XML is accessible: `yoursite.com/sitemap.xml`

### Conversions Not Recording

**Issue:** Events showing but not marked as conversions

**Solutions:**
1. Go to Admin → Events
2. Find your event name
3. Toggle "Mark as conversion"
4. Wait 24 hours for data

---

## 📚 Useful Resources

- **GA4 Documentation:** https://support.google.com/analytics/
- **GSC Help:** https://support.google.com/webmasters/
- **GA4 Reporting Basics:** https://skillshop.withgoogle.com/
- **Next.js Analytics Guide:** https://nextjs.org/docs/app/building-your-application/optimizing/analytics

---

## 🎉 You're All Set!

Once completed, you'll have:
- ✅ Full traffic analytics
- ✅ Conversion tracking
- ✅ Search performance monitoring
- ✅ Keyword ranking data
- ✅ User behavior insights

**Next Steps:**
1. Complete the setup above
2. Wait 7 days for data to accumulate
3. Create your first monthly report
4. Start optimizing based on data!

---

**Questions?** Check the troubleshooting section or Google's help documentation.

Last Updated: 2025
