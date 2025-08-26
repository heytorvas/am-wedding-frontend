import { useState, useEffect } from 'react';
import { apiClient } from '../../lib/api';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchTestimonials = async (page = 1, append = false) => {
    setLoading(true);
    try {
      const response = await apiClient.getTestimonials(page, 6);
      if (response.ok) {
        const data = await response.json();
        if (append) {
          setTestimonials(prev => [...prev, ...data]);
        } else {
          setTestimonials(data);
        }
        setHasMore(data.length === 6);
      } else {
        console.error('Failed to fetch testimonials');
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleShowMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchTestimonials(nextPage, true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-[var(--secondary-color)]/20 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[var(--primary-color)]">Votos de Felicidade</h2>
        <p className="text-[var(--text-secondary)] mt-2">Palavras gentis de nossos entes queridos.</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-8 px-4">
        {testimonials.length === 0 && !loading ? (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)] text-lg">Ainda não há mensagens de felicidade.</p>
            <p className="text-[var(--text-secondary)] text-sm mt-2">Seja o primeiro a enviar seus votos para o casal!</p>
          </div>
        ) : (
          testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-[var(--text-primary)] italic">"{testimonial.message}"</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-[var(--text-secondary)] font-semibold">- {testimonial.full_name}</p>
                <p className="text-[var(--text-secondary)] text-sm">{formatDate(testimonial.created_at)}</p>
              </div>
            </div>
          ))
        )}
      </div>
      
      {hasMore && (
        <div className="text-center mt-8">
          <button 
            onClick={handleShowMore}
            disabled={loading}
            className="rounded-full bg-[var(--primary-color)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-opacity-90 disabled:opacity-50"
          >
            {loading ? 'Carregando...' : 'Mostrar Mais'}
          </button>
        </div>
      )}
    </section>
  );
}
