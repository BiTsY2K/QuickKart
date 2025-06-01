'use client';

import React from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode,
  defaultTheme?: Theme,
  storageKey?: string,
};

type ThemeProviderState = {
  theme: Theme,
  setTheme: (theme: Theme) => void
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null
};

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState);

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme_context = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme_context must be used within a ThemeProvider')

  return context
};

export function ThemeProvider({
  children, defaultTheme = 'system', storageKey = 'quickCart-ui-theme', ...props
}: ThemeProviderProps) {
  const [theme, _setTheme] = React.useState<Theme>(
    () => localStorage.getItem(storageKey) as Theme || defaultTheme
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (theme: Theme) => {
      root.classList.remove('light', 'dark');
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      const effectiveTheme = (theme === 'system') ? systemTheme : theme;
      root.classList.add(effectiveTheme);
    };

    const handleThemeChange = () => {
      if (theme === 'system') applyTheme('system');
    };

    applyTheme(theme);
    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, [theme]);

  const setTheme = (theme: Theme) => {
    localStorage.setItem(storageKey, theme);
    _setTheme(theme);
  }

  const value = { theme, setTheme };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
};