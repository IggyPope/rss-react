import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/utils/test-utils';

import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('should render 2 buttons', () => {
    renderWithProviders(<Pagination disablePrev={false} disableNext={false} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});
