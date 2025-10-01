import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// Theme types
export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

// Theme context interface
interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Create theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme storage key
const THEME_STORAGE_KEY = 'biztech-theme';

// Custom hook to use theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider props
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

// Get system theme preference
const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Get stored theme
const getStoredTheme = (storageKey: string): Theme | null => {
  if (typeof window === 'undefined') return null;
  try {
    return (localStorage.getItem(storageKey) as Theme) || null;
  } catch {
    return null;
  }
};

// Store theme
const storeTheme = (theme: Theme, storageKey: string): void => {
  try {
    localStorage.setItem(storageKey, theme);
  } catch {
    // Handle localStorage errors silently
  }
};

// Resolve theme to light or dark
const resolveTheme = (theme: Theme): ResolvedTheme => {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
};

// Apply theme to document
const applyTheme = (resolvedTheme: ResolvedTheme): void => {
  const root = document.documentElement;
  
  // Remove existing theme classes
  root.classList.remove('light', 'dark');
  
  // Add new theme class
  root.classList.add(resolvedTheme);
  
  // Update data attribute for CSS targeting
  root.setAttribute('data-theme', resolvedTheme);
  
  // Update color scheme for better browser integration
  root.style.colorScheme = resolvedTheme;
};

// Theme Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'system',
  storageKey = THEME_STORAGE_KEY,
}) => {
  // Initialize theme state
  const [theme, setThemeState] = useState<Theme>(() => {
    return getStoredTheme(storageKey) || defaultTheme;
  });
  
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    return resolveTheme(theme);
  });

  // Update resolved theme when theme changes
  useEffect(() => {
    const newResolvedTheme = resolveTheme(theme);
    setResolvedTheme(newResolvedTheme);
    applyTheme(newResolvedTheme);
  }, [theme]);

  // Listen for system theme changes when using system theme
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? 'dark' : 'light';
      setResolvedTheme(newSystemTheme);
      applyTheme(newSystemTheme);
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  // Set theme function
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    storeTheme(newTheme, storageKey);
  };

  // Toggle between light and dark (ignores system)
  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Context value
  const value: ThemeContextType = {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export context for advanced usage
export { ThemeContext };