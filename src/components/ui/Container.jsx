import React from 'react';

export default function Container({ children, className = '' }) {
  return <div className={`chery-container ${className}`}>{children}</div>;
}
