import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/util/test-utils';

import { NotFound } from './NotFound';

describe('NotFound', () => {
  it('should render', () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
