# L&T Abruzzi Wine Website

A modern, professional website for L&T Abruzzi Wine LLC, featuring sophisticated Italian wine aesthetics and comprehensive business functionality.

## Features

- **Modern Design**: Sophisticated Italian wine-inspired design with rich burgundy and gold color scheme
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Professional Sections**:
  - Hero section with compelling messaging
  - Company story (ready for your content)
  - Italian vineyard partners showcase (template for 14 vineyards)
  - Wine portfolio with filtering
  - Trade/wholesale inquiry system
  - Contact forms and business information
- **Interactive Elements**: Smooth scrolling, animations, portfolio filtering, mobile navigation
- **SEO Optimized**: Proper meta tags, structured content, fast loading
- **Forms Ready**: Contact and trade inquiry forms with validation

## Quick Start

### Deploy to Railway (Recommended)

1. **Create a new Railway project**:
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub account
   - Create new project from this repository

2. **Automatic Deployment**:
   - Railway will automatically detect the Node.js app
   - The site will be live at your Railway domain within minutes

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production server
npm start
```

## Content Updates Needed

### 1. Company Story Section (`index.html` lines ~85-105)
Replace the placeholder content in the "Our Story" section with:
- Your family's connection to Italian wine
- How L&T Abruzzi Wine began
- Your mission and values
- Expansion plans for Florida and California

### 2. Vineyard Partners Section (`index.html` lines ~130-180)
Currently shows 3 placeholder vineyard cards plus a note about 11 more. Update with:
- Names of your 14 Italian vineyard partners
- Regions where they're located
- Brief descriptions of each vineyard's history and specialties
- Signature wine varietals
- High-quality vineyard photos

### 3. Wine Portfolio Section (`index.html` lines ~200-280)
Replace placeholder wines with your actual portfolio:
- Wine names and producers
- Vintage years and tasting notes
- ABV and varietal information
- Professional bottle photography
- Organize by categories (red, white, sparkling, rosé)

### 4. Add Professional Photography
The website is designed for high-quality images:
- **Hero Background**: Scenic Italian vineyard landscape
- **Vineyard Cards**: Photos of each of your 14 partner vineyards
- **Wine Portfolio**: Professional bottle shots
- **About Section**: Photos of your team, operations, or Italy visits

## File Structure

```
ltabruzzi-website/
├── index.html          # Main website content
├── style.css          # Sophisticated Italian wine styling
├── script.js          # Interactive functionality
├── server.js          # Express server for Railway
├── package.json       # Dependencies and deployment config
└── README.md         # This file
```

## Key Design Features

- **Typography**: Elegant Cormorant Garamond serif paired with clean Source Sans Pro
- **Colors**: Rich wine burgundy (#722f37), deep red (#8b1538), and gold (#d4af37)
- **Layout**: Professional grid systems with generous white space
- **Animations**: Smooth fade-in effects and hover states
- **Mobile**: Hamburger menu and responsive grid layouts

## Technical Features

- **Performance**: Optimized CSS and JavaScript with compression
- **Security**: Helmet.js security headers and CSP
- **SEO**: Semantic HTML, meta tags, and structured content
- **Accessibility**: ARIA labels, keyboard navigation, and contrast ratios
- **Forms**: Client-side validation with success messaging

## Business Benefits

This website positions L&T Abruzzi Wine as:
- **Professional**: Sophisticated design matching wine industry standards
- **Authentic**: Italian heritage and family business values
- **Scalable**: Ready for expansion into Florida and California markets
- **Trade-Focused**: Dedicated wholesale/trade sections and inquiry forms
- **Trustworthy**: Professional presentation builds credibility with restaurant buyers

## Next Steps

1. **Deploy to Railway** using your GitHub account
2. **Gather content**: 
   - Write your company story
   - Collect vineyard partner information
   - Compile wine portfolio details
   - Take or source professional photography
3. **Update content** in the HTML file
4. **Launch** and share with your network

## Support

This website is built with modern web standards and should work perfectly across all browsers and devices. The code is clean, well-commented, and easy to maintain.

For Railway deployment issues, check their [documentation](https://docs.railway.app/).

---

**L&T Abruzzi Wine LLC**  
Professional Italian Wine Importing  
Worcester, MA • Expanding to FL & CA