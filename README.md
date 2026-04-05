# Culinary Atelier

A modern, responsive web application for food discovery and culinary exploration.

## Design System

- **Primary Color**: #FF7043 (Coral)
- **Tertiary Color**: #4CAF50 (Green)
- **Typography**: 
  - Headlines: Plus Jakarta Sans
  - Body/Labels: Be Vietnam Pro
- **Shape**: Pill-shaped buttons with maximum roundedness
- **Theme**: Light color mode with vibrant aesthetic

## Features

- 🏠 **Home**: Curated food picks, genre exploration, and trending dishes
- ℹ️ **About**: Team information and mission statement
- 📸 **Scanner**: AI-powered food ingredient recognition
- ❓ **Quiz**: Personalized cuisine preference questionnaire
- 🍽️ **Type**: Browse food by categories

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Responsive Design

The app is fully responsive and optimized for:
- 📱 Mobile devices (320px - 768px)
- 💻 Desktop browsers (769px+)

## Project Structure

```
culinary-atelier/
├── app/
│   ├── home/         # Home page
│   ├── about/        # About page
│   ├── scanner/      # Scanner page
│   ├── quiz/         # Quiz page
│   ├── type/         # Type page
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles
├── components/
│   ├── Header.tsx    # Header component
│   └── BottomNav.tsx # Bottom navigation
└── public/           # Static assets
```

## License

MIT
