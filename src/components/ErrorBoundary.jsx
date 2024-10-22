import React, { Component } from 'react';

// ErrorBoundary class component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI on error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI in case of error
      return (
        <div className="text-red-600 text-center p-4">
          <h1>Something went wrong.</h1>
          <p>Please try again later.</p>
        </div>
      );
    }

    // If no error, render children as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
