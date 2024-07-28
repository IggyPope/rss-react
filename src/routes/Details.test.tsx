import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/util/test-utils';

import { Details } from './Details';

describe('Details', () => {
  it('should render loader', () => {
    renderWithProviders(<Details />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
