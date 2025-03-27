
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-foreground/80" />
      )}
    </button>
  );
};

export default ThemeToggle;
