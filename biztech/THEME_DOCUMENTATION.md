# Biztech Theme System Documentation

## 🎨 Comprehensive React Theme System

A production-ready theme system built for Vite + React + TypeScript with full light/dark mode support and system theme detection.

## ✨ Features

- 🌓 **Light, Dark & System themes** with automatic switching
- 🎯 **CSS Custom Properties** for consistent theming
- 💾 **localStorage persistence** remembers user preference
- 🖥️ **System theme detection** respects OS preferences  
- 🔄 **Smooth transitions** between theme changes
- ♿ **Accessibility compliant** with proper contrast ratios
- 📱 **Responsive design** works on all screen sizes
- 🚀 **Performance optimized** with minimal re-renders
- 🔒 **TypeScript support** with full type safety

## 📁 Project Structure

```
src/
├── contexts/
│   └── ThemeContext.tsx      # Main theme context & provider
├── components/
│   └── ui/
│       └── ThemeToggle.tsx   # Theme toggle & selector components
├── styles/
│   └── themes.css           # Comprehensive CSS variables
├── App.tsx                  # Updated with theme integration
├── App.css                 # Theme-aware component styles
├── index.css               # Base styles with theme support
└── main.tsx                # Root with ThemeProvider
```

## 🚀 Quick Start

The theme system is already integrated! Just use the theme toggle button in the top-right corner.

### Basic Usage

```tsx
import { useTheme } from './contexts/ThemeContext';

function MyComponent() {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current: {theme} ({resolvedTheme})</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### Using Theme Components

```tsx
import { ThemeToggle, ThemeSelector } from './components/ui/ThemeToggle';

function Header() {
  return (
    <header>
      <ThemeToggle size="md" showLabel />
      <ThemeSelector />
    </header>
  );
}
```

## 🎨 CSS Variables System

### Semantic Colors
```css
/* Background & Text */
--color-background: #ffffff / #0a0a0a
--color-foreground: #171717 / #fafafa
--color-muted: #f5f5f5 / #171717
--color-muted-foreground: #737373 / #a3a3a3

/* Interactive Elements */
--color-primary: #2563eb
--color-secondary: #f1f5f9 / #1e293b
--color-accent: #e2e8f0 / #334155
--color-border: #e5e5e5 / #262626

/* States */
--color-hover: #f5f5f5 / #262626
--color-focus: #3b82f6
--color-disabled: #d4d4d4 / #525252
```

### Using Variables
```css
.my-component {
  background-color: var(--color-card);
  color: var(--color-card-foreground);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
```

## 🔧 Theme Context API

### Properties
- `theme: 'light' | 'dark' | 'system'` - Current theme setting
- `resolvedTheme: 'light' | 'dark'` - Actual resolved theme
- `setTheme(theme)` - Set specific theme
- `toggleTheme()` - Cycle through themes

### Advanced Usage
```tsx
const { theme, resolvedTheme, setTheme } = useTheme();

// Set specific theme
setTheme('dark');
setTheme('system');

// Check resolved theme for conditional rendering
if (resolvedTheme === 'dark') {
  // Dark-specific logic
}
```

## 🎛️ Component Variants

### ThemeToggle Props
```tsx
interface ThemeToggleProps {
  variant?: 'icon' | 'dropdown';  // Button style
  size?: 'sm' | 'md' | 'lg';      // Size variants
  className?: string;              // Custom styles
  showLabel?: boolean;            // Show text label
}
```

### Examples
```tsx
// Icon only
<ThemeToggle size="sm" />

// With label
<ThemeToggle size="md" showLabel />

// Custom styling
<ThemeToggle className="custom-class" />
```

## 🎨 Design Tokens

### Spacing
- `--spacing-xs: 0.25rem` (4px)
- `--spacing-sm: 0.5rem` (8px)
- `--spacing-md: 1rem` (16px)
- `--spacing-lg: 1.5rem` (24px)

### Typography
- `--font-size-sm: 0.875rem`
- `--font-size-base: 1rem`
- `--font-size-lg: 1.125rem`

### Shadows
- `--shadow-sm: subtle shadow`
- `--shadow: default shadow`
- `--shadow-md: medium shadow`
- `--shadow-lg: large shadow`

## 🔄 Theme Behavior

1. **Initial Load**: Checks localStorage → System preference → Default
2. **System Changes**: Auto-updates when system theme changes (if theme = 'system')
3. **Persistence**: Saves user choice to localStorage
4. **Hydration Safe**: Prevents flash of incorrect theme
5. **Transitions**: Smooth 250ms transitions between themes

## ♿ Accessibility Features

- **High Contrast Support**: Adapts to system high contrast mode
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Proper ARIA labels and announcements
- **Color Contrast**: WCAG AA compliant contrast ratios

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Responsive theme controls
- **Touch Friendly**: Large touch targets
- **Performance**: Optimized for all screen sizes

## 🚀 Performance Optimizations

- **Minimal Re-renders**: Context optimized to prevent unnecessary renders
- **CSS Variables**: Hardware accelerated theme switching
- **Code Splitting**: Components loaded on demand
- **Memory Efficient**: Proper cleanup of event listeners

## 🎯 Best Practices

### Custom Components
```tsx
// Use CSS variables for theming
const MyCard = () => (
  <div className="card">
    <h2 className="card-title">Title</h2>
    <p className="card-content">Content</p>
  </div>
);

// CSS
.card {
  background: var(--color-card);
  color: var(--color-card-foreground);
  border: 1px solid var(--color-border);
}
```

### Dynamic Styling
```tsx
// Conditional styling based on theme
const { resolvedTheme } = useTheme();

const dynamicStyles = {
  background: resolvedTheme === 'dark' 
    ? 'var(--color-card)' 
    : 'var(--color-background)'
};
```

## 🔧 Customization

### Adding New Colors
1. Add CSS variables to `src/styles/themes.css`
2. Define for both light and dark themes
3. Use semantic naming conventions

### Custom Theme Variants
```tsx
// Extend the theme context for custom variants
type CustomTheme = 'light' | 'dark' | 'system' | 'blue' | 'green';
```

## 🐛 Troubleshooting

### Common Issues

1. **Flash of wrong theme**: Ensure ThemeProvider wraps entire app
2. **Variables not working**: Import `themes.css` before using variables
3. **System detection not working**: Check browser support for `matchMedia`
4. **Persistence issues**: Verify localStorage is available

### Debug Mode
```tsx
const { theme, resolvedTheme } = useTheme();
console.log('Theme:', theme, 'Resolved:', resolvedTheme);
```

## 🔄 Migration Guide

### From Other Theme Systems
1. Replace theme provider with `ThemeProvider`
2. Update CSS to use new variables
3. Replace theme hooks with `useTheme`
4. Test all theme-aware components

---

**🎉 Your theme system is ready to use!**

The theme system automatically detects your system preference and provides smooth transitions between light and dark modes. All components are already themed and the system is production-ready.