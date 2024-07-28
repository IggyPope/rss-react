import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/util/test-utils';

import { Root } from './Root';

describe('Root', () => {
  it('should render header', () => {
    renderWithProviders(<Root />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  it('should render main', () => {
    renderWithProviders(<Root />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
