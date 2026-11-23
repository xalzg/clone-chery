import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollTopButton from '../ui/ScrollTopButton';
import ChatWidget from '../overlays/ChatWidget';
import SimulationResultModal from '../overlays/SimulationResultModal';
import SearchModal from '../overlays/SearchModal';
import TestDriveModal from '../overlays/TestDriveModal';
import VideoModal from '../overlays/VideoModal';
import VehicleDetailModal from '../overlays/VehicleDetailModal';
import { PRODUCT_DETAILS } from '../../data/productDetails';

export default function SiteLayout() {
  const [searchState, setSearchState] = useState({ open: false, query: '' });
  const [testDriveState, setTestDriveState] = useState({ open: false, model: '' });
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [simulationResult, setSimulationResult] = useState(null);
  const [modalVehicle, setModalVehicle] = useState(null);
  const [preselectedSimVariant, setPreselectedSimVariant] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top or hash element on navigation
  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.replace('#', ''));
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 80);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);

  const handleSelectVehicleFromSearch = (car) => {
    if (PRODUCT_DETAILS[car.id]) {
      navigate(`/product/details/${car.id}`);
    } else {
      setModalVehicle(car);
    }
  };

  const scrollToSimulation = (variantLabel = '') => {
    setModalVehicle(null);
    if (variantLabel) setPreselectedSimVariant(variantLabel);
    if (location.pathname !== '/') {
      navigate('/#simulasi-section');
    } else {
      const el = document.getElementById('simulasi-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-[var(--chery-body-text)] overflow-x-hidden flex flex-col">
      <Header
        onOpenSearch={(q) => setSearchState({ open: true, query: q || '' })}
        onOpenTestDrive={(model) => setTestDriveState({ open: true, model: model || '' })}
      />

      <main className="w-full flex-1">
        <Outlet
          context={{
            preselectedSimVariant,
            onSimulationReady: (result) => setSimulationResult(result),
            onSelectVideo: (video) => setSelectedVideo(video),
            onOpenTestDrive: (model) => setTestDriveState({ open: true, model: model || '' }),
          }}
        />
      </main>

      <Footer />
      <ChatWidget />
      <ScrollTopButton />

      <SimulationResultModal
        result={simulationResult}
        onClose={() => setSimulationResult(null)}
        onBookTestDrive={(model) => setTestDriveState({ open: true, model })}
        onRepeatSimulation={() => scrollToSimulation()}
      />

      <SearchModal
        isOpen={searchState.open}
        initialQuery={searchState.query}
        onClose={() => setSearchState({ open: false, query: '' })}
        onSelectVehicle={handleSelectVehicleFromSearch}
      />

      <TestDriveModal
        isOpen={testDriveState.open}
        initialModel={testDriveState.model}
        onClose={() => setTestDriveState({ open: false, model: '' })}
      />

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <VehicleDetailModal
        vehicle={modalVehicle}
        onClose={() => setModalVehicle(null)}
        onSimulate={(variant) => scrollToSimulation(variant)}
        onTestDrive={(model) => {
          setModalVehicle(null);
          setTestDriveState({ open: true, model });
        }}
      />
    </div>
  );
}
