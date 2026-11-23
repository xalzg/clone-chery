import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container';
import PageBreadcrumb from '../components/ui/PageBreadcrumb';
import { DEALER_INFO } from '../data/dealer';
import { PAGES_CONTENT } from '../data/pagesContent';

export default function KontakPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.phone.trim()) {
      setError('Mohon lengkapi Nama, Email, Subjek, dan No Telepon Anda.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <>
      <PageBreadcrumb
        title="Kontak"
        currentLabel="Kontak"
        desktopBg={PAGES_CONTENT.breadcrumbs.kontak}
      />

      <section className="w-full bg-[var(--chery-surface)] py-[72px] sm:py-[110px]">
        <Container>
          {/* 3 Elevated Contact Info Cards (Exact match to /kontak) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="contact-info-card">
              <div className="w-[70px] h-[70px] rounded-full bg-[var(--chery-red)] text-white flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-[20px] font-bold text-[#111111]">No. Telp</h3>
              <a
                href={DEALER_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-[var(--chery-body-text)] hover:text-[var(--chery-red)] tabular-nums"
              >
                {DEALER_INFO.whatsappDisplay}
              </a>
            </div>

            <div className="contact-info-card">
              <div className="w-[70px] h-[70px] rounded-full bg-[var(--chery-red)] text-white flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-[20px] font-bold text-[#111111]">Email</h3>
              <a
                href={`mailto:${DEALER_INFO.email}`}
                className="text-[15px] text-[var(--chery-body-text)] hover:text-[var(--chery-red)] break-all"
              >
                {DEALER_INFO.email}
              </a>
            </div>

            <div className="contact-info-card">
              <div className="w-[70px] h-[70px] rounded-full bg-[var(--chery-red)] text-white flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-[20px] font-bold text-[#111111]">Jam Buka</h3>
              <div className="text-[14px] text-[var(--chery-body-text)] space-y-0.5">
                <p>Senin - Sabtu (08:30 - 17:30)</p>
                <p>Minggu (08:30 - 15:30)</p>
              </div>
            </div>
          </div>

          {/* 2-Col Showroom Image + Kirim Pesan Form */}
          <div className="bg-white rounded-[10px] p-6 sm:p-8 shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <img
                  src={PAGES_CONTENT.contactImage}
                  alt="Showroom Dealer Chery Dunia Karawaci"
                  className="w-full rounded-[10px] block object-cover"
                />
              </div>

              <div className="lg:col-span-6">
                <h2 className="text-[26px] sm:text-[30px] font-bold text-[#111111] mb-6">
                  Kirim Pesan
                </h2>

                {submitted ? (
                  <div className="p-5 rounded-[10px] bg-emerald-50 border border-emerald-200 text-sm text-emerald-900 space-y-3">
                    <div className="flex items-center gap-2 font-bold">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Pesan Anda Siap Diteruskan</span>
                    </div>
                    <p>
                      Terima kasih <strong>{form.name}</strong>. Untuk respons tercepat dari tim
                      Chery Dunia Karawaci, Anda dapat meneruskan pesan ini langsung ke WhatsApp resmi kami.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`https://api.whatsapp.com/send?phone=${DEALER_INFO.salesWhatsappNumber}&text=${encodeURIComponent(
                          `Halo Chery Dunia Karawaci, saya ${form.name} (${form.phone} / ${form.email}). Subjek: ${form.subject}. Pesan: ${form.message}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-btn !py-2.5"
                      >
                        Kirim via WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: '', email: '', subject: '', phone: '', message: '' });
                        }}
                        className="theme-btn-white !py-2"
                      >
                        Tulis Pesan Baru
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Nama Lengkap"
                        aria-label="Nama Lengkap"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-12 px-4 rounded-[8px] border border-[#dddddd] text-sm text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-[8px] border border-[#dddddd] text-sm text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Subjek"
                        aria-label="Subjek"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full h-12 px-4 rounded-[8px] border border-[#dddddd] text-sm text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
                      />
                      <input
                        type="tel"
                        inputMode="numeric"
                        placeholder="No Telepon"
                        aria-label="No Telepon"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value.replace(/[^\d]/g, '') })
                        }
                        className="w-full h-12 px-4 rounded-[8px] border border-[#dddddd] text-sm text-[#111111] focus:outline-none focus:border-[var(--chery-red)] tabular-nums"
                      />
                    </div>
                    <textarea
                      rows={5}
                      placeholder="Tulis pesan anda"
                      aria-label="Tulis pesan anda"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-4 rounded-[8px] border border-[#dddddd] text-sm text-[#111111] focus:outline-none focus:border-[var(--chery-red)]"
                    />
                    {error && (
                      <p role="alert" className="text-xs font-medium text-[var(--chery-red)]">
                        {error}
                      </p>
                    )}
                    <button type="submit" className="theme-btn !px-8">
                      <Send className="w-4 h-4" />
                      <span>Kirim</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
