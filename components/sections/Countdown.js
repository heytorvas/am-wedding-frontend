import { useState, useEffect } from 'react';
import { weddingConfig } from '../../lib/config';

export default function Countdown() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const weddingDateTime = new Date(weddingConfig.wedding.datetime);
      const now = new Date();
      const timeDifference = weddingDateTime - now;

      if (timeDifference <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[var(--background-color)] py-12 px-6">
      <div className="text-center mx-auto max-w-sm">
        <h2 className="text-3xl font-bold text-[var(--primary-color)]">Até Dizermos "Sim"</h2>
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-8 text-[var(--text-primary)] max-w-xs mx-auto">
          <div className="text-center p-2 sm:p-3 bg-white rounded-lg shadow-md h-18 sm:h-20 flex flex-col justify-center">
            <span className="text-xl sm:text-2xl font-bold leading-tight">
              {countdown.days.toString().padStart(2, '0')}
            </span>
            <span className="block text-xs text-[var(--text-secondary)] leading-tight mt-1">Dias</span>
          </div>
          <div className="text-center p-2 sm:p-3 bg-white rounded-lg shadow-md h-18 sm:h-20 flex flex-col justify-center">
            <span className="text-xl sm:text-2xl font-bold leading-tight">
              {countdown.hours.toString().padStart(2, '0')}
            </span>
            <span className="block text-xs text-[var(--text-secondary)] leading-tight mt-1">Horas</span>
          </div>
          <div className="text-center p-2 sm:p-3 bg-white rounded-lg shadow-md h-18 sm:h-20 flex flex-col justify-center">
            <span className="text-xl sm:text-2xl font-bold leading-tight">
              {countdown.minutes.toString().padStart(2, '0')}
            </span>
            <span className="block text-xs text-[var(--text-secondary)] leading-tight mt-1">Minutos</span>
          </div>
          <div className="text-center p-2 sm:p-3 bg-white rounded-lg shadow-md h-18 sm:h-20 flex flex-col justify-center">
            <span className="text-xl sm:text-2xl font-bold leading-tight">
              {countdown.seconds.toString().padStart(2, '0')}
            </span>
            <span className="block text-xs text-[var(--text-secondary)] leading-tight mt-1">Seg</span>
          </div>
        </div>
      </div>
    </section>
  );
}
