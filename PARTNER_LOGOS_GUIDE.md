# Partner Logo Resources Guide

This guide provides direct links to official brand resources where you can download proper logos for all BWORK technology partners.

---

## How to Get & Replace Logos

### Step 1: Download Official Logos

Visit the brand resource links below and download the official logos.

### Step 2: File Specifications

- **Format**: SVG (preferred) or PNG with transparent background
- **Size**: 150-200px width recommended
- **File Size**: Keep under 100KB for optimal performance
- **Color**: Original brand colors OR monochrome (if available)

### Step 3: File Naming

Save files with exact names (lowercase):
```
cisco.svg, hpe.svg, dell.svg, lenovo.svg, microsoft.svg, google.svg,
linksys.svg, dlink.svg, linnet.svg, corning.svg, trendnet.svg,
belden.svg, commscope.svg, apc.svg, kaspersky.svg, vmware.svg,
broadcom.svg, veeam.svg, epson.svg
```

### Step 4: Replace Files

Place downloaded logos in: `C:\bwork\public\logos\`

---

## Official Brand Resource Links

### 1. **CISCO**
- **Brand Center**: https://www.cisco.com/c/en/us/about/brand-center.html
- **Logo Download**: Look for "Logos & Icons" section
- **File to Replace**: `cisco.svg`

### 2. **HPE (Hewlett Packard Enterprise)**
- **Brand Resources**: https://www.hpe.com/us/en/about/brand.html
- **Press Kit**: https://www.hpe.com/us/en/about/press.html
- **File to Replace**: `hpe.svg`

### 3. **DELL Technologies**
- **Brand Portal**: https://www.delltechnologies.com/en-us/brand/brand-portal.htm
- **Logo Library**: Search for "Dell logo download"
- **File to Replace**: `dell.svg`

### 4. **LENOVO**
- **Brand Resources**: https://www.lenovo.com/us/en/legal/trademarks/
- **Press Resources**: https://news.lenovo.com/
- **File to Replace**: `lenovo.svg`

### 5. **MICROSOFT**
- **Brand Portal**: https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks
- **Logo Guidelines**: https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/logo.aspx
- **File to Replace**: `microsoft.svg`

### 6. **GOOGLE**
- **Brand Resources**: https://about.google/brand-resource-center/
- **Logo Downloads**: Available in various formats
- **File to Replace**: `google.svg`

### 7. **LINKSYS**
- **Press Center**: https://www.linksys.com/us/press-center/
- **Brand Assets**: Contact Linksys PR or check press kit
- **File to Replace**: `linksys.svg`

### 8. **D-LINK**
- **Press Room**: https://www.dlink.com/en/press-room
- **Logo Request**: May need to contact PR team
- **File to Replace**: `dlink.svg`

### 9. **LINNET**
- **Website**: Search for official Linnet company website
- **Brand Resources**: Contact company directly for logo
- **File to Replace**: `linnet.svg`

### 10. **CORNING**
- **Media Center**: https://www.corning.com/worldwide/en/about-us/news-events.html
- **Brand Guidelines**: Check media resources section
- **File to Replace**: `corning.svg`

### 11. **TRENDNET**
- **Press Room**: https://www.trendnet.com/press/
- **Logo Downloads**: Available in press kit
- **File to Replace**: `trendnet.svg`

### 12. **BELDEN**
- **Media Center**: https://www.belden.com/about/media
- **Brand Assets**: Check press resources
- **File to Replace**: `belden.svg`

### 13. **COMMSCOPE**
- **Media Kit**: https://www.commscope.com/newsroom/media-kit/
- **Logo Downloads**: Available for partners
- **File to Replace**: `commscope.svg`

### 14. **APC (Schneider Electric)**
- **Brand Center**: https://www.se.com/ww/en/about-us/company-profile/brand-identity/
- **APC Branding**: Look for APC by Schneider Electric logos
- **File to Replace**: `apc.svg`

### 15. **KASPERSKY**
- **Press Center**: https://www.kaspersky.com/about/press
- **Media Assets**: Logo available in press kit
- **File to Replace**: `kaspersky.svg`

### 16. **VMWARE (Broadcom)**
- **Brand Resources**: https://www.vmware.com/company/news/media-resources.html
- **Note**: VMware is now part of Broadcom
- **File to Replace**: `vmware.svg`

### 17. **BROADCOM**
- **Investor Relations**: https://investors.broadcom.com/
- **Press Resources**: Check media section for logos
- **File to Replace**: `broadcom.svg`

### 18. **VEEAM**
- **Press Kit**: https://www.veeam.com/company/press-kit.html
- **Logo Downloads**: Multiple formats available
- **File to Replace**: `veeam.svg`

### 19. **EPSON**
- **Press Room**: https://global.epson.com/newsroom/
- **Media Assets**: Logo available in press resources
- **File to Replace**: `epson.svg`

---

## Alternative Logo Sources

If official brand resources are not accessible:

### Professional Stock Resources (Proper Licensed Logos):
1. **Brandfetch**: https://brandfetch.com/ (Free brand assets)
2. **Brands of the World**: https://www.brandsoftheworld.com/ (Vector logos)
3. **Wikimedia Commons**: https://commons.wikimedia.org/ (Public domain/licensed)
4. **World Vector Logo**: https://worldvectorlogo.com/ (Free vector logos)

### Search Strategy:
```
"[Company Name] official logo download"
"[Company Name] brand guidelines pdf"
"[Company Name] press kit"
"[Company Name] media resources"
```

---

## Logo Optimization Tips

### For SVG Files:
```bash
# Install SVGO (SVG Optimizer)
npm install -g svgo

