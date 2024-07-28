import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/util/test-utils';

import { ThemeSwitch } from './ThemeSwitch';

describe('ThemeSwitch', () => {
  it('should render 1 button', () => {
    renderWithProviders(<ThemeSwitch />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
  });
  it('should change theme on click', () => {
    renderWithProviders(<ThemeSwitch />);
    const button = screen.getByRole('button');
    // fire click event
    fireEvent.click(button);
    expect(button).toHaveTextContent('☀️');
    // fire click event
    fireEvent.click(button);
    expect(button).toHaveTextContent('🌙');
  });
});
