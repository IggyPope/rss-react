import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/utils/test-utils';

import { ErrorButton } from './ErrorButton';

describe('ErrorButton', () => {
  it('should render', () => {
    renderWithProviders(<ErrorButton />);

    expect(screen.getByText('Throw error')).toBeInTheDocument();
  });
});
