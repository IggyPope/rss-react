import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Fallback } from '@/components/Fallback/Fallback';
import { Header } from '@/components/Header/Header';
import { MainSection } from '@/components/MainSection/MainSection';
import { useThemeContext } from '@/context/hooks';

import styles from './Root.module.scss';

export const Root = () => {
  const { theme } = useThemeContext();
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <div
        className={[styles.container, theme === 'light' ? styles.light : null]
          .filter(Boolean)
          .join(' ')}
      >
        <Header />
        <MainSection />
      </div>
    </ErrorBoundary>
  );
};
