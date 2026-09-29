const API_BASE = '/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('vg_admin_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
};

export const api = {
  // Settings
  getSettings: async () => {
    const res = await fetch(`${API_BASE}/settings`);
    if (!res.ok) throw new Error('Failed to load settings');
    return res.json();
  },
  updateSettings: async (settings) => {
    const res = await fetch(`${API_BASE}/settings`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(settings)
    });
    if (!res.ok) throw new Error('Failed to update settings');
    return res.json();
  },

  // Rooms
  getRooms: async () => {
    const res = await fetch(`${API_BASE}/rooms`);
    if (!res.ok) throw new Error('Failed to load rooms');
    return res.json();
  },
  createRoom: async (room) => {
    const res = await fetch(`${API_BASE}/rooms`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(room)
    });
    if (!res.ok) throw new Error('Failed to create room');
    return res.json();
  },
  updateRoom: async (id, room) => {
    const res = await fetch(`${API_BASE}/rooms/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(room)
    });
    if (!res.ok) throw new Error('Failed to update room');
    return res.json();
  },
  deleteRoom: async (id) => {
    const res = await fetch(`${API_BASE}/rooms/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete room');
    return res.json();
  },

  // Facilities
  getFacilities: async (all = false) => {
    const res = await fetch(`${API_BASE}/facilities${all ? '?all=true' : ''}`);
    if (!res.ok) throw new Error('Failed to load facilities');
    return res.json();
  },
  createFacility: async (fac) => {
    const res = await fetch(`${API_BASE}/facilities`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(fac)
    });
    if (!res.ok) throw new Error('Failed to create facility');
    return res.json();
  },
  updateFacility: async (id, fac) => {
    const res = await fetch(`${API_BASE}/facilities/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(fac)
    });
    if (!res.ok) throw new Error('Failed to update facility');
    return res.json();
  },
  deleteFacility: async (id) => {
    const res = await fetch(`${API_BASE}/facilities/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete facility');
    return res.json();
  },

  // Mess Menu
  getMenu: async () => {
    const res = await fetch(`${API_BASE}/menu`);
    if (!res.ok) throw new Error('Failed to load mess menu');
    return res.json();
  },
  updateMenu: async (menu) => {
    const res = await fetch(`${API_BASE}/menu`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(menu)
    });
    if (!res.ok) throw new Error('Failed to update mess menu');
    return res.json();
  },

  // Gallery
  getGallery: async () => {
    const res = await fetch(`${API_BASE}/gallery`);
    if (!res.ok) throw new Error('Failed to load gallery');
    return res.json();
  },
  addGalleryItem: async (item) => {
    const res = await fetch(`${API_BASE}/gallery`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(item)
    });
    if (!res.ok) throw new Error('Failed to add gallery item');
    return res.json();
  },
  deleteGalleryItem: async (id) => {
    const res = await fetch(`${API_BASE}/gallery/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete gallery item');
    return res.json();
  },

  // Enquiries
  getEnquiries: async () => {
    const res = await fetch(`${API_BASE}/enquiries`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to load enquiries');
    return res.json();
  },
  submitEnquiry: async (data) => {
    const res = await fetch(`${API_BASE}/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to submit enquiry');
    return res.json();
  },
  updateEnquiryStatus: async (id, status) => {
    const res = await fetch(`${API_BASE}/enquiries/${id}`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    if (!res.ok) throw new Error('Failed to update enquiry status');
    return res.json();
  },
  deleteEnquiry: async (id) => {
    const res = await fetch(`${API_BASE}/enquiries/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete enquiry');
    return res.json();
  },

  // Coaching Leads
  getCoachingLeads: async () => {
    const res = await fetch(`${API_BASE}/coaching-leads`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to load coaching registrations');
    return res.json();
  },
  submitCoachingLead: async (data) => {
    const res = await fetch(`${API_BASE}/coaching-leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to register for coaching updates');
    return res.json();
  },
  updateCoachingLeadStatus: async (id, status) => {
    const res = await fetch(`${API_BASE}/coaching-leads/${id}`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    if (!res.ok) throw new Error('Failed to update lead status');
    return res.json();
  },
  deleteCoachingLead: async (id) => {
    const res = await fetch(`${API_BASE}/coaching-leads/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete coaching lead');
    return res.json();
  },

  // Reviews
  getReviews: async (admin = false) => {
    const res = await fetch(`${API_BASE}/reviews${admin ? '?admin=true' : ''}`, {
      ...(admin ? { headers: getAuthHeaders() } : {})
    });
    if (!res.ok) throw new Error('Failed to load reviews');
    return res.json();
  },
  submitReview: async (review) => {
    const res = await fetch(`${API_BASE}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review)
    });
    if (!res.ok) throw new Error('Failed to submit review');
    return res.json();
  },
  updateReviewStatus: async (id, isApproved) => {
    const res = await fetch(`${API_BASE}/reviews/${id}`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ isApproved })
    });
    if (!res.ok) throw new Error('Failed to update review status');
    return res.json();
  },
  deleteReview: async (id) => {
    const res = await fetch(`${API_BASE}/reviews/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete review');
    return res.json();
  },

  // FAQs
  getFaqs: async () => {
    const res = await fetch(`${API_BASE}/faqs`);
    if (!res.ok) throw new Error('Failed to load faqs');
    return res.json();
  },
  createFaq: async (faq) => {
    const res = await fetch(`${API_BASE}/faqs`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(faq)
    });
    if (!res.ok) throw new Error('Failed to create FAQ');
    return res.json();
  },
  updateFaq: async (id, faq) => {
    const res = await fetch(`${API_BASE}/faqs/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(faq)
    });
    if (!res.ok) throw new Error('Failed to update FAQ');
    return res.json();
  },
  deleteFaq: async (id) => {
    const res = await fetch(`${API_BASE}/faqs/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete FAQ');
    return res.json();
  },

  // Auth & Admin Stats
  login: async (email, password) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.error || 'Login failed');
    }
    const data = await res.json();
    localStorage.setItem('vg_admin_token', data.token);
    localStorage.setItem('vg_admin_user', JSON.stringify(data.user));
    return data;
  },
  getStats: async () => {
    const res = await fetch(`${API_BASE}/admin/stats`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to load dashboard stats');
    return res.json();
  },
  uploadImage: async (file) => {
    const token = localStorage.getItem('vg_admin_token');
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch(`${API_BASE}/upload`, {
      method: 'POST',
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body: formData
    });
    if (!res.ok) throw new Error('Failed to upload image');
    return res.json();
  }
};
