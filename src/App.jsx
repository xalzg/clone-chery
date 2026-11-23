import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ui/ErrorBoundary';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import PromoPage from './pages/PromoPage';
import PromoDetailPage from './pages/PromoDetailPage';
import HargaPage from './pages/HargaPage';
import ArtikelPage from './pages/ArtikelPage';
import GaleriPage from './pages/GaleriPage';
import KontakPage from './pages/KontakPage';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/details/:slug" element={<ProductDetailPage />} />
            <Route path="/promo" element={<PromoPage />} />
            <Route path="/promo/detail/:slug" element={<PromoDetailPage />} />
            <Route path="/harga-mobil-chery" element={<HargaPage />} />
            <Route path="/artikel" element={<ArtikelPage />} />
            <Route path="/galeri" element={<GaleriPage />} />
            <Route path="/kontak" element={<KontakPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
