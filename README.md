# Youth Perspective Club (YPC) Website

A modern, responsive website for the Youth Perspective Club, showcasing their debate programs, impact, and opportunities for youth across Uzbekistan.

## 🚀 Features

- **Modern Design**: Clean, professional design with navy blue theme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth animations and hover effects
- **Comprehensive Sections**: About, Programs, Impact, Team, Resources, and Contact
- **Built with React**: Modern React 18 with TypeScript
- **UI Components**: Beautiful components built with shadcn/ui
- **Tailwind CSS**: Utility-first CSS framework for styling

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Routing**: React Router DOM

## 📋 Prerequisites

Before running this project, you need to have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **bun** package manager

### Installing Node.js

#### Windows:
1. Download Node.js from [nodejs.org](https://nodejs.org/)
2. Run the installer and follow the setup wizard
3. Verify installation by opening Command Prompt and running:
   ```bash
   node --version
   npm --version
   ```

#### macOS:
1. Install using Homebrew:
   ```bash
   brew install node
   ```
2. Or download from [nodejs.org](https://nodejs.org/)

#### Linux (Ubuntu/Debian):
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd yp-future-builders-a7bbd3d23621e936c9b2e8edf8e8d3c223c1afc8
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
bun install
```

### 3. Start Development Server
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

The website will open at `http://localhost:8080`

### 4. Build for Production
```bash
npm run build
# or
yarn build
# or
bun build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # shadcn/ui components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ImpactSection.tsx
│   ├── Navigation.tsx
│   ├── PartnersSection.tsx
│   ├── ProgramsSection.tsx
│   ├── ResourcesSection.tsx
│   └── TeamSection.tsx
├── pages/              # Page components
│   ├── Index.tsx      # Main page
│   └── NotFound.tsx   # 404 page
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors
The color scheme is defined in `src/index.css` using CSS custom properties:
- Primary: Navy blue (`#0f1a2e`)
- Accent: Warm gold (`#fbbf24`)
- Background: White and light grays

### Fonts
The website uses Inter font family, loaded from Google Fonts.

### Components
All UI components are built with shadcn/ui and can be customized in the `src/components/ui/` directory.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact:
- Email: hello@ypc.uz
- Telegram: @YouthPerspectiveClub
- Instagram: @ypc_uzbekistan

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
