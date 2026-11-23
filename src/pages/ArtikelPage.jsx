import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { PAGES_CONTENT } from '../data/pagesContent';

export default function ArtikelPage() {
  return (
    <section className="w-full bg-white pt-[96px] lg:pt-[56px] pb-[90px] sm:pb-[120px]">
      <Container>
        <SectionHeading title="Artikel" showDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAGES_CONTENT.articles.map((article) => (
            <article key={article.slug} className="blog-item flex flex-col">
              <a
                href={article.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-item-img block mb-4"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover block"
                />
              </a>

              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-[18px] font-bold text-[#111111] leading-snug mb-4">
                  <a
                    href={article.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111111] hover:text-[var(--chery-red)] transition-colors"
                  >
                    {article.title}
                  </a>
                </h3>

                <div>
                  <a
                    href={article.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn !py-2.5 !px-5"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