# Optimize SVG file
svgo input.svg -o output.svg
```

### For PNG Files:
- Use online tools like TinyPNG (https://tinypng.com/)
- Or ImageOptim (Mac) / FileOptimizer (Windows)
- Remove unnecessary metadata
- Compress to ~70-80% quality

### Convert PNG to SVG:
- **Vectorizer.io**: https://www.vectorizer.io/
- **Adobe Illustrator**: Image Trace feature
- **Inkscape**: Free tool with "Trace Bitmap" function

---

## Brand Guidelines Compliance

### Important Legal Notes:

1. **Trademark Usage**
   - Use logos only for factual reference (e.g., "We partner with...")
   - Do not imply endorsement beyond actual partnership
   - Follow each company's trademark guidelines

2. **Logo Modifications**
   - DO NOT alter colors (unless monochrome version exists)
   - DO NOT distort, rotate, or modify logos
   - DO NOT add effects, shadows, or gradients
   - Maintain proper spacing around logos

3. **Permission**
   - If you have an official partnership, use partner portal
   - For public display, ensure compliance with brand guidelines
   - When in doubt, contact the company's marketing/PR team

4. **Attribution**
   - Some brands require attribution text
   - Check individual brand guidelines
   - Keep records of where logos were obtained

---

## Quick Implementation Checklist

- [ ] Download all 19 logos from official sources
- [ ] Convert to SVG format (if PNG/JPG)
- [ ] Optimize file sizes (< 100KB each)
- [ ] Rename files to match exactly (lowercase)
- [ ] Place files in `public/logos/` directory
- [ ] Test on website - check if logos display correctly
- [ ] Verify logos look good in both color and grayscale
- [ ] Check mobile responsiveness
- [ ] Ensure logos load quickly
- [ ] Keep backup copies of original files

---

## Testing After Replacement

1. **Clear browser cache** (Ctrl+Shift+Delete)
2. **Reload the website**
3. **Check partner section** scrolls smoothly
4. **Verify all logos** appear correctly
5. **Test hover effects** (grayscale to color)
6. **Check on mobile** devices
7. **Validate in different browsers** (Chrome, Firefox, Safari, Edge)

---

## Troubleshooting

### Logo doesn't appear:
- Check filename matches exactly (case-sensitive on some systems)
- Verify file is in correct directory: `public/logos/`
- Clear browser cache and hard reload (Ctrl+F5)
- Check browser console for 404 errors

### Logo looks blurry:
- Use SVG format instead of PNG
- Increase PNG resolution (at least 300px width)
- Use 2x resolution for retina displays

### Logo is too large (file size):
- Optimize SVG with SVGO
- Compress PNG with TinyPNG
- Remove unnecessary embedded data
- Simplify complex paths in vector files

### Logo has wrong colors:
- Download official color version from brand resources
- Do not convert to grayscale before uploading
- The CSS handles grayscale effect on hover

---

## Need Help?

If you have trouble finding or downloading logos:

1. **Check company's media/press page** first
2. **Contact company PR department** for official assets
3. **Use Brandfetch.com** for quick downloads
4. **Reach out to BWORK partnership team** - they may already have access

---

**Note**: This guide is for authorized BWORK partners and affiliates. Always respect trademark laws and brand guidelines when using company logos.

Last Updated: October 2024
