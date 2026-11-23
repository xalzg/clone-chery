import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  PhoneCall,
  Clock,
  ChevronDown,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Search,
  AlignLeft,
} from 'lucide-react';
import Container from '../ui/Container';
import MobileNavigation from './MobileNavigation';
import { DEALER_INFO } from '../../data/dealer';
import { FEATURED_VEHICLES } from '../../data/vehicles';
import { useModal } from '../../hooks/useModal';

function BrandLogo({ inverted = false, className = 'w-[130px] lg:w-[200px]' }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    return (
      <span
        className={`inline-block font-extrabold tracking-[0.2em] uppercase text-lg ${
          inverted ? 'text-white' : 'text-[#111111]'
        }`}
      >
        CHERY
      </span>
    );
  }

  return (
    <img
      src={inverted ? DEALER_INFO.logoWhite : DEALER_INFO.logoBlack}
      alt="Chery Dunia Karawaci"
      className={`${className} h-auto block object-contain`}
      onError={() => setImgFailed(true)}
    />
  );
}

function DealerSidebarDrawer({ isOpen, onClose, onOpenSearch, onOpenTestDrive }) {
  const drawerRef = useModal(isOpen, onClose);
  const [searchInput, setSearchInput] = useState('');

  if (!isOpen) return null;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onClose();
    onOpenSearch(searchInput.trim());
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80"
      style={{ animation: 'fade-in 0.25s ease-out' }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Informasi Dealer Chery Dunia Karawaci"
        tabIndex={-1}
        className="relative w-full max-w-[450px] bg-white h-full p-8 sm:p-10 shadow-2xl overflow-y-auto focus:outline-none flex flex-col justify-between"
      >
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="w-[45%] min-w-[140px]">
              <BrandLogo className="w-full" />
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup panel dealer"
              className="w-[38px] h-[38px] rounded-full bg-[var(--chery-dark)] hover:bg-[var(--chery-red)] text-white inline-flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8">
            <p className="text-[15px] text-[var(--chery-body-text)] leading-[1.8] text-justify">
              {DEALER_INFO.welcomeCopy}
            </p>
          </div>

          {/* Search Model inside Sidebar (keeps desktop navbar 1:1 clean while preserving search) */}
          <form
            onSubmit={handleSearchSubmit}
            className="mt-6 flex items-center border border-neutral-200 rounded-[10px] bg-[var(--chery-surface)] overflow-hidden"
          >
            <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Cari tipe mobil Chery..."
              aria-label="Cari tipe mobil Chery"
              className="flex-1 px-3.5 py-2.5 text-sm bg-transparent text-[#111111] focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Cari mobil"
              className="px-3.5 py-2.5 text-[#111111] hover:text-[var(--chery-red)] cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-7">
            <h4 className="text-[20px] font-semibold text-[#111111] mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li>
                <h6 className="text-[15px] font-semibold text-[#111111] mb-1">Email</h6>
                <a
                  href={`mailto:${DEALER_INFO.email}`}
                  className="inline-flex items-center gap-2 text-sm text-[var(--chery-body-text)] hover:text-[var(--chery-red)] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[var(--chery-red)] shrink-0" />
                  <span>{DEALER_INFO.email}</span>
                </a>
              </li>
              <li>
                <h6 className="text-[15px] font-semibold text-[#111111] mb-1">Phone</h6>
                <div className="space-y-1">
                  <a
                    href={DEALER_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--chery-body-text)] hover:text-[var(--chery-red)] transition-colors tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[var(--chery-red)] shrink-0" />
                    <span>{DEALER_INFO.whatsappDisplay}</span>
                  </a>
                  <a
                    href={DEALER_INFO.phoneHref}
                    className="flex items-center gap-2 text-xs text-[var(--chery-body-text)] hover:text-[var(--chery-red)] transition-colors tabular-nums pl-6"
                  >
                    <span>{DEALER_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </li>
              <li>
                <h6 className="text-[15px] font-semibold text-[#111111] mb-1">Address</h6>
                <p className="flex items-start gap-2 text-sm text-[var(--chery-body-text)] leading-relaxed">
                  <MapPin className="w-4 h-4 text-[var(--chery-red)] shrink-0 mt-1" />
                  <span>{DEALER_INFO.address}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-8 border-t border-black/10 space-y-2.5">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenTestDrive('');
            }}
            className="theme-btn w-full"
          >
            Booking Test Drive
          </button>
          <a
            href={DEALER_INFO.salesWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center rounded-full bg-[var(--chery-dark)] hover:bg-[var(--chery-red)] text-white text-sm font-medium py-3 px-5 transition-colors"
          >
            Hubungi Sales
          </a>
        </div>
      </aside>
    </div>
  );
}

