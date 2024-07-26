import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should render inner text', () => {
    render(<ErrorBoundary fallback="Test">Test</ErrorBoundary>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
