import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error
        ? String(error.message || error)
        : 'Terjadi kesalahan saat merender halaman.',
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md border border-neutral-200 rounded-xl p-6 space-y-3 shadow-sm">
            <h1 className="text-lg font-bold text-[#111111]">Terjadi Kendala Tampilan</h1>
            <p className="text-xs text-neutral-600 break-words">{this.state.errorMessage}</p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false, errorMessage: '' })}
              className="theme-btn"
            >
              Muat Ulang Tampilan
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
