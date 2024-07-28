import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/util/test-utils';

import { Button } from './Button';

describe('Pagination', () => {
  it('should render 1 button', () => {
    renderWithProviders(<Button>Test</Button>);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
  });
  it('should render with text', () => {
    renderWithProviders(<Button>Test text</Button>);
    const button = screen.getByText('Test text');
    expect(button).toBeInTheDocument();
  });
});
