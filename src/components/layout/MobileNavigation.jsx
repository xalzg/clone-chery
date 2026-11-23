import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';
import { FEATURED_VEHICLES } from '../../data/vehicles';

export default function MobileNavigation({
  isOpen,
  onClose,
  onOpenSearch,
  onOpenTestDrive,
}) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    onClose();
    onOpenSearch(query.trim());
  };

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2.5 text-sm font-bold rounded-md transition-colors ${
      isActive ? 'text-[var(--chery-red)] bg-red-50/60' : 'text-[#111111] hover:text-[var(--chery-red)]'
    }`;

  return (
    <nav
      aria-label="Navigasi Mobile"
      className="lg:hidden bg-white border-t border-black/10 shadow-lg"
    >
      <div className="chery-container py-4 space-y-1 max-h-[75vh] overflow-y-auto">
        <form
          onSubmit={handleSearch}
          className="flex items-center border border-neutral-200 rounded-lg bg-[var(--chery-surface)] mb-3 overflow-hidden"
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari tipe mobil Chery..."
            aria-label="Cari tipe mobil Chery"
            className="flex-1 px-3 py-2 text-sm bg-transparent text-[#111111] focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Cari"
            className="px-3 py-2 text-neutral-600 hover:text-[var(--chery-red)] cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>

        <NavLink to="/" end onClick={onClose} className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/promo" onClick={onClose} className={navLinkClass}>
          Promo
        </NavLink>

        <div>
          <button
            type="button"
            onClick={() => setSubmenuOpen((v) => !v)}
            aria-expanded={submenuOpen}
            className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-[#111111] hover:text-[var(--chery-red)] cursor-pointer"
          >
            <span>Tipe Mobil</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                submenuOpen ? 'rotate-180 text-[var(--chery-red)]' : ''
              }`}
            />
          </button>
          {submenuOpen && (
            <div className="pl-4 ml-3 border-l-2 border-[var(--chery-red)]/30 space-y-1 my-1">
              {FEATURED_VEHICLES.map((car) => (
                <Link
                  key={car.id}
                  to={`/product/details/${car.id}`}
                  onClick={onClose}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-[#111111] hover:text-[var(--chery-red)]"
                >
                  {car.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/harga-mobil-chery" onClick={onClose} className={navLinkClass}>
          Harga
        </NavLink>
        <NavLink to="/artikel" onClick={onClose} className={navLinkClass}>
          Artikel
        </NavLink>
        <NavLink to="/galeri" onClick={onClose} className={navLinkClass}>
          Galeri
        </NavLink>
        <NavLink to="/kontak" onClick={onClose} className={navLinkClass}>
          Kontak
        </NavLink>

        <div className="pt-3 mt-2 border-t border-neutral-200 grid grid-cols-2 gap-2.5">
          <Link
            to="/#simulasi-section"
            onClick={onClose}
            className="theme-btn !py-2.5 !px-3 text-xs font-semibold"
          >
            Simulasi Kredit
          </Link>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenTestDrive('');
            }}
            className="inline-flex items-center justify-center rounded-full bg-[var(--chery-dark)] hover:bg-[var(--chery-red)] text-white text-xs font-semibold py-2.5 px-3 transition-colors cursor-pointer"
          >
            Test Drive
          </button>
        </div>
      </div>
    </nav>
  );
}
