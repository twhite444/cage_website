// Menu categories and items for the cafe
export const menuItems = {
  food: [
    { 
      name: 'Hamburger', 
      price: '$6.00', 
      description: 'Classic beef patty on a fresh bun',
      options: [
        { name: 'With Chips', price: '$7.00' },
        { name: 'With Fries', price: '$9.00' },
        { name: 'Add Cheese', price: '$0.50' }
      ]
    },
    { 
      name: 'Chicken Sandwich', 
      price: '$6.50', 
      description: 'Your choice of grilled or fried chicken on a fresh bun',
      options: [
        { name: 'With Chips', price: '$7.50' },
        { name: 'With Fries', price: '$10.50' },
        { name: 'Add Cheese', price: '$0.50' }
      ]
    },
    { 
      name: 'Hot Dog', 
      price: '$2.50', 
      description: 'Classic all-beef hot dog on a fresh bun',
      options: [
        { name: 'With Chips', price: '$3.50' },
        { name: 'With Fries', price: '$5.00' }
      ]
    }
  ],
  sides: [
    { 
      name: 'Chicken Tenders', 
      price: '$8.00', 
      description: 'Crispy breaded chicken tenders',
      options: [
        { name: 'With Fries', price: '$11.00' }
      ]
    },
    { 
      name: 'Chicken Wings', 
      price: '$8.00', 
      description: 'Crispy chicken wings tossed in your choice of sauce',
      options: [
        { name: '6 Wings', price: '$8.00' },
        { name: '12 Wings', price: '$12.00' }
      ]
    },
    { name: 'Mozzarella Sticks', price: '$8.00', description: '6 crispy breaded mozzarella sticks with marinara sauce' },
    { name: 'Fries', price: '$4.00', description: 'Crispy golden french fries' },
    { name: 'Onion Rings', price: '$5.00', description: 'Crispy battered onion rings' }
  ],
  drinks: [
    { name: 'Allagash on Tap', price: '$6.50', description: 'Maine-brewed Belgian-style beer' },
    { name: 'Baxter on Tap', price: '$6.00', description: 'Locally brewed craft beer' },
    { name: 'Freedom\'s Edge Cider on Tap', price: '$6.00', description: 'Crisp hard cider' },
    { name: 'Geary\'s on Tap', price: '$6.00', description: 'Traditional English-style ale' },
    { name: 'Goose Island on Tap', price: '$6.00', description: 'Chicago-born craft beer' },
    { name: 'Lunch on Tap', price: '$7.00', description: 'Maine Beer Company\'s popular IPA' },
    { name: 'Lone Pine on Tap', price: '$6.50', description: 'Portland, ME craft brewery selection' },
    { name: 'Shipyard Seasonal on Tap', price: '$6.00', description: 'Rotating seasonal beer from Shipyard' },
    { name: 'Smuttynose on Tap', price: '$6.00', description: 'New Hampshire craft brewery selection' },
    { name: 'Stella Artois on Tap', price: '$6.00', description: 'Belgian pilsner' },
    { name: 'Budweiser on Tap', price: '$5.00', description: 'Classic American lager' },
    { name: 'Bud Light on Tap', price: '$5.00', description: 'Light American lager' },
    { name: 'Coors Light on Tap', price: '$5.00', description: 'Light lager with Rocky Mountain heritage' },
    { name: 'Michelob Ultra on Tap', price: '$5.00', description: 'Low-carb light lager' },
    { name: 'Miller Lite on Tap', price: '$5.00', description: 'Original light beer' },
    { name: 'PBR on Tap', price: '$4.00', description: 'Pabst Blue Ribbon American lager' }
  ]
};

// Weekly events schedule
export const weeklyEvents = [
  {
    day: 'Monday',
    events: [
      { name: 'Chill Vibes', time: 'All Evening', description: 'Relax and unwind. Check Instagram for spontaneous happenings!', image: null }
    ]
  },
  {
    day: 'Tuesday',
    events: [
      { name: 'Open Mic Night', time: '7:00 PM - Late', description: 'Showcase your talent or enjoy the show!', image: '/open_mic_night_tuesday.png' }
    ]
  },
  {
    day: 'Wednesday',
    events: [
      { name: 'Trivia Night', time: '7:30 PM - 9:30 PM', description: 'Test your knowledge and win prizes!', image: '/pool_tournament_wednesday.png' } // Placeholder
    ]
  },
  {
    day: 'Thursday',
    events: [
      { name: 'Karaoke Night', time: '8:00 PM - Late', description: 'Sing your heart out!', image: '/open_mic_night_tuesday.png' } // Placeholder
    ]
  },
  {
    day: 'Friday',
    events: [
      { name: 'Live Music Weekend', time: '9:00 PM - Close', description: 'Catch the best local bands and DJs. Follow our Instagram for weekly lineups!', special: 'live-music', image: null } // Placeholder for a potential general live music poster
    ]
  },
  {
    day: 'Saturday',
    events: [
      { name: 'Live Music Weekend', time: '9:00 PM - Close', description: 'The party continues! Check Instagram for who is playing tonight!', special: 'live-music', image: null } // Placeholder for a potential general live music poster
    ]
  },
  {
    day: 'Sunday',
    events: [
      { name: 'Sunday Funday', time: 'Afternoon - Evening', description: 'Special events and relaxed vibes. Check Instagram for details!', image: '/open_mic_night_tuesday.png' } // Placeholder
    ]
  }
];

// Business information
export const businessInfo = {
  name: 'The Cage',
  address: '97 Ash St, Lewiston, ME 04240',
  phone: '(207) 783-0668',
  email: 'kelsullivan2001@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/batescagestuff',
    facebook: 'https://www.facebook.com/The-Cage-100054271431513/', 
    yelp: 'https://www.yelp.com/biz/the-cage-lewiston' 
  },
  hours: {
    monday: '12:00 PM - Close',
    tuesday: '12:00 PM - Close',
    wednesday: '12:00 PM - Close',
    thursday: '12:00 PM - Close',
    friday: '12:00 PM - Close',
    saturday: '10:00 AM - Close',
    sunday: '10:00 AM - Close',
  }
};