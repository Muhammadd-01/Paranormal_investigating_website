# Islamic Paranormal Research & Spiritual Healing Website

A premium, professional website for an Islamic paranormal research organization specializing in spiritual healing through Qur'an and Sunnah.

## Features

- **Dark Premium Theme**: Deep black background with silver/metallic accents and neon-silver glow effects
- **Extensive Animations**: Smooth fade-in, slide-up, hover effects, floating elements, and scroll-triggered animations
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop with media queries
- **SEO Optimized**: Comprehensive metadata, structured data (JSON-LD), sitemap, and robots.txt
- **Multi-Page Structure**:
  - Home: Hero section, core values, services overview, statistics
  - About: Organization mission, principles, Islamic foundations
  - Services: Detailed service offerings, formats, and treatment protocols
  - Research: In-depth studies on Jinn, Sihr, Evil Eye, and Islamic methodology
  - Resources: Quranic resources, audio/video content, books, daily protection guides
  - Contact: Contact information, form, FAQ, emergency support

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 with custom animations
- **UI Components**: shadcn/ui with glass-morphism effects
- **Fonts**: Cinzel (headings), Inter (body text)
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## Key Features

### Animations
- Fade-in-up on scroll
- Slide-in left/right
- Scale-in effects
- Float animations
- Glow-pulse borders
- Hover scale and translate
- Staggered animation delays

### SEO
- Dynamic metadata for all pages
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data
- Sitemap generation
- Robots.txt configuration
- Responsive images with Next.js Image optimization

### Accessibility
- Semantic HTML
- ARIA roles and attributes
- Screen reader support
- Keyboard navigation
- Focus states
- Alt text for all images

### Performance
- Image optimization
- Font optimization with `display: swap`
- Responsive typography
- Smooth scroll behavior
- Lazy loading
- Code splitting

## Getting Started

1. **Update Configuration**:
   - Edit `lib/constants.ts` to update organization name, contact info, etc.
   - Update domain in `app/layout.tsx` and `app/sitemap.ts`
   - Add verification codes in `app/layout.tsx` if needed

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Deploy**:
   - Deploy to Vercel for optimal performance
   - Update environment variables if needed

## Customization

### Colors
Edit `app/globals.css` to modify the color scheme. Current theme uses:
- Deep black background
- Silver/metallic grey text
- Neon-silver accents

### Animations
All animations are defined in `app/globals.css`. Adjust timing, delays, and effects as needed.

### Content
Update text content in each page component. All content is in the page files for easy editing.

### Images
Replace placeholder images in `/public` directory with your own images. Maintain similar aspect ratios for best results.

## Pages Overview

### Home (`/`)
- Hero with animated background
- Core values cards
- Services preview
- Statistics
- Islamic stance
- Call-to-action

### About (`/about`)
- Mission & vision
- What we do
- Islamic principles
- Quranic foundations
- Approach to healing

### Services (`/services`)
- Core services with images
- Service formats (in-person, online, emergency)
- Additional services
- What to expect

### Research (`/research`)
- Research areas
- Detailed Jinn studies
- Sihr (magic) research
- Evil Eye studies
- Research methodology

### Resources (`/resources`)
- Quranic resources (PDFs)
- Audio Ruqyah collections
- Video lectures
- Islamic books
- Daily protection guides

### Contact (`/contact`)
- Contact methods
- Contact form
- FAQ section
- Emergency contact
- Privacy notice

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved. This website is for the specified organization only.

## Support

For technical support or questions about the website, please contact your developer.
