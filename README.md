<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Supabase-Auth%20%26%20DB-green?style=for-the-badge&logo=supabase" alt="Supabase"/>
  <img src="https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind"/>
</div>

# 🎓 LearnQuest

> **Learn like it's a game. Master like it's your future.**

LearnQuest is a gamified learning platform designed to help students prepare for the UNAM (Universidad Nacional Autónoma de México) entrance exam. Inspired by Duolingo's engaging learning experience, LearnQuest transforms studying into an interactive adventure across multiple subjects.

## ✨ Features

### 🎮 Gamified Learning

- **XP System**: Earn experience points for every correct answer
- **Lives**: 5 hearts per quiz session - use them wisely!
- **Daily Streaks**: Keep your learning momentum going
- **Leveling**: Progress through levels as you master concepts

### 📚 Comprehensive Content

- **8 Subjects**: Mathematics, Spanish, Physics, Chemistry, Biology, History, Literature, Geography
- **500+ Exercises**: From basic concepts to advanced problem-solving
- **50+ Lessons**: Structured learning paths for each topic
- **Step-by-Step Solutions**: Detailed explanations with KaTeX-rendered math

### 🔒 Modern Authentication

- **Google OAuth**: Sign in with your Google account
- **User Profiles**: Track your progress with personalized dashboards
- **Cloud Sync**: Your progress is saved across all devices via Supabase

### 🎨 Beautiful UI/UX

- **Motion Animations**: Smooth, polished interactions with Framer Motion
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Dark Mode**: Easy on the eyes during late-night study sessions
- **Tailwind CSS**: Modern, accessible component design

## 🚀 Tech Stack

### Frontend

- **Next.js 16.1.6** (Turbopack) - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Motion** (Framer Motion) - Fluid animations
- **Tailwind CSS 4** - Utility-first styling
- **KaTeX** - Beautiful math rendering
- **Zustand** - Lightweight state management

### Backend

- **Supabase** - PostgreSQL database with real-time capabilities
- **Supabase Auth** - OAuth providers (Google, GitHub)
- **Row Level Security (RLS)** - Secure, user-scoped data access

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide Icons** - Modern icon library
- **Canvas Confetti** - Celebration effects

## 📦 Getting Started

### Prerequisites

- Node.js 20+
- npm/yarn/pnpm
- Supabase account

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Seebaastiaan/LearnQuest.git
cd learnquest
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Set up Supabase**

Run the SQL migrations in your Supabase SQL Editor to create tables and RLS policies:

```sql
-- See supabase-rls-fixes.sql for the complete schema
```

5. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🗂️ Project Structure

```
learnquest/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (app)/             # Protected routes (dashboard, lessons)
│   │   ├── login/             # Authentication page
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── providers/         # Supabase sync provider
│   │   └── ui/                # Reusable UI components
│   ├── lib/
│   │   ├── services/          # Supabase CRUD operations
│   │   ├── supabase/          # Supabase client & middleware
│   │   └── topics/            # Question bank for each subject
│   ├── stores/                # Zustand state management
│   │   ├── useGameStore.ts
│   │   ├── useProgressStore.ts
│   │   └── useSettingsStore.ts
│   └── hooks/                 # Custom React hooks
├── public/                    # Static assets
└── supabase-rls-fixes.sql    # Database schema & policies
```

## 🎯 Key Features Explained

### Question System

Each lesson includes multiple question types:

- **Multiple Choice**: Select the correct answer
- **Fill in the Blank**: Complete the equation
- **Step-by-Step**: Follow guided solutions

Questions are stored in TypeScript files under `src/lib/topics/` with full type safety:

```typescript
export const fracciones: Topic = {
  id: "fracciones",
  title: "Fracciones",
  lessons: [
    {
      id: "suma-resta",
      title: "Suma y Resta de Fracciones",
      questions: [
        {
          id: "frac-001",
          type: "multiple-choice",
          question: "¿Cuánto es $\\frac{1}{2} + \\frac{1}{3}$?",
          // ... more fields
        },
      ],
    },
  ],
};
```

### State Management

Three main stores handle app state:

- **useGameStore**: XP, level, hearts, streaks
- **useProgressStore**: Lesson completion, topic progress
- **useSettingsStore**: User preferences

All state changes are automatically synced to Supabase for persistence.

### Authentication Flow

1. User clicks "Sign in with Google"
2. OAuth callback creates/updates profile
3. Profile data synced from OAuth metadata
4. User redirected to dashboard
5. Progress automatically loaded from Supabase

## 🛠️ Development

### Build for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

### Type Checking

TypeScript is configured in strict mode for maximum type safety.

## 📊 Database Schema

### Tables

- `profiles` - User information (display_name, avatar_url)
- `game_state` - XP, level, hearts, streaks
- `lesson_progress` - Which lessons are completed
- `topic_progress` - Overall topic mastery
- `xp_history` - XP gain events for analytics

All tables use Row Level Security (RLS) to ensure users can only access their own data.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and intended for educational purposes.

## 💖 Credits

Built with love by Sebitas for Eve.

Special thanks to:

- UNAM for the excellent study materials
- Duolingo for UX inspiration
- The open-source community

---

<div align="center">
  <strong>Ready to start your learning quest? 🚀</strong>
  <br />
  <a href="https://learn-quest-theta.vercel.app">Try LearnQuest Now</a>
</div>
