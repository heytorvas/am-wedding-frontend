import { useState, forwardRef } from 'react';
import { weddingConfig } from '../../lib/config';
import { apiClient } from '../../lib/api';

const RSVP = forwardRef(function RSVP(props, ref) {
  const [companions, setCompanions] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    status: '',
    testimonial: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState('');
  const [isSubmittingTestimonial, setIsSubmittingTestimonial] = useState(false);

  const addCompanion = () => {
    if (companions.length < 5) {
      setCompanions([...companions, { full_name: '', person: 'adult' }]);
    }
  };

  const removeCompanion = (index) => {
    setCompanions(companions.filter((_, i) => i !== index));
  };

  const updateCompanion = (index, field, value) => {
    const updatedCompanions = companions.map((companion, i) =>
      i === index ? { ...companion, [field]: value } : companion
    );
    setCompanions(updatedCompanions);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phoneNumber') {
      // Remove all non-digits
      const digits = value.replace(/\D/g, '');
      
      // Apply mask (11) 12345-6789
      let maskedValue = '';
      if (digits.length > 0) {
        maskedValue = '(';
        maskedValue += digits.substring(0, 2);
        if (digits.length > 2) {
          maskedValue += ') ';
          maskedValue += digits.substring(2, 7);
          if (digits.length > 7) {
            maskedValue += '-';
            maskedValue += digits.substring(7, 11);
          }
        }
      }
      
      setFormData(prev => ({ ...prev, [name]: maskedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.phoneNumber || !formData.status) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Full name validation (at least two words)
    const nameWords = formData.fullName.trim().split(' ').filter(word => word.length > 0);
    if (nameWords.length < 2) {
      alert('Por favor, digite seu nome completo (nome e sobrenome).');
      return;
    }
    
    // Phone number validation (exactly 11 digits)
    const phoneDigits = formData.phoneNumber.replace(/\D/g, '');
    if (phoneDigits.length !== 11) {
      alert('Por favor, digite um número de telefone válido com 11 dígitos.');
      return;
    }

    setIsSubmitting(true);

    const rsvpPayload = {
      full_name: formData.fullName,
      status: formData.status === 'attending' ? 'confirmed' : 'declined',
      phone: formData.phoneNumber.replace(/\D/g, ''),
      companions: companions.filter(companion => companion.full_name.trim() !== '')
    };

    try {
      const response = await apiClient.submitRSVP(rsvpPayload);

      if (response.ok) {
        setSubmittedStatus(formData.status);
        setShowSuccessPopup(true);
        // Send testimonial separately if provided
        if (formData.testimonial.trim()) {
          setIsSubmittingTestimonial(true);
          try {
            const testimonialResponse = await apiClient.submitTestimonial({
              full_name: formData.fullName,
              message: formData.testimonial.trim()
            });
            
            if (!testimonialResponse.ok) {
              console.error('Failed to submit testimonial');
            }
          } catch (testimonialError) {
            console.error('Error submitting testimonial:', testimonError);
          } finally {
            setIsSubmittingTestimonial(false);
          }
        }
        
        // Reset form
        setFormData({
          fullName: '',
          phoneNumber: '',
          status: '',
          testimonial: ''
        });
        setCompanions([]);
      } else {
        const errorData = await response.json();
        alert(`Erro ao enviar RSVP: ${errorData.detail || 'Erro desconhecido'}`);
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor. Tente novamente.');
      console.error('Error submitting RSVP:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={ref} className="relative flex min-h-[20vh] flex-col bg-[var(--background-color)] justify-between group/design-root overflow-x-hidden mx-auto max-w-[480px]">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {submittedStatus === 'not-attending' ? 'RSVP Recebido!' : 'RSVP Confirmado!'}
            </h3>
            <p className="text-[var(--text-secondary)] mb-4">
              {submittedStatus === 'not-attending'
                ? 'Obrigado por nos informar. Sentiremos sua falta, mas compreendemos.'
                : 'Obrigado por confirmar sua presença. Estamos ansiosos para celebrar com você!'
              }
            </p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-[var(--primary-color)] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-6 p-6">
        <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] text-center">Você estará lá?</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--text-secondary)]" htmlFor="fullName">Nome Completo</label>
            <input
              className="form-input w-full rounded-lg border border-[var(--primary-color)] p-4 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Digite seu nome completo"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--text-secondary)]" htmlFor="phoneNumber">Número de Telefone</label>
            <input
              className="form-input w-full rounded-lg border border-[var(--primary-color)] p-4 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Digite seu número de telefone"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--text-secondary)]" htmlFor="phoneNumber">Mensagem para o Casal (Opcional)</label>
            <textarea
              className="form-input w-full rounded-lg border border-[var(--primary-color)] p-4 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] min-h-[100px] resize-vertical"
              id="testimonial"
              name="testimonial"
              value={formData.testimonial}
              onChange={handleInputChange}
              placeholder="Compartilhe seus votos de felicidade para o casal..."
              rows="4"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[var(--text-secondary)] text-center">Você irá comparecer?</span>
            <div className="grid grid-cols-2 gap-3">
              <label className={`flex cursor-pointer items-center justify-center rounded-lg border border-[var(--primary-color)] p-4 transition-colors duration-200 min-w-0 ${
                formData.status === 'attending' 
                  ? 'bg-[var(--primary-color)] text-white' 
                  : 'bg-white text-[var(--primary-color)]'
              }`}>
                <input
                  className="sr-only"
                  name="status"
                  type="radio"
                  value="attending"
                  checked={formData.status === 'attending'}
                  onChange={handleInputChange}
                />
                <span className="text-center">Estarei lá</span>
              </label>
              <label className={`flex cursor-pointer items-center justify-center rounded-lg border border-[var(--primary-color)] p-4 transition-colors duration-200 min-w-0 ${
                formData.status === 'not-attending' 
                  ? 'bg-[var(--primary-color)] text-white' 
                  : 'bg-white text-[var(--primary-color)]'
              }`}>
                <input
                  className="sr-only"
                  name="status"
                  type="radio"
                  value="not-attending"
                  checked={formData.status === 'not-attending'}
                  onChange={handleInputChange}
                />
                <span className="text-center">Não posso ir</span>
              </label>
            </div>
          </div>

          {/* Companions Section */}
          {formData.status === 'attending' && (
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] text-center">Acompanhantes</h3>
            {companions.map((companion, index) => (
              <div key={index} className="space-y-4 rounded-lg border border-[var(--primary-color)] bg-white p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-[var(--text-secondary)]">Acompanhante {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeCompanion(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Nome do Acompanhante</label>
                  <input
                    className="form-input w-full rounded-lg border border-[var(--primary-color)] p-4 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    value={companion.full_name}
                    onChange={(e) => updateCompanion(index, 'full_name', e.target.value)}
                    placeholder="Nome completo do acompanhante"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[var(--text-secondary)]">Tipo de Pessoa</span>
                  <div className="flex gap-3">
                    <label className="flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-[var(--primary-color)] bg-white p-4 text-[var(--primary-color)] has-[:checked]:bg-[var(--primary-color)] has-[:checked]:text-white transition-colors duration-200">
                      <input
                        className="sr-only"
                        type="radio"
                        value="adult"
                        checked={companion.person === 'adult'}
                        onChange={(e) => updateCompanion(index, 'person', e.target.value)}
                      />
                      <span>Adulto</span>
                    </label>
                    <label className="flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-[var(--primary-color)] bg-white p-4 text-[var(--primary-color)] has-[:checked]:bg-[var(--primary-color)] has-[:checked]:text-white transition-colors duration-200">
                      <input
                        className="sr-only"
                        type="radio"
                        value="child"
                        checked={companion.person === 'child'}
                        onChange={(e) => updateCompanion(index, 'person', e.target.value)}
                      />
                      <span>Criança</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}

            {companions.length < 5 && formData.status !== 'not-attending' && (
              <button
                type="button"
                onClick={addCompanion}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-dashed border-[var(--primary-color)] text-[var(--primary-color)] hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] p-4 text-sm font-bold transition-colors"
              >
                <svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span>Adicionar Acompanhante ({companions.length}/5)</span>
              </button>
            )}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || isSubmittingTestimonial}
            className="w-full cursor-pointer rounded-full bg-[var(--primary-color)] p-4 text-base font-bold text-white shadow-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando RSVP...' : isSubmittingTestimonial ? 'Enviando Mensagem...' : 'Enviar RSVP'}
          </button>
        </form>
      </div>
    </div>
  );
});

export default RSVP;
