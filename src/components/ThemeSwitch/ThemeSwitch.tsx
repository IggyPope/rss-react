import { Button } from '@/components/ui/Button';
import { useThemeContext } from '@/context/hooks';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div>
      <Button onClick={toggleTheme}>{theme === 'light' ? '☀️' : '🌙'}</Button>
    </div>
  );
};
