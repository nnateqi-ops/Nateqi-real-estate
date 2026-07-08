/**
 * Site content — update agent info, listings, and testimonials here.
 */

window.SITE_DATA = {
  agent: {
    name: 'Najiba Nateqi',
    title: 'Licensed REALTOR®',
    company: 'Millennium Realty Group, Inc.',
    license: 'Licensed in Maryland & Virginia',
    slogan: 'Providing Professional Real Estate Services with Integrity, Commitment & Results.',
    email: 'nnateqi@gmail.com',
    cell: '(202) 975-5981',
    office: '(703) 675-7985',
    address: {
      street: '8569 Sudley Road, Suite C',
      city: 'Manassas',
      state: 'VA',
      zip: '20110',
      lat: 38.7947,
      lng: -77.5203,
    },
    photo: 'assets/najiba-nateqi.png',
  },

  listings: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      alt: 'Beautiful home in Upper Marlboro, Maryland',
      price: '$625,000',
      address: '9606 Cedar Crest Way, Upper Marlboro, MD',
      beds: 4,
      baths: 3,
      sqft: '2,650',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      alt: 'Charming property in Greensboro, Maryland',
      price: '$385,000',
      address: '108 N Academy St, Greensboro, MD',
      beds: 3,
      baths: 2,
      sqft: '1,850',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa42a6e?w=800&q=80',
      alt: 'Lovely home in Riverdale, Maryland',
      price: '$475,000',
      address: '5912 61st Ave, Riverdale, MD',
      beds: 3,
      baths: 2,
      sqft: '1,980',
    },
  ],

  services: [
    {
      icon: 'home',
      title: 'Buying a Home',
      description: 'Personalized search, expert negotiation, and guidance through every step of your purchase.',
    },
    {
      icon: 'tag',
      title: 'Selling a Home',
      description: 'Strategic pricing, professional staging advice, and targeted marketing to maximize your return.',
    },
    {
      icon: 'chart',
      title: 'Investment Properties',
      description: 'Data-driven insights to help you build and grow a profitable real estate portfolio.',
    },
    {
      icon: 'search',
      title: 'Market Analysis',
      description: 'Comprehensive CMA reports and neighborhood trends to inform your decisions.',
    },
    {
      icon: 'map',
      title: 'Relocation Help',
      description: 'Seamless transitions for clients moving locally or from out of state.',
    },
    {
      icon: 'star',
      title: 'Luxury Listings',
      description: 'Discreet, high-touch representation for exceptional properties and discerning clients.',
    },
  ],

  benefits: [
    {
      title: 'Local Market Knowledge',
      description: 'Intimate understanding of neighborhoods, pricing trends, and off-market opportunities.',
    },
    {
      title: 'Strong Negotiation',
      description: 'A proven record of securing favorable terms in competitive markets.',
    },
    {
      title: 'Smooth Process',
      description: 'Meticulous coordination from offer to closing so nothing falls through the cracks.',
    },
    {
      title: 'Clear Communication',
      description: "Timely updates and honest guidance — you'll always know where things stand.",
    },
    {
      title: 'Modern Marketing',
      description: 'Professional photography, digital campaigns, and premium listing presentations.',
    },
    {
      title: 'Trusted Guidance',
      description: 'Your advocate at every stage, focused entirely on protecting your interests.',
    },
  ],

  testimonials: [
    {
      name: 'Michael & Sarah Chen',
      quote: 'Najiba made our home search effortless. Her knowledge of the market and calm professionalism gave us complete confidence from day one.',
      rating: 5,
    },
    {
      name: 'David Rodriguez',
      quote: 'We sold above asking in under two weeks. Her marketing strategy and negotiation skills are truly world-class.',
      rating: 5,
    },
    {
      name: 'Jennifer Walsh',
      quote: 'As a first-time buyer, I felt supported every step of the way. Najiba explained everything clearly and fought hard for us.',
      rating: 5,
    },
  ],
};
