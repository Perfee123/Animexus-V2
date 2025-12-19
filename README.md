# Animexus-V2

Animexus-V2 is a high-performance, premium anime discovery platform built with Next.js 15 and the Jikan API. It features a sleek Cyber-Noir aesthetic, real-time search, and a personalized tracking system.

## 🚀 Key Features

- **Cyber-Noir UI**: A distinctive dark-themed interface with neon accents and smooth motion interactions.
- **Real-time Discovery**: Instant search results and trending content fetching via the Jikan API.
- **Personalized List**: Add, track, and manage your anime collection (Watching, Plan to Watch, Completed) with local storage persistence.
- **NSFW Content Detection**: Automatic tagging for adult-rated content for a safe browsing experience.
- **Responsive Design**: Site-wide "Rounded-Full" aesthetic for a modern mobile-first experience.
- **Detailed Insights**: High-resolution posters, character tooltips, and related media links.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API**: Jikan API (MAL)
- **State Management**: React Hooks & Local Storage
- **UI Components**: Radix UI & Sonner

## 🏗 Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Perfee123/Animexus-V2.git
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```

4. **Build for production**:
   ```bash
   pnpm build
   ```

## 🔧 Deployment (Vercel)

If you encounter a `Headless installation requires a pnpm-lock.yaml file` error on Vercel:

1. **Ensure you have a `pnpm-lock.yaml` file** in your repository. Run `pnpm install` locally and commit the lockfile.
2. **Framework Settings**: In Vercel Project Settings, ensure the **Framework Preset** is set to **Next.js** (not Vite).
3. **Node.js Version**: Use Node.js 20 or higher.

## 📄 License

This project is licensed under the MIT License.

---
Created with ❤️ by PERFEE123
