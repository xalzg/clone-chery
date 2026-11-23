import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export default function PageBreadcrumb({
  title,
  currentLabel,
  desktopBg,
  mobileBg,
}) {
  return (
    <div
      className="site-breadcrumb"
      style={{
        backgroundImage: `url(${desktopBg || mobileBg})`,
        backgroundColor: '#1a1c20',
      }}
    >
      <Container>
        <h1 className="text-[32px] sm:text-[40px] font-bold !text-white mb-2 drop-shadow-sm">
          {title}
        </h1>
        <ul className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-white">
          <li>
            <Link to="/" className="text-white hover:text-[var(--chery-red)] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-white/70">
            //
          </li>
          <li className="text-[var(--chery-red)] font-semibold">{currentLabel || title}</li>
        </ul>
      </Container>
    </div>
  );
}
