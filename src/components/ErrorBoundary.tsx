import React from 'react';

import styles from './ErrorBoundary.module.scss';

interface Props {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<
  Props,
  { hasError: boolean }
> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(error, errorInfo);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <h1>Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
