import React from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Users, Eye } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { FEATURED_VEHICLES } from '../../data/vehicles';

export default function VehicleCatalog() {
  return (
    <div id="models-section">
      <SectionHeading
        title="Mobil Terbaru"
        accent="Chery"
        showDivider
        lightSurface
      />

      {/* Exact 3-column Desktop / 2-column Tablet / 1-column Mobile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_VEHICLES.map((car) => {
          const detailPath = `/product/details/${car.id}`;
          return (
            <article key={car.id} className="car-item flex flex-col">
              {/* Rounded Vehicle Image with Hover Zoom */}
              <Link
                to={detailPath}
                aria-label={`Lihat detail ${car.name}`}
                className="car-img aspect-[16/10] bg-neutral-100 block"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = car.fallback;
                  }}
                  className="w-full h-full object-cover object-center block"
                />
              </Link>

              {/* Card Content */}
              <div className="px-2.5 pt-3 pb-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] font-semibold text-[#333333]">
                    <Link
                      to={detailPath}
                      className="text-[#333333] hover:text-[var(--chery-red)] transition-colors"
                    >
                      {car.name}
                    </Link>
                  </h3>

                  <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-[#333333]">
                    <li className="inline-flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-[var(--chery-red)] shrink-0" />
                      <span>Vehicle Type : {car.vehicleType}</span>
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[var(--chery-red)] shrink-0" />
                      <span>
                        {car.doors} Doors, {car.seats} Seats
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Car Footer: Price (Red #bf3136) + Details Pill Link */}
                <div className="mt-4 pt-4 border-t border-black/10 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[12px] text-[#333333] font-normal leading-tight">
                      Harga mulai dari
                    </p>
                    <p className="text-[18px] xl:text-[19px] font-semibold text-[var(--chery-red)] tabular-nums leading-snug mt-0.5">
                      {car.priceDisplay}
                    </p>
                  </div>

                  <Link
                    to={detailPath}
                    className="theme-btn !py-[6px] !px-[14px] !text-[13px] shrink-0"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
