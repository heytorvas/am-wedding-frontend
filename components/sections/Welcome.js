import { weddingConfig } from '../../lib/config';

export default function Welcome({ onRSVPClick }) {
  return (
    <div className="bg-[var(--background-color)] px-6 py-10 text-center -mt-8 relative z-20 rounded-t-3xl">
      <p className="text-[var(--text-secondary)] text-lg font-medium tracking-widest uppercase">
        {weddingConfig.wedding.displayDate}
      </p>
      <p className="text-[var(--text-primary)] text-lg leading-relaxed max-w-xl mx-auto mt-6">
        {weddingConfig.texts.welcomeMessage}
      </p>
      <div className="flex justify-center mt-8">
        <button
          onClick={onRSVPClick}
          className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[var(--primary-color)] text-white text-base font-medium tracking-wide shadow-lg hover:bg-opacity-90 transition-colors"
        >
          <span className="truncate">RSVP</span>
        </button>
      </div>
    </div>
  );
}
