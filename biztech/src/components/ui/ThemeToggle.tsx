import React from 'react';
import { useTheme } from '../../hooks/useTheme';

// Icon components for better performance and customization
const SunIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
);

const MoonIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
  </svg>
);

const SystemIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
    />
  </svg>
);

// Theme toggle component props
interface ThemeToggleProps {
  variant?: 'icon' | 'dropdown';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
}

// Simple toggle button (cycles through themes)
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'icon',
  size = 'md',
  className = '',
  showLabel = false
}) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const sizeClasses = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg'
  };

  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const handleToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <SystemIcon className={iconSizeClasses[size]} />;
    }
    return resolvedTheme === 'light' ? (
      <SunIcon className={iconSizeClasses[size]} />
    ) : (
      <MoonIcon className={iconSizeClasses[size]} />
    );
  };

  const getLabel = () => {
    if (theme === 'system') return 'System';
    return resolvedTheme === 'light' ? 'Light' : 'Dark';
  };

  const getAriaLabel = () => {
    const current = theme === 'system' ? `System (${resolvedTheme})` : theme;
    const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    return `Current theme: ${current}. Click to switch to ${next} theme.`;
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleToggle}
        className={`
          inline-flex items-center justify-center rounded-md
          border border-[var(--color-border)]
          bg-[var(--color-background)] 
          text-[var(--color-foreground)]
          hover:bg-[var(--color-hover)]
          hover:text-[var(--color-foreground)]
          focus:outline-none 
          focus:ring-2 
          focus:ring-[var(--color-focus)] 
          focus:ring-offset-2
          focus:ring-offset-[var(--color-background)]
          transition-all duration-[var(--transition-normal)]
          disabled:opacity-50 
          disabled:cursor-not-allowed
          ${sizeClasses[size]}
          ${className}
        `}
        aria-label={getAriaLabel()}
        title={getLabel()}
      >
        {getIcon()}
        {showLabel && (
          <span className="ml-2 text-sm font-medium">
            {getLabel()}
          </span>
        )}
      </button>
    );
  }

  return null; // Dropdown variant can be implemented later
};

// Theme selector dropdown component
export const ThemeSelector: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
      className={`
        px-3 py-2 rounded-md
        border border-[var(--color-border)]
        bg-[var(--color-background)]
        text-[var(--color-foreground)]
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--color-focus)]
        focus:border-[var(--color-focus)]
        transition-all duration-[var(--transition-normal)]
        ${className}
      `}
      aria-label="Select theme"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
};

export default ThemeToggle;