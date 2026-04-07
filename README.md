# Jones Azarya — Portfolio

A modern, performant personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, interactive UI components, and a clean developer-focused design.

## ✨ Features

- **Hero section** with animated text and call-to-action
- **Recent Projects** showcase with bento-style grid layout
- **Work Experience** timeline
- **Clients** section with infinite scrolling cards
- **Approach** section with interactive spotlight effects
- Fully **responsive** across all devices
- **Dark mode** optimized UI
- Custom UI components: Moving Borders, Canvas Reveal Effect, Floating Navbar, and more
- Error monitoring with **Sentry**

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Monitoring | Sentry |
| Deployment | Vercel |

## 📁 Project Structure

```
portfolio/
├── app/                  # Next.js App Router
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── BentoGrid.tsx
│   │   ├── CanvasRevealEffect.tsx
│   │   ├── FloatingNavbar.tsx
│   │   ├── MovingBorders.tsx
│   │   └── ...
│   ├── Hero.tsx
│   ├── RecentProjects.tsx
│   ├── Experience.tsx
│   ├── Clients.tsx
│   ├── Approach.tsx
│   └── Footer.tsx
├── data/                 # Static content & data
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Sentry (optional — for error monitoring)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
SENTRY_AUTH_TOKEN=your_sentry_auth_token
```

## 📦 Deployment

This project is optimized for deployment on **Vercel**.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repository directly at [vercel.com](https://vercel.com) for automatic deployments on every push.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Designed & built by <strong>Jones Azarya</strong></p>