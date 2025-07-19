# 🛒 E-Commerce Application

> Exercise e-commerce app built with Next.js, React, and TypeScript

## 🚀 Quick Start

### Prerequisites

- Node.js (LTS version recommended)
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

## 🔧 Tech Stack

- **Next.js 14** with Pages Router
- **TypeScript** (strict mode)
- **Mantine 7** + Tailwind CSS
- **Zustand** for state management
- **Axios** for API calls

## 📱 Features

- 🏠 **Homepage** - Browse product categories
- 📂 **Category Pages** - View products by category
- 🛒 **Shopping Cart** - Add, remove, and manage items
- ⚡ **SSG/ISR** - Optimized performance
- 💾 **Cart Persistence** - Items saved across sessions

## 📁 Structure

```
src/
├── misc/         # Shared components & utilities
├── modules/      # Feature-specific code
└── pages/        # Next.js routing
```

## 🚀 Production

```bash
pnpm build
pnpm start
```

## 💡 Future Enhancements

For potential improvements and roadmap, see [FUTURE_IMPROVEMENTS.md](./FUTURE_IMPROVEMENTS.md)
