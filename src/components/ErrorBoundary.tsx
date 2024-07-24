import * as React from 'react';

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
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
      return this.props.fallback;
    }

    return this.props.children;
  }
}
