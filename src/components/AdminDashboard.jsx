import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Bed,
  Utensils,
  Image as ImageIcon,
  MessageSquare,
  GraduationCap,
  Star,
  Settings,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  XCircle,
  ExternalLink,
  Phone,
  MessageCircle,
  Save,
  Clock,
  Sparkles,
  Users,
  Shield,
  FileText,
  CreditCard,
  BookOpen
} from 'lucide-react';
import { api } from '../services/api';

export default function AdminDashboard({ adminUser, onLogout, onClose, onRefreshAll }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [menu, setMenu] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [coachingLeads, setCoachingLeads] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [settings, setSettings] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [notification, setNotification] = useState('');

  // Selected Day for Mess Menu editing
  const [menuDay, setMenuDay] = useState('Monday');

  // New gallery item state
  const [newImage, setNewImage] = useState({ title: '', category: 'Rooms', image: '', description: '' });

  // New facility state
  const [newFacility, setNewFacility] = useState({ name: '', icon: 'CheckCircle', description: '', isConfirmed: true });

  const notify = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  const loadAllData = async () => {
    try {
      const [sData, rData, fData, mData, gData, eData, cData, revData, settData, faqData] = await Promise.all([
        api.getStats(),
        api.getRooms(),
        api.getFacilities(true), // all facilities including unconfirmed
        api.getMenu(),
        api.getGallery(),
        api.getEnquiries(),
        api.getCoachingLeads(),
        api.getReviews(true), // all reviews including unapproved
        api.getSettings(),
        api.getFaqs()
      ]);

      setStats(sData);
      setRooms(rData);
      setFacilities(fData);
      setMenu(mData);
      setGallery(gData);
      setEnquiries(eData);
      setCoachingLeads(cData);
      setReviews(revData);
      setSettings(settData);
      setFaqs(faqData);
    } catch (err) {
      console.error("Error loading admin data:", err);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  // Update Website Settings
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    try {
      await api.updateSettings(settings);
      notify("Website settings saved successfully!");
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Failed to save settings: " + err.message);
    }
  };

  // Update Menu
  const handleSaveMenu = async () => {
    try {
      await api.updateMenu(menu);
      notify("Mess menu updated successfully!");
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Failed to save menu");
    }
  };

  // Enquiries Status Change
  const handleEnquiryStatus = async (id, newStatus) => {
    try {
      await api.updateEnquiryStatus(id, newStatus);
      setEnquiries(enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e));
      notify(`Enquiry status changed to ${newStatus}`);
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Error updating enquiry status");
    }
  };

  const handleDeleteEnquiry = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;
    try {
      await api.deleteEnquiry(id);
      setEnquiries(enquiries.filter(e => e.id !== id));
      notify("Enquiry removed");
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Error deleting enquiry");
    }
  };

  // Facilities
  const handleToggleFacility = async (fac) => {
    try {
      const updated = { ...fac, isConfirmed: !fac.isConfirmed };
      await api.updateFacility(fac.id, updated);
      setFacilities(facilities.map(f => f.id === fac.id ? updated : f));
      notify(`Facility ${updated.isConfirmed ? 'confirmed & visible' : 'hidden from public'}`);
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Error toggling facility");
    }
  };

  const handleAddFacility = async (e) => {
    e.preventDefault();
    if (!newFacility.name) return;
    try {
      const added = await api.createFacility(newFacility);
      setFacilities([...facilities, added]);
      setNewFacility({ name: '', icon: 'CheckCircle', description: '', isConfirmed: true });
      notify("New facility added!");
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Failed to add facility");
    }
  };

  const handleDeleteFacility = async (id) => {
    if (!window.confirm("Delete this facility?")) return;
    try {
      await api.deleteFacility(id);
      setFacilities(facilities.filter(f => f.id !== id));
      notify("Facility deleted");
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Failed to delete facility");
    }
  };

  // Reviews
  const handleReviewStatus = async (id, isApproved) => {
    try {
      await api.updateReviewStatus(id, isApproved);
      setReviews(reviews.map(r => r.id === id ? { ...r, isApproved } : r));
      notify(`Review ${isApproved ? 'Approved' : 'Unapproved'}`);
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Error updating review");
    }
  };

  const handleDeleteReview = async (id) => {
    if (!window.confirm("Delete review?")) return;
    try {
      await api.deleteReview(id);
      setReviews(reviews.filter(r => r.id !== id));
      notify("Review deleted");
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Error deleting review");
    }
  };

  // Gallery
  const handleAddGallery = async (e) => {
    e.preventDefault();
    if (!newImage.image || !newImage.title) {
      notify("Image URL and title are required");
      return;
    }
    try {
      const added = await api.addGalleryItem(newImage);
      setGallery([added, ...gallery]);
      setNewImage({ title: '', category: 'Rooms', image: '', description: '' });
      notify("Photo added to gallery!");
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Failed to add photo");
    }
  };

  const handleDeleteGallery = async (id) => {
    if (!window.confirm("Delete this gallery image?")) return;
    try {
      await api.deleteGalleryItem(id);
      setGallery(gallery.filter(g => g.id !== id));
      notify("Photo removed from gallery");
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Error deleting image");
    }
  };

  // Rooms Edit / Update
  const handleRoomChange = (id, field, value) => {
    setRooms(rooms.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const handleSaveRoom = async (room) => {
    try {
      await api.updateRoom(room.id, room);
      notify(`${room.type} updated successfully!`);
      if (onRefreshAll) onRefreshAll();
    } catch (err) {
      notify("Failed to update room");
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 4000,
        backgroundColor: 'var(--navy-950)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        color: '#f8fafc'
      }}
    >
      {/* Top Admin Header */}
      <header
        style={{
          height: '70px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: 'rgba(15, 23, 42, 0.98)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          flexShrink: 0
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img
            src={`${import.meta.env.BASE_URL}logo.jpeg`}
            alt="Vasant Geeta"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #eab308',
              backgroundColor: '#ffffff'
            }}
          />
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff' }}>
              Vasant Geeta Admin Dashboard
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              Management Portal • Logged in as: {adminUser?.name || 'Administrator'}
            </div>
          </div>
        </div>

        {notification && (
          <div
            style={{
              padding: '6px 16px',
              background: '#047857',
              color: '#ffffff',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: '600',
              animation: 'fadeIn 0.2s ease'
            }}
          >
            {notification}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onClose}
            className="btn btn-outline-white btn-sm"
          >
            <ExternalLink size={14} />
            View Live Site
          </button>
          <button
            onClick={onLogout}
            className="btn btn-sm"
            style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.4)' }}
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </header>

      {/* Main Admin Body */}
      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        
        {/* Sidebar Navigation */}
        <aside
          style={{
            width: '240px',
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '16px 12px',
            flexShrink: 0,
            overflowY: 'auto'
          }}
        >
          {[
            { id: 'overview', label: 'Overview', icon: LayoutDashboard },
            { id: 'enquiries', label: `Enquiries (${enquiries.filter(e => e.status === 'New').length} new)`, icon: MessageSquare },
            { id: 'rooms', label: 'PG Rooms', icon: Bed },
            { id: 'facilities', label: 'Facilities', icon: Sparkles },
            { id: 'mess', label: 'Mess & Menu', icon: Utensils },
            { id: 'gallery', label: 'Photo Gallery', icon: ImageIcon },
            { id: 'coaching', label: `Coaching Leads (${coachingLeads.length})`, icon: GraduationCap },
            { id: 'reviews', label: 'Reviews Moderation', icon: Star },
            { id: 'settings', label: 'Website Settings', icon: Settings },
            { id: 'student-portal-preview', label: 'Future Student Portal', icon: Users, isHighlight: true }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: isSelected ? '700' : '500',
                  textAlign: 'left',
                  background: isSelected ? 'linear-gradient(135deg, #1e293b, #0f172a)' : 'transparent',
                  color: tab.isHighlight ? '#fde68a' : isSelected ? '#fbbf24' : '#94a3b8',
                  border: isSelected ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                <Icon size={17} style={{ color: tab.isHighlight ? '#fbbf24' : isSelected ? '#fbbf24' : '#64748b' }} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Content Area */}
        <main
          style={{
            flexGrow: 1,
            backgroundColor: '#0b1120',
            overflowY: 'auto',
            padding: '30px'
          }}
        >
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '6px' }}>Dashboard Overview</h2>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px' }}>
                Key operational metrics and recent customer interactions.
              </p>

              {/* Stats Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px', marginBottom: '36px' }}>
                {[
                  { label: "New Enquiries", val: stats?.newEnquiries ?? enquiries.filter(e => e.status === 'New').length, color: '#f59e0b', sub: "Requires follow-up" },
                  { label: "Total Inquiries", val: stats?.totalEnquiries ?? enquiries.length, color: '#3b82f6', sub: "All time leads" },
                  { label: "Coaching Leads", val: stats?.totalCoachingLeads ?? coachingLeads.length, color: '#8b5cf6', sub: "Registered interest" },
                  { label: "Active Room Types", val: stats?.totalRooms ?? rooms.length, color: '#10b981', sub: "Single/Double/Triple" },
                  { label: "Confirmed Facilities", val: facilities.filter(f => f.isConfirmed).length, color: '#06b6d4', sub: "Published to website" }
                ].map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(30, 41, 59, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      padding: '20px'
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700' }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: '2.2rem', fontWeight: '800', color: s.color, margin: '6px 0' }}>
                      {s.val}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Recent Enquiries Preview */}
              <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', borderRadius: '18px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#ffffff' }}>Latest Student Enquiries</h3>
                  <button onClick={() => setActiveTab('enquiries')} className="btn btn-outline-white btn-sm">
                    View All Enquiries
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {enquiries.slice(0, 4).map(enq => (
                    <div
                      key={enq.id}
                      style={{
                        padding: '14px 18px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(15, 23, 42, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <span style={{ fontWeight: '700', color: '#ffffff' }}>{enq.fullName}</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.85rem', marginLeft: '10px' }}>
                          • {enq.preferredRoomType} ({enq.phoneNumber})
                        </span>
                        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>
                          Joining: {enq.joiningDate || 'Flexible'} • {enq.message}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          padding: '4px 10px',
                          borderRadius: '999px',
                          backgroundColor: enq.status === 'New' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                          color: enq.status === 'New' ? '#fbbf24' : '#34d399',
                          border: enq.status === 'New' ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(16, 185, 129, 0.4)'
                        }}
                      >
                        {enq.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ENQUIRIES MANAGER */}
          {activeTab === 'enquiries' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h2 style={{ fontSize: '1.6rem', color: '#ffffff' }}>Accommodation Enquiries</h2>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                    Track leads, update statuses, or message students directly via WhatsApp / Call.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {enquiries.length === 0 ? (
                  <div style={{ padding: '30px', textAlign: 'center', color: '#94a3b8' }}>No enquiries found.</div>
                ) : (
                  enquiries.map(enq => {
                    const cleanPhone = enq.phoneNumber.replace(/[^0-9]/g, '');
                    return (
                      <div
                        key={enq.id}
                        style={{
                          backgroundColor: 'rgba(30, 41, 59, 0.7)',
                          borderRadius: '16px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '20px 24px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px'
                        }}
                      >
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                          <div>
                            <span style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff' }}>{enq.fullName}</span>
                            <span style={{ fontSize: '0.9rem', color: '#fbbf24', marginLeft: '12px', fontWeight: '600' }}>
                              {enq.preferredRoomType}
                            </span>
                            <span style={{ fontSize: '0.78rem', color: '#94a3b8', marginLeft: '10px' }}>
                              ({enq.numberOfPersons} Person(s))
                            </span>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <select
                              value={enq.status}
                              onChange={(e) => handleEnquiryStatus(enq.id, e.target.value)}
                              style={{
                                padding: '6px 12px',
                                borderRadius: '8px',
                                backgroundColor: 'var(--navy-900)',
                                color: '#ffffff',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                fontSize: '0.82rem',
                                outline: 'none'
                              }}
                            >
                              <option value="New">Status: New</option>
                              <option value="Contacted">Status: Contacted</option>
                              <option value="Confirmed">Status: Confirmed</option>
                              <option value="Completed">Status: Completed</option>
                            </select>

                            <button
                              onClick={() => handleDeleteEnquiry(enq.id)}
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                background: 'rgba(239, 68, 68, 0.2)',
                                color: '#f87171',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                              title="Delete Enquiry"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                          <strong>Message:</strong> {enq.message || 'No additional note provided.'}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                            Phone: {enq.phoneNumber} | Email: {enq.email || 'N/A'} | Joining: {enq.joiningDate || 'Immediate'}
                          </div>

                          <div style={{ display: 'flex', gap: '10px' }}>
                            <a
                              href={`tel:${enq.phoneNumber}`}
                              className="btn btn-call btn-sm"
                            >
                              <Phone size={14} /> Call
                            </a>
                            <a
                              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello ${enq.fullName}, this is Vasant Geetha PG Management regarding your enquiry for ${enq.preferredRoomType}.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-whatsapp btn-sm"
                            >
                              <MessageCircle size={14} /> WhatsApp
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* TAB 3: PG ROOMS MANAGER */}
          {activeTab === 'rooms' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '6px' }}>PG Room Configuration</h2>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '24px' }}>
                Edit room descriptions, availability status, and pricing display rules.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {rooms.map(room => (
                  <div
                    key={room.id}
                    style={{
                      backgroundColor: 'rgba(30, 41, 59, 0.7)',
                      borderRadius: '18px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '24px'
                    }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Room Type</label>
                        <input
                          type="text"
                          value={room.type}
                          onChange={(e) => handleRoomChange(room.id, 'type', e.target.value)}
                          style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Availability Status</label>
                        <select
                          value={room.status}
                          onChange={(e) => handleRoomChange(room.id, 'status', e.target.value)}
                          style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                        >
                          <option value="Available">Available</option>
                          <option value="Few Rooms Left">Few Rooms Left</option>
                          <option value="Full / Waitlist">Full / Waitlist</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>
                        Price Display String (Adheres to prompt rules: "Price: Contact for current availability" or custom)
                      </label>
                      <input
                        type="text"
                        value={room.priceDisplay}
                        onChange={(e) => handleRoomChange(room.id, 'priceDisplay', e.target.value)}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: 'var(--navy-900)', color: '#fbbf24', border: '1px solid #334155', fontWeight: '600' }}
                      />
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Description</label>
                      <textarea
                        rows="2"
                        value={room.description}
                        onChange={(e) => handleRoomChange(room.id, 'description', e.target.value)}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                      />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Image URL</label>
                      <input
                        type="text"
                        value={room.image}
                        onChange={(e) => handleRoomChange(room.id, 'image', e.target.value)}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                      />
                    </div>

                    <button
                      onClick={() => handleSaveRoom(room)}
                      className="btn btn-primary btn-sm"
                    >
                      <Save size={14} /> Save {room.type} Changes
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: FACILITIES MANAGER */}
          {activeTab === 'facilities' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '6px' }}>Facilities & Amenities</h2>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '20px' }}>
                Toggle confirmed status. Per instructions, only confirmed facilities are published publicly on the website.
              </p>

              {/* Add New Facility */}
              <form
                onSubmit={handleAddFacility}
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.6)',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '26px',
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 1fr 2fr auto',
                  gap: '12px',
                  alignItems: 'flex-end'
                }}
              >
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px' }}>Facility Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Solar Water Heater"
                    value={newFacility.name}
                    onChange={(e) => setNewFacility({ ...newFacility, name: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px' }}>Icon</label>
                  <select
                    value={newFacility.icon}
                    onChange={(e) => setNewFacility({ ...newFacility, icon: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                  >
                    <option value="Bed">Bed</option>
                    <option value="BookOpen">Study Desk</option>
                    <option value="Wifi">Wi-Fi</option>
                    <option value="Bath">Bath</option>
                    <option value="Droplets">Water</option>
                    <option value="Zap">Electricity</option>
                    <option value="Sparkles">Housekeeping</option>
                    <option value="ShieldCheck">Security</option>
                    <option value="Utensils">Mess</option>
                    <option value="Car">Parking</option>
                    <option value="CheckCircle">Check</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px' }}>Description</label>
                  <input
                    type="text"
                    placeholder="Short description for students"
                    value={newFacility.description}
                    onChange={(e) => setNewFacility({ ...newFacility, description: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-sm" style={{ height: '38px' }}>
                  <Plus size={16} /> Add Facility
                </button>
              </form>

              {/* Facilities List */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                {facilities.map(fac => (
                  <div
                    key={fac.id}
                    style={{
                      backgroundColor: 'rgba(30, 41, 59, 0.7)',
                      borderRadius: '14px',
                      border: fac.isConfirmed ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '16px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '12px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '700' }}>{fac.name}</h4>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            padding: '3px 8px',
                            borderRadius: '999px',
                            backgroundColor: fac.isConfirmed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                            color: fac.isConfirmed ? '#34d399' : '#f87171'
                          }}
                        >
                          {fac.isConfirmed ? 'Confirmed' : 'Hidden'}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{fac.description}</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      <button
                        onClick={() => handleToggleFacility(fac)}
                        style={{
                          fontSize: '0.8rem',
                          color: fac.isConfirmed ? '#fbbf24' : '#34d399',
                          fontWeight: '600',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        {fac.isConfirmed ? 'Hide from Website' : 'Confirm & Publish'}
                      </button>

                      <button
                        onClick={() => handleDeleteFacility(fac.id)}
                        style={{ color: '#f87171', background: 'none', border: 'none', cursor: 'pointer' }}
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: MESS MENU MANAGER */}
          {activeTab === 'mess' && menu && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h2 style={{ fontSize: '1.6rem', color: '#ffffff' }}>Mess & Weekly Menu Planner</h2>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                    Edit Breakfast, Lunch, and Dinner menus for all 7 days of the week.
                  </p>
                </div>
                <button onClick={handleSaveMenu} className="btn btn-primary">
                  <Save size={16} /> Save All Menu Changes
                </button>
              </div>

              {/* Day selection tabs */}
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '24px' }}>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(d => (
                  <button
                    key={d}
                    onClick={() => setMenuDay(d)}
                    style={{
                      padding: '9px 18px',
                      borderRadius: '10px',
                      fontWeight: menuDay === d ? '700' : '500',
                      background: menuDay === d ? '#f59e0b' : 'rgba(30, 41, 59, 0.7)',
                      color: menuDay === d ? '#0f172a' : '#cbd5e1',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>

              {/* Meal inputs for selected day */}
              <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.7)', borderRadius: '18px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '26px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 style={{ color: '#fbbf24', fontSize: '1.3rem', fontWeight: '700' }}>
                  {menuDay} Menu Items
                </h3>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>
                    Breakfast
                  </label>
                  <textarea
                    rows="2"
                    value={menu.days[menuDay]?.breakfast || ''}
                    onChange={(e) => {
                      const updated = { ...menu };
                      updated.days[menuDay].breakfast = e.target.value;
                      setMenu(updated);
                    }}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>
                    Lunch
                  </label>
                  <textarea
                    rows="2"
                    value={menu.days[menuDay]?.lunch || ''}
                    onChange={(e) => {
                      const updated = { ...menu };
                      updated.days[menuDay].lunch = e.target.value;
                      setMenu(updated);
                    }}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>
                    Dinner
                  </label>
                  <textarea
                    rows="2"
                    value={menu.days[menuDay]?.dinner || ''}
                    onChange={(e) => {
                      const updated = { ...menu };
                      updated.days[menuDay].dinner = e.target.value;
                      setMenu(updated);
                    }}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                  />
                </div>

                <div style={{ marginTop: '10px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>
                    Special Diet & Festive Notes
                  </label>
                  <input
                    type="text"
                    value={menu.notes || ''}
                    onChange={(e) => setMenu({ ...menu, notes: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#cbd5e1', border: '1px solid #334155' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: GALLERY MANAGER */}
          {activeTab === 'gallery' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '6px' }}>Photo Gallery Manager</h2>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '20px' }}>
                Add new photos or remove outdated images from the public photo showcase.
              </p>

              {/* Add New Photo Form */}
              <form
                onSubmit={handleAddGallery}
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.6)',
                  borderRadius: '16px',
                  padding: '22px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '28px',
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 1fr 2fr auto',
                  gap: '12px',
                  alignItems: 'flex-end'
                }}
              >
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px' }}>Photo Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Spacious Triple Bedroom"
                    value={newImage.title}
                    onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px' }}>Category</label>
                  <select
                    value={newImage.category}
                    onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                  >
                    <option value="Rooms">Rooms</option>
                    <option value="Mess">Mess</option>
                    <option value="Facilities">Facilities</option>
                    <option value="Common Areas">Common Areas</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '4px' }}>Image URL</label>
                  <input
                    type="url"
                    required
                    placeholder="https://images.unsplash.com/..."
                    value={newImage.image}
                    onChange={(e) => setNewImage({ ...newImage, image: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-sm" style={{ height: '38px' }}>
                  <Plus size={16} /> Add Photo
                </button>
              </form>

              {/* Gallery Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '18px' }}>
                {gallery.map(item => (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: 'rgba(30, 41, 59, 0.7)',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div style={{ height: '140px', position: 'relative' }}>
                      <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <button
                        onClick={() => handleDeleteGallery(item.id)}
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: 'rgba(0,0,0,0.7)',
                          color: '#f87171',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div style={{ padding: '12px 14px' }}>
                      <span style={{ fontSize: '0.7rem', color: '#fbbf24', fontWeight: '700', textTransform: 'uppercase' }}>
                        {item.category}
                      </span>
                      <h4 style={{ fontSize: '0.9rem', color: '#ffffff', marginTop: '2px', fontWeight: '600' }}>
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: COACHING LEADS */}
          {activeTab === 'coaching' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '6px' }}>Competitive Academy Pre-Registrations</h2>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '22px' }}>
                Aspirants who registered their interest in upcoming competitive examination coaching classes.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {coachingLeads.length === 0 ? (
                  <div style={{ padding: '30px', textAlign: 'center', color: '#94a3b8' }}>No registrations yet.</div>
                ) : (
                  coachingLeads.map(lead => {
                    const cleanPhone = lead.phoneNumber.replace(/[^0-9]/g, '');
                    return (
                      <div
                        key={lead.id}
                        style={{
                          backgroundColor: 'rgba(30, 41, 59, 0.7)',
                          borderRadius: '16px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '20px 24px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff' }}>{lead.studentName}</span>
                            <span style={{ fontSize: '0.82rem', padding: '3px 10px', borderRadius: '999px', background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', fontWeight: '700' }}>
                              {lead.examInterest}
                            </span>
                          </div>
                          <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '6px' }}>
                            Phone: {lead.phoneNumber} | Email: {lead.email || 'N/A'}
                          </div>
                          {lead.notes && (
                            <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '4px' }}>
                              <strong>Note:</strong> {lead.notes}
                            </div>
                          )}
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                          <a
                            href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello ${lead.studentName}, thank you for registering with Vasant Geetha Competitive Academy for ${lead.examInterest}.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp btn-sm"
                          >
                            <MessageCircle size={14} /> WhatsApp
                          </a>
                          <a href={`tel:${lead.phoneNumber}`} className="btn btn-call btn-sm">
                            <Phone size={14} /> Call
                          </a>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* TAB 8: REVIEWS MODERATION */}
          {activeTab === 'reviews' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '6px' }}>Reviews Moderation</h2>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '22px' }}>
                Approve genuine resident reviews or manage sample placeholders.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {reviews.map(rev => (
                  <div
                    key={rev.id}
                    style={{
                      backgroundColor: 'rgba(30, 41, 59, 0.7)',
                      borderRadius: '16px',
                      border: rev.isApproved ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(245, 158, 11, 0.4)',
                      padding: '20px 24px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontWeight: '700', color: '#ffffff' }}>{rev.name}</span>
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>({rev.role} • {rev.date})</span>
                        {rev.isSample && (
                          <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', background: '#fef3c7', color: '#b45309', fontWeight: '700' }}>
                            Sample Testimonial
                          </span>
                        )}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button
                          onClick={() => handleReviewStatus(rev.id, !rev.isApproved)}
                          className={rev.isApproved ? "btn btn-outline-white btn-sm" : "btn btn-primary btn-sm"}
                        >
                          {rev.isApproved ? 'Mark as Pending' : 'Approve Review'}
                        </button>
                        <button
                          onClick={() => handleDeleteReview(rev.id)}
                          style={{ color: '#f87171', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.92rem', color: '#cbd5e1', fontStyle: 'italic' }}>
                      “{rev.review}”
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: WEBSITE SETTINGS */}
          {activeTab === 'settings' && settings && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h2 style={{ fontSize: '1.6rem', color: '#ffffff' }}>Website General Settings</h2>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                    Per instructions, all business contact information, address, and branding are fully editable.
                  </p>
                </div>
                <button onClick={handleSaveSettings} className="btn btn-primary">
                  <Save size={16} /> Save Settings
                </button>
              </div>

              <form onSubmit={handleSaveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Business Name</label>
                    <input
                      type="text"
                      value={settings.businessName}
                      onChange={(e) => setSettings({ ...settings, businessName: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Brand Subtitle</label>
                    <input
                      type="text"
                      value={settings.brandSubtitle}
                      onChange={(e) => setSettings({ ...settings, brandSubtitle: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Phone Number</label>
                    <input
                      type="text"
                      value={settings.phone}
                      onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>WhatsApp Number</label>
                    <input
                      type="text"
                      value={settings.whatsapp}
                      onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Email Address</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Physical Address</label>
                  <input
                    type="text"
                    value={settings.address}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Google Maps Embed Iframe URL</label>
                  <input
                    type="text"
                    value={settings.googleMapsEmbed}
                    onChange={(e) => setSettings({ ...settings, googleMapsEmbed: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#cbd5e1', border: '1px solid #334155', fontSize: '0.85rem' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Coaching Section Heading</label>
                    <input
                      type="text"
                      value={settings.coachingHeading}
                      onChange={(e) => setSettings({ ...settings, coachingHeading: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Coaching Subheading</label>
                    <input
                      type="text"
                      value={settings.coachingSubheading}
                      onChange={(e) => setSettings({ ...settings, coachingSubheading: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'var(--navy-900)', color: '#fff', border: '1px solid #334155' }}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '12px 28px' }}>
                  <Save size={16} /> Save All Settings
                </button>
              </form>
            </div>
          )}

          {/* TAB 10: FUTURE STUDENT PORTAL ARCHITECTURE PREVIEW */}
          {activeTab === 'student-portal-preview' && (
            <div>
              <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.7)', borderRadius: '20px', border: '1.5px solid rgba(245, 158, 11, 0.4)', padding: '32px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fbbf24', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <Sparkles size={18} />
                  <span>Architecture Blueprint Ready</span>
                </div>
                <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '10px' }}>
                  Future Student Portal Architecture
                </h2>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '760px' }}>
                  Per system design guidelines, the architecture is structured to support dedicated student accounts once competitive coaching classes and student enrollment go live. Below is the functional blueprint and preview interface.
                </p>
              </div>

              {/* Blueprint Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
                {[
                  { icon: Users, title: "Student Profile & KYC", desc: "Digital verification, college/exam registration record, emergency parent contact details." },
                  { icon: Bed, title: "Room & Inventory Allotment", desc: "Room number, bed assignment, inventory checklist, and maintenance service ticket requests." },
                  { icon: Utensils, title: "Mess & Attendance Tracker", desc: "Meal check-in QR code, special sick-diet notification to kitchen, and monthly meal log." },
                  { icon: GraduationCap, title: "Coaching Batches & Schedule", desc: "Enrolled exam batch timetables, live lecture links, and faculty announcements." },
                  { icon: BookOpen, title: "Study Materials & Test Series", desc: "Downloadable PDF handouts, daily current affairs quizzes, and mock test scores." },
                  { icon: CreditCard, title: "Fee Receipts & Dues", desc: "Transparent invoice records, advance rent payment tracking, and digital receipt generator." }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: 'rgba(15, 23, 42, 0.8)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '24px'
                      }}
                    >
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          background: 'rgba(245, 158, 11, 0.15)',
                          color: '#fbbf24',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px'
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>{item.desc}</p>
                      <div style={{ marginTop: '14px', fontSize: '0.72rem', color: '#34d399', fontWeight: '700' }}>
                        ● SCHEMA READY IN DB
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
