import React from 'react';

export default function SectionHeading({
  title,
  accent,
  subtitle,
  showDivider = true,
  lightSurface = false,
  inverted = false,
  align = 'center',
  className = '',
}) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <div className={`site-heading ${alignClass} ${className}`}>
      <h2 className={`site-title ${inverted ? '!text-white' : ''}`}>
        {title}
        {accent ? (
          <>
            {' '}
            <span>{accent}</span>
          </>
        ) : null}
      </h2>
      {showDivider && (
        <div
          className={`heading-divider ${
            lightSurface ? 'heading-divider--light-surface' : ''
          }`}
          aria-hidden="true"
        />
      )}
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base ${
            inverted ? 'text-neutral-300' : 'text-[var(--chery-body-text)]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
