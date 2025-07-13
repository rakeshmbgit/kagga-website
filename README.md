# DVG & Mankuthimmana Kagga - Digital Repository

A comprehensive, modern, and responsive website dedicated to preserving and sharing the profound wisdom of D.V. Gundappa's Mankuthimmana Kagga.

## 🌟 Features

### Core Functionality
- **Complete Kagga Collection**: All 945 Kaggas with Kannada text, transliteration, and English translations
- **Video Integration**: YouTube-style video browser featuring Swami Brahmandaji's explanations
- **Smart Search**: Search by Kagga number, keywords, themes, or content
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support

### User Experience
- **Modern UI/UX**: Clean, minimalist design with smooth animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Dark Mode Support**: Toggle between light and dark themes
- **Social Sharing**: Easy sharing to social media platforms
- **Print Functionality**: Print individual Kaggas for offline reading

### Content Features
- **Detailed Meanings**: In-depth explanations of each Kagga's philosophical significance
- **Theme Filtering**: Browse Kaggas by themes (Dharma, Karma, Life, etc.)
- **Word-by-Word Meanings**: Simple Kannada word-to-word translations
- **Related Kaggas**: Discover connections between different verses
- **Favorites System**: Save and organize your favorite Kaggas

## 🚀 Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful, customizable icons

### State Management
- **Zustand**: Lightweight state management
- **React Context**: For theme and user preferences

### Search & Performance
- **Fuse.js**: Fuzzy search implementation
- **React Intersection Observer**: Lazy loading and infinite scroll
- **Next.js Image Optimization**: Optimized image loading

### SEO & Analytics
- **Next.js SEO**: Built-in SEO optimization
- **React Helmet Async**: Dynamic meta tags
- **Structured Data**: Rich snippets for search engines

## 📁 Project Structure

```
dvg-kagga-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   └── KaggaCard.tsx      # Kagga display component
├── data/                  # Static data and content
│   ├── kaggas.ts          # Kagga data and utilities
│   └── dvg-info.ts        # DVG biographical information
├── types/                 # TypeScript type definitions
│   └── kagga.ts           # Kagga and related interfaces
├── public/                # Static assets
│   ├── images/            # Image files
│   └── videos/            # Video thumbnails
└── styles/                # Additional CSS files
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dvg-kagga-website.git
   cd dvg-kagga-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

### Adding New Kaggas

1. **Update the data file**: Add new Kagga entries to `data/kaggas.ts`
2. **Include all required fields**:
   - `id`: Unique Kagga number (1-945)
   - `kannadaText`: Original Kannada text
   - `transliteration`: Romanized transliteration
   - `englishTranslation`: English translation
   - `meaning`: Detailed explanation
   - `themes`: Array of relevant themes

### Video Integration

1. **Add video URLs**: Include YouTube video URLs in the Kagga data
2. **Video metadata**: Add titles and descriptions for better UX
3. **Thumbnail generation**: Automatically fetch YouTube thumbnails

### Theme Management

Themes are defined in the Kagga data and can be extended by:
1. Adding new theme strings to Kagga entries
2. Updating the theme filtering logic
3. Adding theme-specific styling

## 🎨 Customization

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Typography**: Update font families and sizes in `globals.css`
- **Components**: Customize component styles in individual component files

### Content
- **DVG Information**: Update biographical data in `data/dvg-info.ts`
- **Kagga Data**: Modify Kagga content in `data/kaggas.ts`
- **Metadata**: Update SEO information in layout files

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with Next.js configuration
- **Prettier**: Code formatting (recommended)

### Testing

```bash
npm run test         # Run unit tests
npm run test:e2e     # Run end-to-end tests
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Touch-friendly navigation
- Optimized touch targets
- Swipe gestures for mobile interactions

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: High contrast ratios for readability
- **Focus Management**: Clear focus indicators

### Accessibility Features
- Skip navigation links
- Alt text for all images
- Semantic HTML structure
- ARIA labels for interactive elements

## 🔍 SEO Optimization

### Technical SEO
- **Meta Tags**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD markup for rich snippets
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

### Content SEO
- **Keyword Optimization**: Strategic keyword placement
- **Internal Linking**: Comprehensive internal link structure
- **Image Optimization**: Compressed images with alt text
- **Page Speed**: Optimized loading times

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Similar to Vercel deployment
- **AWS Amplify**: For AWS integration
- **Traditional Hosting**: Build and upload static files

## 🤝 Contributing

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Contribution Guidelines
- Follow the existing code style
- Add TypeScript types for new features
- Update documentation as needed
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **D.V. Gundappa**: For the timeless wisdom of Mankuthimmana Kagga
- **Swami Brahmandaji**: For the video explanations and spiritual guidance
- **Kannada Literature Community**: For preserving and promoting Kannada culture
- **Open Source Community**: For the amazing tools and libraries used

## 📞 Contact

- **Email**: contact@dvg-kagga.com
- **GitHub**: [https://github.com/dvg-kagga](https://github.com/dvg-kagga)
- **Website**: [https://dvg-kagga.com](https://dvg-kagga.com)

## 🔄 Version History

### v1.0.0 (Current)
- Initial release with core functionality
- Complete Kagga collection (1-945)
- Video integration
- Responsive design
- Search functionality

### Planned Features
- User accounts and favorites
- Community discussions
- Audio recitations
- Advanced analytics
- Mobile app version

---

**Made with ❤️ for Kannada literature and DVG's timeless wisdom** 