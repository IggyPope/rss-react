import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/utils/test-utils';

import { Flyout } from './Flyout';

describe('Flyout', () => {
  it('should render', () => {
    renderWithProviders(<Flyout />);
    expect(screen.getByText(/0 characters selected/i)).toBeInTheDocument();
  });
  it('should have 3 buttons', () => {
    renderWithProviders(<Flyout />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });
});
