import { weddingConfig } from '../../lib/config';
import Image from 'next/image';

export default function Venue() {
  return (
    <main id="localizacao">
      <div className="mx-4 mt-2 overflow-hidden rounded-lg">
        <Image 
          alt="Vista panorâmica do local do casamento" 
          className="h-56 w-full object-cover"
          src={weddingConfig.location.venueImage}
          width={400}
          height={224}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Recepção</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          {weddingConfig.texts.ceremonyDescription}
        </p>
      </div>
      <div className="px-6 pb-6">
        <div className="space-y-4 rounded-lg border border-[var(--accent-color)]/50 bg-white/50 p-4 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-color)]/20 text-[var(--secondary-color)]">
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                <rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--text-primary)]">{weddingConfig.wedding.displayDateOnly}</p>
              <p className="text-sm text-[var(--text-secondary)]">Data</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-color)]/20 text-[var(--secondary-color)]">
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--text-primary)]">18:30</p>
              <p className="text-sm text-[var(--text-secondary)]">Horário</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-color)]/20 text-[var(--secondary-color)]">
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--text-primary)]">{weddingConfig.location.venue}</p>
              <p className="text-sm text-[var(--text-secondary)]">{weddingConfig.location.address}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 mb-6 overflow-hidden rounded-lg">
        <iframe
          src={weddingConfig.location.googleMapsUrl}
          className="aspect-video w-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do casamento no Google Maps"
        ></iframe>
      </div>
    </main>
  );
}
