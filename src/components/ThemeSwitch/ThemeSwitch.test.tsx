import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/utils/test-utils';

import { ThemeSwitch } from './ThemeSwitch';

describe('Pagination', () => {
  it('should render 1 button', () => {
    renderWithProviders(<ThemeSwitch />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
  });
});
