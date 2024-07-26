import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/utils/test-utils';

import { DetailedCard } from './DetailedCard';

describe('DetailedCard', () => {
  it('should render loader', () => {
    renderWithProviders(<DetailedCard />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
