import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LOCAL_STORAGE_KEY } from '@/constants/app';
import { renderWithProviders } from '@/util/test-utils';

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
  it('should save search query to LocalStorage', () => {
    renderWithProviders(<Header />);
    const input = screen.getByRole('textbox');
    const searchButton = screen.getByText(/search/i);
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(searchButton);
    expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toBe('test');
  });
});
