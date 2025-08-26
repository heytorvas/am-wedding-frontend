import { useState, useEffect } from 'react';
import { weddingConfig } from '../../lib/config';
import { apiClient } from '../../lib/api';
import Image from 'next/image';

export default function Wishlist() {
  const [gifts, setGifts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showDonationPopup, setShowDonationPopup] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);
  const [donorName, setDonorName] = useState('');
  const [isDonating, setIsDonating] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const fetchGifts = async (page = 1, append = false) => {
    setLoading(true);
    try {
      const response = await apiClient.getGifts(page, 6);
      if (response.ok) {
        const data = await response.json();
        if (append) {
          setGifts(prev => [...prev, ...data]);
        } else {
          setGifts(data);
        }
        setHasMore(data.length === 6);
      } else {
        console.error('Failed to fetch gifts');
      }
    } catch (error) {
      console.error('Error fetching gifts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGifts();
  }, []);

  const handleShowMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchGifts(nextPage, true);
  };

  const handleGiftClick = (gift) => {
    setSelectedGift(gift);
    setShowDonationPopup(true);
  };

  const handleDonation = async (e) => {
    e.preventDefault();
    if (!donorName.trim()) {
      setConfirmationMessage('Por favor, digite seu nome completo.');
      setShowConfirmationPopup(true);
      return;
    }

    setIsDonating(true);
    
    try {
      const response = await apiClient.markGiftPurchased(selectedGift.id, donorName.trim());
      
      if (response.ok) {
        setConfirmationMessage('Obrigado pela sua doação! O presente foi marcado como adquirido.');
        setShowDonationPopup(false);
        setDonorName('');
        setSelectedGift(null);
        setShowConfirmationPopup(true);
        // Refresh the gifts list
        fetchGifts();
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        setConfirmationMessage(`Erro ao processar doação: ${errorData.detail || errorData.message || 'Erro desconhecido'}`);
        setShowConfirmationPopup(true);
      }
    } catch (error) {
      setConfirmationMessage('Erro ao conectar com o servidor. Tente novamente.');
      setShowConfirmationPopup(true);
      console.error('Error processing donation:', error);
    } finally {
      setIsDonating(false);
    }
  };

  return (
    <main className="p-6">
      {/* Donation Popup */}
      {showDonationPopup && selectedGift && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 text-center">Doar Presente</h3>
            <div className="mb-4 text-center">
              <Image 
                src={selectedGift.image_url} 
                alt={selectedGift.name}
                className="w-24 h-24 object-cover rounded-lg mx-auto mb-2"
                width={96}
                height={96}
              />
              <p className="text-[var(--text-secondary)]">{selectedGift.name}</p>
            </div>
            <form onSubmit={handleDonation}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full p-3 border border-[var(--primary-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowDonationPopup(false);
                    setDonorName('');
                    setSelectedGift(null);
                  }}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isDonating}
                  className="flex-1 bg-[var(--primary-color)] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50"
                >
                  {isDonating ? 'Processando...' : 'Confirmar Doação'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="text-center">
        <h2 className="font-serif text-4xl font-bold text-[var(--primary-color)]">Nossa Lista de Desejos</h2>
        <p className="mt-4 text-base text-[var(--text-secondary)]">Escolha um presente especial para nos ajudar a começar nossa nova vida juntos</p>
      </div>
      
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6">
        {gifts.map((gift) => (
          <div 
            key={gift.id} 
            className="group cursor-pointer"
            onClick={() => handleGiftClick(gift)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image 
                alt={gift.name}
                className="h-auto w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
                src={gift.image_url}
                width={200}
                height={200}
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <h3 className="mt-3 text-base font-medium text-[var(--primary-color)]">{gift.name}</h3>
          </div>
        ))}
      </div>
      
      {hasMore && (
        <div className="mt-8 text-center">
          <button 
            onClick={handleShowMore}
            disabled={loading}
            className="rounded-full bg-[var(--primary-color)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-opacity-90 disabled:opacity-50"
          >
            {loading ? 'Carregando...' : 'Mostrar Mais'}
          </button>
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirmationPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {confirmationMessage.includes('Erro') ? 'Ops!' : 'Sucesso!'}
              </h3>
              <p className="mb-6 text-gray-600">{confirmationMessage}</p>
              <button
                onClick={() => setShowConfirmationPopup(false)}
                className="w-full rounded-lg bg-[var(--primary-color)] px-4 py-2 text-white hover:bg-opacity-90 transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
