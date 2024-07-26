import { RouterProvider } from 'react-router-dom';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { router } from './Router';

describe('Router', () => {
  it('should render', () => {
    expect(() => render(<RouterProvider router={router} />)).not.toThrow();
  });
});
