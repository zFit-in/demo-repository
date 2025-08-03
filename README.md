# ZFIT - The McDonald's of Healthy Food

A modern, SEO-optimized website for ZFIT cloud kitchen, showcasing high-protein and anti-aging meals with a vibrant green design.

## 🍃 About ZFIT

ZFIT is positioned as the future "McDonald's of healthy food," making healthy eating exciting and delicious. Our mission is to shatter the myth that "healthy is boring" by offering:

- **High Protein Meals**: Perfect for fitness enthusiasts and protein goals
- **Anti-Aging Diet**: Science-backed nutrition inspired by Bryan Johnson
- **Complete Bowls**: Convenient, nutritious meals for busy professionals

## ✨ Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Menu Search & Filter**: Find your perfect meal quickly
- **Real-time Status**: Shows current ordering availability (5PM-11PM)
- **Social Media Integration**: YouTube and Instagram links with brand colors
- **Nutrition Focus**: Detailed calorie and protein information
- **Accessibility**: WCAG compliant with proper alt tags and contrast
- **Code Quality**: ESLint and Prettier for consistent code formatting
- **SASS Styling**: Modern SCSS with nested selectors and variables

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Lucide React** for beautiful icons
- **SASS/SCSS** for advanced styling
- **CSS Grid & Flexbox** for responsive layouts
- **ESLint & Prettier** for code quality
- **GitHub Pages** for deployment

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zfit-in.git
   cd zfit-in
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Development Commands

### Code Quality & Linting
```bash
# Check for linting issues
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check TypeScript types
npm run type-check
```

### Build & Deploy
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🏗️ Build & Deploy

### Local Build
```bash
npm run build
```

### Deploy to GitHub Pages

1. **Update homepage in package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/zfit-in"
   }
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "gh-pages" branch as source
   - Save the settings

## 📁 Project Structure

```
zfit-in/
├── public/
│   ├── zfit.svg          # Main logo (favicon)
│   ├── eating.png        # Hero section illustration
│   ├── delivering.png    # Order info illustration
│   └── MenuImages/       # Menu item images
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── HeroSection.tsx # Main hero banner
│   │   ├── MenuSection.tsx # Menu display with search
│   │   ├── MenuItemCard.tsx # Individual menu item
│   │   ├── OrderInfo.tsx # Ordering information
│   │   ├── Footer.tsx    # Footer with contact & social
│   │   ├── Header.scss   # Navigation styles
│   │   ├── HeroSection.scss # Hero banner styles
│   │   ├── MenuSection.scss # Menu display styles
│   │   ├── MenuItemCard.scss # Menu item styles
│   │   ├── OrderInfo.scss # Order info styles
│   │   └── Footer.scss   # Footer styles
│   ├── data/            # Static data
│   │   └── menu.ts      # Menu items data
│   ├── types/           # TypeScript interfaces
│   │   └── menu.ts      # Menu type definitions
│   ├── App.tsx          # Main app component
│   ├── App.scss         # App-specific styles
│   ├── main.tsx         # Entry point
│   └── index.scss       # Global styles & variables
├── .vscode/             # VS Code settings
├── eslint.config.js     # ESLint configuration
├── .prettierrc          # Prettier configuration
├── .prettierignore      # Prettier ignore rules
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🍽️ Menu Categories

### Just High Protein (4 items)
- Grilled Chicken – ₹219 [390 kcal, 59g protein]
- Grilled Paneer – ₹219 [600 kcal, 39g protein]
- Poached Chicken Delight – ₹169 [298 kcal, 54g protein]
- Blanched Paneer Bites – ₹169 [478 kcal, 39g protein]

### Anti Aging Diet [Inspired by Bryan Johnson] (3 items)
- Greens & Proteins Poached Chicken Salad – ₹309 [610 kcal, 84g protein]
- Greens & Proteins Blanched Paneer Salad – ₹309 [690 kcal, 49g protein]
- Chicken Powered Stir Fry – ₹349 [690 kcal, 79g protein]

### Bowls (8 items)
- Protein Packed Chicken Meal – ₹289 [530 kcal, 72g protein]
- Veggie Paneer Meal – ₹289 [790 kcal, 42g protein]
- Poached Chicken Meal – ₹269 [500 kcal, 67g protein]
- Blanched Paneer Veggie Meal – ₹269 [750 kcal, 44g protein]
- Protein Packed Chicken Salad – ₹249 [470 kcal, 69g protein]
- Veggie Paneer Salad – ₹249 [760 kcal, 46g protein]
- Poached Chicken Salad – ₹229 [440 kcal, 63g protein]
- Blanched Paneer Veggie Salad – ₹229 [730 kcal, 42g protein]

## 🎨 Design System

### Colors
- **Primary Green**: `#22c55e` (ZFIT Green)
- **Dark Green**: `#16a34a`
- **Light Green**: `#4ade80`
- **Green Background**: `#f0fdf4`
- **Accent Orange**: `#f59e0b`

### Typography
- **Font Family**: Inter (system fallbacks)
- **Headings**: Bold weights (600-800)
- **Body**: Regular weight (400-500)

### Social Media Brand Colors
- **YouTube**: `#ff0000` (Red)
- **Instagram**: `#e4407f` (Pink)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding Menu Items
Edit `src/data/menu.ts` to add new items:

```typescript
{
  id: 'new-item',
  name: 'New Menu Item',
  price: 299,
  calories: 450,
  protein: 55,
  category: 'high-protein',
  description: 'Description here',
  isVegetarian: false,
  image: '/MenuImages/NewItem.jpg'
}
```

### Updating Colors
Modify CSS variables in `src/index.scss`:

```scss
:root {
  --zfit-green: #your-color;
  --zfit-green-dark: #your-dark-color;
  /* ... */
}
```

### SASS Features
The project uses SCSS with:
- **Nested Selectors**: Clean, organized styles
- **& Parent Selector**: Efficient pseudo-classes
- **Variables**: CSS custom properties
- **Comments**: Descriptive style documentation

### Code Quality Settings
- **ESLint**: Configured for TypeScript and React
- **Prettier**: Consistent code formatting
- **VS Code**: Auto-format on save enabled

## 🌐 SEO Features

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: Semantic HTML markup
- **Google Analytics**: AW-17427863421 tracking
- **Canonical URLs**: Proper URL structure

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Format code: `npm run format`
6. Submit a pull request

## 📞 Contact

- **Phone**: +91 96934 38548
- **Email**: contact@zfit.in
- **Address**: ZFIT, Munnekollal, Kundalahalli, Silver Springs Layout, Sai Baba Temple Road, Near HDFC Bank ATM, Marathahalli, Bangalore
- **FSSAI License**: 21224008002624
- **Social Media**: 
  - YouTube: [@zfit-in](https://www.youtube.com/@zfit-in)
  - Instagram: [@zfit_in](https://www.instagram.com/zfit_in/)

---

**ZFIT** - Making healthy eating exciting and delicious! 🍃 