const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const API_USERNAME = process.env.NEXT_PUBLIC_API_USERNAME;
const API_PASSWORD = process.env.NEXT_PUBLIC_API_PASSWORD;

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.authHeader = this.getAuthHeader();
  }

  getAuthHeader() {
    if (API_USERNAME && API_PASSWORD) {
      const credentials = btoa(`${API_USERNAME}:${API_PASSWORD}`);
      return `Basic ${credentials}`;
    }
    return null;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    
    if (this.authHeader) {
      headers.Authorization = this.authHeader;
    }
    
    const config = {
      headers,
      ...options,
    };

    try {
      const response = await fetch(url, config);
      return response;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    return this.request(url, { method: 'GET' });
  }

  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async patch(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // Wedding-specific API methods
  async submitRSVP(rsvpData) {
    return this.post('/rsvp', rsvpData);
  }

  async submitTestimonial(testimonialData) {
    return this.post('/testimonials', testimonialData);
  }

  async getGifts(page = 1, limit = 6) {
    return this.get('/gifts', { page, limit });
  }

  async markGiftPurchased(giftId, purchasedBy) {
    return this.patch('/gifts/purchased', { id: giftId, purchased: purchasedBy });
  }

  async getTestimonials(page = 1, limit = 10) {
    return this.get('/testimonials', { page, limit });
  }
}

export const apiClient = new ApiClient();
