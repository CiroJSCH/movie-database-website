'use client';

import { ThemeProvider } from 'next-themes';

interface IProps {
  children: React.ReactNode;
}

const ThemesProvider = ({ children }: IProps) => {
 
  return (
    <ThemeProvider enableSystem attribute='class'>
      {children}
    </ThemeProvider>
  );
};

export default ThemesProvider;
