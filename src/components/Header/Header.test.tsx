import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/utils/test-utils';

import { Header } from './Header';

describe('Header', () => {
  it('should render', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });
  it('should have 1 input', () => {
    renderWithProviders(<Header />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(1);
  });
  it('should have 3 buttons', () => {
    renderWithProviders(<Header />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });
});
