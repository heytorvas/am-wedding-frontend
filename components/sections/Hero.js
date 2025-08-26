import { weddingConfig } from '../../lib/config';
import Image from 'next/image';

export default function Hero({ onRSVPClick }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image 
          alt="Folhas e folhagens verdes" 
          className="h-full w-full object-cover"
          src={weddingConfig.hero.backgroundImage}
          fill
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-color)] to-transparent"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] pt-24 pb-12 px-4 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight">
          {weddingConfig.couple.fullNames}
        </h1>
        <p className="text-white text-lg mt-2">{weddingConfig.hero.subtitle}</p>
      </div>
    </div>
  );
}
