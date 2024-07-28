import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';

import { ThemeProvider } from '@/context/ThemeContext';
import type { AppStore, RootState } from '@/store/store';
import { makeStore } from '@/store/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {
    preloadedState = {},
    store = makeStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <ThemeProvider>
      <Provider store={store}>
        <MemoryRouter initialEntries={['/page/1/']}>{children}</MemoryRouter>
      </Provider>
    </ThemeProvider>
  );

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
