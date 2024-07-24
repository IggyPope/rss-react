import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Fallback } from '@/components/Fallback/Fallback';
import { MainSection } from '@/components/MainSection/MainSection';
import { TopSection } from '@/components/TopSection/TopSection';

export const Root = () => {
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <TopSection />
      <MainSection />
    </ErrorBoundary>
  );
};
