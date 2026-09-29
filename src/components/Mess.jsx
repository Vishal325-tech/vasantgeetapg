import React, { useState } from 'react';
import { Utensils, Clock, Calendar, CheckCircle2, Coffee, Sun, Moon, Sparkles, Heart } from 'lucide-react';

export default function Mess({ weeklyMenu, onOpenEnquiry }) {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const mealCards = [
    {
      title: "Breakfast",
      icon: Coffee,
      time: weeklyMenu?.mealTimings?.breakfast || "07:30 AM - 09:30 AM",
      desc: "Energetic morning start with freshly made South & North Indian delicacies, hot sambar, fresh chutneys, and tea/coffee.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
      tag: "Energizing Start"
    },
    {
      title: "Lunch",
      icon: Sun,
      time: weeklyMenu?.mealTimings?.lunch || "12:30 PM - 02:30 PM",
      desc: "Balanced afternoon meal with steamed rice, protein-rich lentils/dal, seasonal vegetable preparations, fresh curd, and digestive rasam.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
      tag: "Nutritious & Homely"
    },
    {
      title: "Dinner",
      icon: Moon,
      time: weeklyMenu?.mealTimings?.dinner || "07:45 PM - 09:45 PM",
      desc: "Light and wholesome evening dinner featuring soft phulkas/rotis, flavorful curries, specialty pulao/ghee rice, and salads.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80",
      tag: "Wholesome & Digestible"
    }
  ];

  const currentDayMenu = weeklyMenu?.days?.[selectedDay] || {
    breakfast: "Fresh breakfast with hot tea/coffee",
    lunch: "Rice, Dal, Seasonal Curry, Curd & Papad",
    dinner: "Phulkas/Roti, Special Sabzi, Rice & Dal"
  };

  return (
    <section id="mess" style={{ padding: '95px 0', backgroundColor: 'var(--navy-50)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Utensils size={15} />
            Hygienic Mess & Nutrition
          </div>
          <h2 className="section-title">Fresh Food. Healthy Living.</h2>
          <p className="section-subtitle">
            “Our mess is focused on providing hygienic, nutritious and homely meals for students and residents.”
          </p>
        </div>

        {/* 3 Meal Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          {mealCards.map((meal, idx) => {
            const Icon = meal.icon;
            return (
              <div key={idx} className="card-modern" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '210px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={meal.image}
                    alt={meal.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#fbbf24',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <Icon size={13} />
                    {meal.tag}
                  </div>
                </div>

                <div style={{ padding: '24px 22px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-900)' }}>{meal.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--navy-600)', background: 'var(--navy-100)', padding: '3px 8px', borderRadius: '6px', fontWeight: '600' }}>
                        <Clock size={13} />
                        {meal.time}
                      </div>
                    </div>

                    <p style={{ fontSize: '0.9rem', color: 'var(--navy-600)', lineHeight: '1.6', marginBottom: '16px' }}>
                      {meal.desc}
                    </p>
                  </div>

                  <div style={{ fontSize: '0.82rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                    <CheckCircle2 size={15} />
                    Prepared daily using filtered water & fresh produce
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Weekly Menu Section */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid var(--navy-200)',
            boxShadow: 'var(--shadow-md)',
            padding: '38px 32px'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '28px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-600)', fontWeight: '700', fontSize: '0.88rem', textTransform: 'uppercase' }}>
                <Calendar size={16} />
                <span>Planned Diet Schedule</span>
              </div>
              <h3 style={{ fontSize: '1.65rem', color: 'var(--navy-900)', marginTop: '4px' }}>
                Weekly Rotating Menu
              </h3>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--navy-500)', fontStyle: 'italic', maxWidth: '380px' }}>
              {weeklyMenu?.notes || "Daily meals are updated by mess management. Sunday includes special festive treats."}
            </div>
          </div>

          {/* Day selection tabs */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '12px',
              marginBottom: '26px'
            }}
          >
            {days.map((day) => {
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '12px',
                    fontWeight: isSelected ? '700' : '600',
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap',
                    background: isSelected ? 'var(--navy-900)' : 'var(--navy-100)',
                    color: isSelected ? '#ffffff' : 'var(--navy-700)',
                    border: isSelected ? '1px solid var(--navy-900)' : '1px solid transparent',
                    boxShadow: isSelected ? '0 4px 12px rgba(15, 23, 42, 0.2)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Active Day Menu Breakdown */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              backgroundColor: 'var(--navy-50)',
              borderRadius: '18px',
              padding: '26px',
              border: '1px solid var(--navy-200)'
            }}
          >
            {/* Breakfast */}
            <div style={{ background: '#ffffff', borderRadius: '14px', padding: '20px', border: '1px solid var(--navy-100)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b45309', fontWeight: '700', fontSize: '0.9rem', marginBottom: '8px' }}>
                <Coffee size={18} />
                <span>Breakfast ({weeklyMenu?.mealTimings?.breakfast || "7:30 - 9:30 AM"})</span>
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--navy-800)', lineHeight: '1.6', fontWeight: '500' }}>
                {currentDayMenu.breakfast}
              </div>
            </div>

            {/* Lunch */}
            <div style={{ background: '#ffffff', borderRadius: '14px', padding: '20px', border: '1px solid var(--navy-100)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0369a1', fontWeight: '700', fontSize: '0.9rem', marginBottom: '8px' }}>
                <Sun size={18} />
                <span>Lunch ({weeklyMenu?.mealTimings?.lunch || "12:30 - 2:30 PM"})</span>
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--navy-800)', lineHeight: '1.6', fontWeight: '500' }}>
                {currentDayMenu.lunch}
              </div>
            </div>

            {/* Dinner */}
            <div style={{ background: '#ffffff', borderRadius: '14px', padding: '20px', border: '1px solid var(--navy-100)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6d28d9', fontWeight: '700', fontSize: '0.9rem', marginBottom: '8px' }}>
                <Moon size={18} />
                <span>Dinner ({weeklyMenu?.mealTimings?.dinner || "7:45 - 9:45 PM"})</span>
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--navy-800)', lineHeight: '1.6', fontWeight: '500' }}>
                {currentDayMenu.dinner}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--navy-600)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Heart size={16} style={{ color: '#e11d48' }} />
              Special dietary preferences or unwell-resident light meals (kichadi/porridge) prepared upon request.
            </div>

            <button
              onClick={() => onOpenEnquiry('Mess Facility Enquiry')}
              className="btn btn-navy btn-sm"
            >
              Enquire About Mess Plan
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
