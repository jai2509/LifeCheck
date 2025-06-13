# LifeCheck+ 💕

> India's first AI-powered relationship health scanner — scan, score, strengthen.

A modern, responsive landing page for LifeCheck+, an innovative AI-powered platform that helps couples analyze, understand, and strengthen their relationships through intelligent insights and personalized guidance.

**Developed by:** Jai Kumar Mishra

## 🌟 Features

- **Modern Design**: Beautiful, production-ready UI with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Interactive Components**: Engaging hover effects, transitions, and micro-interactions
- **Performance Optimized**: Built with Vite for fast loading and optimal performance
- **Accessibility**: Designed with accessibility best practices in mind

## 🚀 Live Demo

Visit the live application: [https://wondrous-brioche-ef7d4f.netlify.app](https://wondrous-brioche-ef7d4f.netlify.app)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for beautiful, consistent icons
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: Netlify for seamless hosting and CI/CD

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lifecheckai-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Features.tsx    # Features showcase
│   ├── HowItWorks.tsx  # Process explanation
│   ├── Pricing.tsx     # Pricing plans
│   ├── Testimonials.tsx # Customer testimonials
│   └── Footer.tsx      # Footer with links and contact info
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
├── index.css          # Global styles and Tailwind imports
└── vite-env.d.ts      # Vite type definitions
```

## 🎨 Design System

### Color Palette
- **Primary**: Pink to Purple gradient (`from-pink-500 to-purple-600`)
- **Secondary**: Blue to Cyan gradient (`from-blue-500 to-cyan-600`)
- **Accent**: Various gradients for different sections
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold, large text with gradient effects
- **Body**: Clean, readable text with proper line spacing
- **Interactive**: Hover states and transitions for better UX

### Components
- **Cards**: Rounded corners with subtle shadows and hover effects
- **Buttons**: Gradient backgrounds with scale animations
- **Icons**: Consistent Lucide React icons throughout

## 📱 Sections Overview

1. **Header**: Fixed navigation with mobile-responsive menu
2. **Hero**: Compelling headline with relationship health score demo
3. **Features**: Six key features with animated icons and descriptions
4. **How It Works**: Four-step process explanation
5. **Pricing**: Three-tier pricing structure with feature comparison
6. **Testimonials**: Real customer stories with ratings and improvements
7. **Footer**: Company information, links, and contact details

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

The application is automatically deployed to Netlify on every push to the main branch.

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your preferred hosting service

## 📊 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Bundle Size**: Minimal dependencies for fast loading
- **Images**: Optimized external images from Pexels
- **Code Splitting**: Automatic code splitting with Vite

## 🔧 Customization

### Changing Colors
Update the Tailwind classes in components to match your brand colors:
```tsx
// Example: Change primary gradient
className="bg-gradient-to-r from-your-color-500 to-your-color-600"
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Update navigation links in `Header.tsx`

### Modifying Content
- **Text Content**: Update directly in component files
- **Images**: Replace Pexels URLs with your own images
- **Icons**: Choose from Lucide React icon library

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

For questions, feedback, or collaboration opportunities:

**Developer:** Jai Kumar Mishra  
**Email:** mishrajaikumar283@gmail.com

## 🙏 Acknowledgments

- **Design Inspiration**: Modern SaaS landing pages and relationship apps
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful icons
- **Images**: [Pexels](https://pexels.com/) for stock photography
- **Fonts**: System fonts for optimal performance

---

**Built with ❤️ by Jai Kumar Mishra**  
*Empowering relationships through technology*