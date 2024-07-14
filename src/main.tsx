import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@/components/App';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Fallback } from '@/components/Fallback/Fallback';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Fallback />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
