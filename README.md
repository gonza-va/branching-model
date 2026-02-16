# Shopify Remix Admin App

A Remix application for Shopify Admin featuring a welcome page with Polaris web components.

## Features

- 🚀 Built with Remix framework for optimal performance
- 💎 Shopify Polaris components for beautiful, accessible UI
- 📱 Responsive design for all devices
- 🎨 Modern React architecture with TypeScript

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── entry.client.tsx    # Client entry point
│   ├── entry.server.tsx    # Server entry point
│   ├── root.tsx            # Root component
│   └── routes/
│       └── _index.tsx      # Welcome page with Polaris components
├── public/                 # Static assets
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Technologies

- **Remix**: Full-stack web framework
- **Shopify Polaris**: Design system for Shopify apps
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool

## Available Polaris Components

The welcome page demonstrates several Polaris components:

- `Page` - Main page container
- `Layout` - Responsive layout system
- `Card` - Content containers
- `Banner` - Informational messages
- `Button` - Action buttons
- `Text` - Typography components
- `BlockStack` & `InlineStack` - Layout utilities

## Learn More

- [Remix Documentation](https://remix.run/docs)
- [Shopify Polaris](https://polaris.shopify.com)
- [Shopify App Development](https://shopify.dev)

## License

MIT