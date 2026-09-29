// ─── Static / Mock data ─────────────────────────────────────────────────────
// This file replaces all backend API calls so the site works
// entirely as a frontend-only project (no Node / Express required).

export const staticSettings = {
  siteName: 'VasantGeeta',
  businessName: 'VasantGeeta',
  brandSubtitle: 'Boys PG & Mess • A Home Away From Home',
  logoUrl: `${import.meta.env.BASE_URL}logo.jpeg`,
  tagline: 'BOYS PG & MESS — A Home Away From Home',
  phone: '+91 8073762582',
  phone2: '+91 8494865435',
  email: 'vasantshagoti1@gmail.com',
  address: 'VasantGeeta PG Boys PG, Venkateshwara Complex, behind Nirmala Saree Centre, near the NTTF BRTC Bus Stop, Hosayellapur, Dharwad, Karnataka 580001',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.330364213797!2d75.0092795!3d15.4537984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cda7146004dd%3A0x627a841a517851f3!2sVasantGeeta%20PG%20For%20Boys!5e0!3m2!1sen!2sin!4v1',
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://facebook.com',
  whatsappNumber: '918494865435',
  heroHeadline: 'A Home Away From Home',
  heroSubheadline:
    'Premium Boys PG Accommodation & Hygienic Mess in Hubballi. Stay • Eat • Study • Grow.',
  coachingComingSoon: true,
};

export const staticRooms = [
  {
    id: '1',
    name: 'Single Occupancy Room',
    type: 'Single',
    description:
      'Private single-occupancy room with a comfortable bed, study desk, wardrobe, and high-speed Wi-Fi. Perfect for focused students.',
    features: ['Attached Bathroom', 'AC Available', 'Study Desk', 'High-Speed Wi-Fi', 'Daily Housekeeping'],
    imageUrl: '',
    available: true,
  },
  {
    id: '2',
    name: 'Double Sharing Room',
    type: 'Double',
    description:
      'Spacious double-sharing room ideal for students who prefer companionship. Each resident gets a dedicated study desk and storage space.',
    features: ['Common Bathroom', 'Ceiling Fan', 'Study Desk', 'Wi-Fi', 'Housekeeping'],
    imageUrl: '',
    available: true,
  },
  {
    id: '3',
    name: 'Triple Sharing Room',
    type: 'Triple',
    description:
      'Budget-friendly triple-sharing room with all essential amenities. Great camaraderie and community living experience.',
    features: ['Common Bathroom', 'Ceiling Fan', 'Study Desk', 'Wi-Fi', 'Housekeeping'],
    imageUrl: '',
    available: true,
  },
];

export const staticFacilities = [
  { id: '1', name: 'High-Speed Wi-Fi', icon: '📶', description: 'Unlimited high-speed internet throughout the PG.', confirmed: true },
  { id: '2', name: 'Hygienic Mess', icon: '🍽️', description: 'Nutritious home-style meals, freshly prepared daily.', confirmed: true },
  { id: '3', name: 'RO Drinking Water', icon: '💧', description: 'Purified RO drinking water available 24×7.', confirmed: true },
  { id: '4', name: '24×7 Security', icon: '🔒', description: 'CCTV surveillance and secure premises round the clock.', confirmed: true },
  { id: '5', name: 'Study Room', icon: '📚', description: 'Dedicated quiet study room for exam preparation.', confirmed: true },
  { id: '6', name: 'Laundry Service', icon: '🧺', description: 'Weekly laundry facility available on the premises.', confirmed: true },
  { id: '7', name: 'Power Backup', icon: '⚡', description: 'Generator backup ensures zero power interruptions.', confirmed: true },
  { id: '8', name: 'Indoor Games', icon: '🎮', description: 'Carrom, chess, and recreational facilities for relaxation.', confirmed: true },
];

export const staticWeeklyMenu = {
  monday:    { breakfast: 'Idli, Sambar, Chutney', lunch: 'Rice, Dal, Sabji, Chapati, Curd', dinner: 'Rice, Sambar, Chapati, Pickle' },
  tuesday:   { breakfast: 'Poha, Masala Chai', lunch: 'Rice, Rajma, Sabji, Chapati', dinner: 'Rice, Dal Tadka, Roti, Salad' },
  wednesday: { breakfast: 'Upma, Coconut Chutney', lunch: 'Rice, Chole, Sabji, Chapati, Raita', dinner: 'Rice, Palak Paneer, Roti, Papad' },
  thursday:  { breakfast: 'Puri, Bhaji', lunch: 'Rice, Dal Fry, Aloo Gobi, Chapati', dinner: 'Rice, Mixed Veg, Chapati, Curd' },
  friday:    { breakfast: 'Dosa, Sambar, Chutney', lunch: 'Rice, Kadhi, Sabji, Chapati, Pickle', dinner: 'Rice, Dal, Chapati, Salad' },
  saturday:  { breakfast: 'Bread, Butter, Banana, Chai', lunch: 'Pulao / Biryani, Raita, Salad', dinner: 'Rice, Dal Makhani, Roti, Papad' },
  sunday:    { breakfast: 'Idli / Vada, Sambar, Chutney', lunch: 'Special Meal – Puri, Sabji, Sweet', dinner: 'Rice, Dal, Roti, Ice Cream / Sweet' },
};

export const staticGallery = [];

export const staticReviews = [
  {
    id: '1',
    name: 'Rahul Patil',
    course: 'B.E. Computer Science',
    rating: 5,
    review:
      'Excellent PG! Clean rooms, tasty food, and a great study environment. I cleared my competitive exam while staying here. Highly recommended!',
    isApproved: true,
  },
  {
    id: '2',
    name: 'Amit Kumar',
    course: 'UPSC Aspirant',
    rating: 5,
    review:
      'The mess food is home-like and hygienic. The management is very supportive and the study room is a big plus for serious students.',
    isApproved: true,
  },
  {
    id: '3',
    name: 'Suresh Naik',
    course: 'B.Sc Agriculture',
    rating: 4,
    review:
      'Good facilities, friendly environment, and responsive management. Wi-Fi speed is great. Overall a very good PG experience.',
    isApproved: true,
  },
];

export const staticFaqs = [
  { id: '1', question: 'What is the rent for a single room?', answer: 'Please contact us directly for current pricing and availability. Rates vary by room type and occupancy.' },
  { id: '2', question: 'Is food (mess) included in the rent?', answer: 'Mess is available as an optional add-on or as a combined package. Contact us for details on the mess plan.' },
  { id: '3', question: 'Is the PG only for boys?', answer: 'Yes, VasantGeeta PG is exclusively for boys/male students and working professionals.' },
  { id: '4', question: 'What documents are required for admission?', answer: 'You will need a valid photo ID (Aadhaar, college ID), a passport-size photo, and a parent/guardian contact number.' },
  { id: '5', question: 'Is Wi-Fi available 24×7?', answer: 'Yes, high-speed unlimited Wi-Fi is available throughout the premises round the clock.' },
  { id: '6', question: 'Is there a study room?', answer: 'Yes, we have a dedicated quiet study room for students preparing for competitive exams.' },
  { id: '7', question: 'What are the visiting hours for guests?', answer: 'Guests are allowed to visit between 9 AM and 8 PM. Overnight guests are not permitted.' },
  { id: '8', question: 'Are coaching classes available?', answer: 'Coaching classes are planned as part of our future expansion. Register your interest and we will notify you as soon as they launch!' },
];