export default function Header({ onOpenSearch, onOpenTestDrive }) {
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dealerDrawerOpen, setDealerDrawerOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isProductRoute = location.pathname.startsWith('/product/');

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 90);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const desktopLinkClass = ({ isActive }) =>
    `inline-block py-[28px] mr-[16px] xl:mr-[22px] text-[16px] xl:text-[17px] font-semibold transition-colors ${
      isActive ? 'text-[var(--chery-red)]' : 'text-[#111111] hover:text-[var(--chery-red)]'
    }`;

  return (
    <>
      <header className="w-full relative z-40">
        {/* Top Utility Contact Bar (Exact 1:1 match to .header-top) */}
        <div className="header-top">
          <Container>
            <div className="flex items-center justify-center">
              <ul className="flex items-center flex-wrap justify-center gap-6 text-[14px] xl:text-[15px]">
                <li>
                  <a
                    href={DEALER_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-[var(--chery-red)] transition-colors tabular-nums"
                  >
                    <PhoneCall className="w-4 h-4 text-[var(--chery-red)] shrink-0" />
                    <span>{DEALER_INFO.whatsappDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={DEALER_INFO.phoneHref}
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-[var(--chery-red)] transition-colors tabular-nums"
                  >
                    <PhoneCall className="w-4 h-4 text-[var(--chery-red)] shrink-0" />
                    <span>{DEALER_INFO.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center gap-2 text-white font-medium">
                    <Clock className="w-4 h-4 text-[var(--chery-red)] shrink-0" />
                    <span>{DEALER_INFO.hours}</span>
                  </span>
                </li>
              </ul>
            </div>
          </Container>
        </div>

        {isSticky && <div className="hidden lg:block h-[86px]" aria-hidden="true" />}

        {/* Main Navigation Bar (1:1 Desktop & Mobile Layout) */}
        <div className={`chery-navbar ${isSticky ? 'chery-navbar--sticky' : ''}`}>
          <Container>
            <div className="flex items-center justify-between h-[58px] lg:h-[86px]">
              <Link
                to="/"
                aria-label="Chery Dunia Karawaci Home"
                className="shrink-0 flex items-center"
              >
                <BrandLogo />
              </Link>

              {/* Desktop Navigation Menu (1:1 Exact 7 Items + Sidebar Button) */}
              <div className="hidden lg:flex items-center justify-end flex-1">
                <nav aria-label="Navigasi Utama" className="flex items-center">
                  <ul className="flex items-center">
                    <li>
                      <NavLink to="/" end className={desktopLinkClass}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/promo" className={desktopLinkClass}>
                        Promo
                      </NavLink>
                    </li>

                    {/* Tipe Mobil Dropdown -> Direct Links to /product/details/:slug */}
                    <li
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((v) => !v)}
                        aria-expanded={dropdownOpen}
                        className={`inline-flex items-center gap-1 py-[28px] mr-[16px] xl:mr-[22px] text-[16px] xl:text-[17px] font-semibold transition-colors cursor-pointer ${
                          isProductRoute
                            ? 'text-[var(--chery-red)]'
                            : 'text-[#111111] hover:text-[var(--chery-red)]'
                        }`}
                      >
                        <span>Tipe Mobil</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            dropdownOpen ? 'rotate-180 text-[var(--chery-red)]' : ''
                          }`}
                        />
                      </button>

                      {dropdownOpen && (
                        <ul className="absolute left-[-15px] top-full w-[225px] bg-white rounded-[8px] shadow-[var(--shadow-card)] border border-black/5 py-1.5 z-50">
                          {FEATURED_VEHICLES.map((car) => (
                            <li
                              key={car.id}
                              className="border-b border-black/[0.08] last:border-b-0"
                            >
                              <Link
                                to={`/product/details/${car.id}`}
                                onClick={() => setDropdownOpen(false)}
                                className="chery-dropdown-item block w-full text-left px-6 py-2.5 text-[15px] font-medium text-[#111111]"
                              >
                                {car.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>

                    <li>
                      <NavLink to="/harga-mobil-chery" className={desktopLinkClass}>
                        Harga
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/artikel" className={desktopLinkClass}>
                        Artikel
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/galeri" className={desktopLinkClass}>
                        Galeri
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/kontak"
                        className={({ isActive }) =>
                          `inline-block py-[28px] text-[16px] xl:text-[17px] font-semibold transition-colors ${
                            isActive
                              ? 'text-[var(--chery-red)]'
                              : 'text-[#111111] hover:text-[var(--chery-red)]'
                          }`
                        }
                      >
                        Kontak
                      </NavLink>
                    </li>
                  </ul>
                </nav>

                {/* Right Sidebar Info Trigger (1:1 fa-bars-sort staggered left-aligned bars) */}
                <div className="flex items-center ml-[30px] xl:ml-[45px]">
                  <button
                    type="button"
                    onClick={() => setDealerDrawerOpen(true)}
                    aria-label="Buka sidebar information"
                    className="p-1.5 text-[#111111] hover:text-[var(--chery-red)] transition-colors cursor-pointer"
                  >
                    <AlignLeft className="w-7 h-7" strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Mobile Controls (Exact 1:1 Single Hamburger Icon on right) */}
              <div className="flex lg:hidden items-center">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((v) => !v)}
                  aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
                  aria-expanded={mobileMenuOpen}
                  className="p-2 text-[#111111] hover:text-[var(--chery-red)] transition-colors cursor-pointer"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </Container>

          <MobileNavigation
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenSearch={onOpenSearch}
            onOpenTestDrive={onOpenTestDrive}
          />
        </div>
      </header>

      <DealerSidebarDrawer
        isOpen={dealerDrawerOpen}
        onClose={() => setDealerDrawerOpen(false)}
        onOpenSearch={onOpenSearch}
        onOpenTestDrive={onOpenTestDrive}
      />
    </>
  );
}
