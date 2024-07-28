import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/util/test-utils';

import { Fallback } from './Fallback';

describe('Fallback', () => {
  it('should render', () => {
    renderWithProviders(<Fallback />);

    expect(screen.getByText(/something went wrong./i)).toBeInTheDocument();
  });
});
