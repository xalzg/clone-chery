import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const variantClass =
    variant === 'primary'
      ? 'theme-btn'
      : variant === 'simulasi'
      ? 'theme-btn theme-btn--simulasi'
      : variant === 'outline'
      ? 'inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--chery-red)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--chery-red)] transition-colors hover:bg-[var(--chery-red)] hover:text-white cursor-pointer'
      : 'inline-flex items-center justify-center gap-2 rounded-full bg-[var(--chery-dark)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--chery-red)] cursor-pointer';

  return (
    <button type={type} className={`${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
