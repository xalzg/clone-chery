import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import PageBreadcrumb from '../components/ui/PageBreadcrumb';
import SectionHeading from '../components/ui/SectionHeading';
import { FULL_PRICELIST } from '../data/vehicles';
import { PAGES_CONTENT } from '../data/pagesContent';
import { formatNumber } from '../utils/currency';

const MODEL_SLUG_MAP = {
  'Tiggo Cross CSH': 'tiggo-cross-csh',
  'Chery C5': 'chery-c5',
  'Tiggo 8': 'tiggo-8',
  'Tiggo Cross': 'tiggo-cross',
  'Chery E5': 'chery-e5',
  J6: 'chery-j6',
};

export default function HargaPage() {
  return (
    <>
      <PageBreadcrumb
        title="Harga"
        currentLabel="Harga"
        desktopBg={PAGES_CONTENT.breadcrumbs.harga}
      />

      <section className="w-full bg-white py-[72px] sm:py-[110px]">
        <Container>
          <div className="text-center">
            <span className="inline-block text-[15px] font-bold uppercase tracking-[4px] text-[var(--chery-red)] mb-2">
              Harga
            </span>
            <SectionHeading title="Harga Mobil" accent="Chery" showDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FULL_PRICELIST.map((group) => {
              const detailSlug = MODEL_SLUG_MAP[group.model];
              return (
                <div key={group.model} className="pricing-item flex flex-col">
                  <div className="mb-5">
                    <div className="rounded-[10px] overflow-hidden mb-5 bg-neutral-100">
                      <img
                        src={group.image}
                        alt={group.model}
                        loading="lazy"
                        className="w-full aspect-[16/10] object-cover block rounded-[10px]"
                      />
                    </div>
                    <h3 className="text-[22px] font-bold text-[#111111]">
                      {detailSlug ? (
                        <Link
                          to={`/product/details/${detailSlug}`}
                          className="text-[#111111] hover:text-[var(--chery-red)] transition-colors"
                        >
                          {group.model}
                        </Link>
                      ) : (
                        group.model
                      )}
                    </h3>
                  </div>

                  <div className="flex-1">
                    <table className="w-full border-collapse border border-[#dee2e6] text-[14px]">
                      <thead>
                        <tr className="bg-[var(--chery-surface)] text-[#111111]">
                          <th className="border border-[#dee2e6] px-3 py-2 text-left font-semibold">
                            Type
                          </th>
                          <th className="border border-[#dee2e6] px-3 py-2 text-right font-semibold">
                            Harga
                          </th>
                        </tr>
                      </thead>
                      <tbody className="tabular-nums text-[#333333]">
                        {group.rows.map((row) => (
                          <tr key={row.type}>
                            <td className="border border-[#dee2e6] px-3 py-2">{row.type}</td>
                            <td className="border border-[#dee2e6] px-3 py-2 text-right font-medium">
                              {formatNumber(row.price)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
