import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/util/test-utils';

import { MainSection } from './MainSection';

describe('MainSection', () => {
  it('should render', () => {
    renderWithProviders(<MainSection />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('should render loader', () => {
    renderWithProviders(<MainSection />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
  it('should not render pagination', async () => {
    renderWithProviders(<MainSection />);
    const links = await screen.findAllByRole('link');
    expect(links).toHaveLength(1);
  });
});
