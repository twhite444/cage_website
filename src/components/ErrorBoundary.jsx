import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Error Boundary component that catches JavaScript errors in its child component tree
 * and displays a fallback UI instead of crashing the whole application
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { 
      hasError: true,
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({
      errorInfo
    });
  }

  resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      // If a custom fallback is provided, use it
      if (this.props.fallback) {
        return typeof this.props.fallback === 'function'
          ? this.props.fallback({
              error: this.state.error,
              resetErrorBoundary: this.resetErrorBoundary
            })
          : this.props.fallback;
      }

      // Otherwise use a default error message
      return (
        <div className="p-6 bg-(--color-darkPlum) text-(--color-ivory) min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-xl font-display text-(--color-garnet) mb-2">Something went wrong</h1>
            <p className="mb-4">We're sorry, but an error occurred.</p>
            <button 
              onClick={this.resetErrorBoundary}
              className="btn-primary"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

export default ErrorBoundary;