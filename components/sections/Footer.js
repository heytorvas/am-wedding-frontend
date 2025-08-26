import { weddingConfig } from '../../lib/config';

export default function Footer() {
  return (
    <footer className="bg-[var(--background-color)] mt-16 pb-8 text-center text-[var(--text-secondary)]">
      <p className="font-['Playfair_Display'] text-2xl text-[var(--primary-color)] mb-2">
        {weddingConfig.couple.fullNames}
      </p>
      <p className="mt-4 text-xs">© 2025 <b><a href="https://heytor.dev" target="_blank" rel="noopener noreferrer">heytor.dev</a></b>. Todos os direitos reservados.</p>
    </footer>
  );
}
