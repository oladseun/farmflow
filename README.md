# 🌾 FarmFlow

> Digital farm management system for commercial farmers with 1000+ animals

## Overview

FarmFlow is a farm management SaaS designed for commercial farmers managing multiple species (broilers, layers, fish, maggots). It replaces paper-based records with a digital system for tracking tasks, expenses, animal health, and inventory.

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL with RLS)
- **Deployment**: Vercel
- **Authentication**: Supabase Auth

## Features

- ✅ **Dashboard** - Overview of farm metrics
- ✅ **Flock Management** - Track animal batches
- ✅ **Task Management** - Daily tasks with reminders
- ✅ **Expense Tracking** - Categorized financial records
- ✅ **Health Records** - Disease and vaccination tracking
- ✅ **Inventory Management** - Stock tracking with alerts
- ✅ **Offline-First** - Works in barns with poor connectivity

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/farmflow.git
cd farmflow
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Add your Supabase credentials to `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── app/
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components
│   └── features/       # Feature modules
├── lib/
│   ├── supabase/       # Supabase client
│   └── utils/          # Utility functions
├── types/              # TypeScript types
├── hooks/              # Custom React hooks
├── contexts/           # React contexts
└── assets/             # Static assets
```

## Security

- 🔒 Row Level Security (RLS) on all tables
- 🔐 Zero-trust backend validation
- 🛡️ Defense in depth architecture
- 🔑 Environment-based secrets

## License

MIT

## Contact

For questions or support, please open an issue on GitHub.
