# Loord Technology - E-commerce Site

A modern, responsive e-commerce website built with Next.js, TypeScript, and Tailwind CSS featuring gaming and technology products.

## Features

- **Modern Design**: Clean, minimal interface with white/black theme
- **Dark/Light Mode**: Toggle between themes with system preference support
- **Responsive Layout**: Fully responsive design for mobile, tablet, and desktop
- **Product Showcase**: Interactive product cards with image carousels
- **Shopping Cart**: Dynamic cart with item count badge
- **FAQ Section**: Expandable accordion for frequently asked questions
- **Customer Reviews**: Star ratings and customer testimonials
- **Accessibility**: Full keyboard navigation and ARIA labels

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI components
- **Icons**: Lucide React
- **Theme**: Next-themes for dark/light mode

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd loord-technology
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── categories.tsx
│   ├── faq.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── product-card.tsx
│   ├── product-grid.tsx
│   ├── reviews.tsx
│   └── theme-provider.tsx
├── data/
│   └── products.ts
└── lib/
    └── utils.ts
```

## Features Overview

### Home Page Sections

1. **Sticky Navigation**: Logo, menu items, theme toggle, and cart badge
2. **Hero Section**: Main heading with call-to-action buttons
3. **Categories**: Product category chips with icons
4. **Products Grid**: Interactive product cards with image carousels
5. **FAQ**: Expandable questions and answers
6. **Reviews**: Customer testimonials with star ratings
7. **Footer**: Links, newsletter signup, and social media icons

### Product Cards

- Multiple image support with carousel navigation
- Hover effects and smooth transitions
- Add to cart functionality with stock status
- Responsive grid layout

### Accessibility

- Keyboard navigation support
- ARIA labels and roles
- Focus management
- Screen reader friendly

## Customization

### Adding Products

Edit `src/data/products.ts` to add or modify products:

```typescript
{
  id: "unique-id",
  title: "Product Name",
  description: "Product description",
  price: 99.99,
  images: ["image-url-1", "image-url-2"],
  category: "Category Name",
  inStock: true
}
```

### Styling

The project uses Tailwind CSS with custom CSS variables for theming. Modify `src/app/globals.css` to customize colors and styles.

### Theme Configuration

Theme settings are configured in `tailwind.config.ts` and use CSS variables for easy customization.

## Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

Or deploy to platforms like Vercel, Netlify, or any Node.js hosting service.

## License

This project is licensed under the MIT License.

## Support

For support, please contact us through the website or open an issue in the repository.
