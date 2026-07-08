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
      image: 'assets/listings/cedar-crest-way.jpg',
      alt: 'Beautiful home in Upper Marlboro, Maryland',
      price: '$590,000',
      address: '9606 Cedar Crest Way, Upper Marlboro, MD',
      beds: 4,
      baths: 3,
      sqft: '2,650',
    },
    {
      id: 2,
      image: 'assets/listings/academy-st.jpg',
      alt: 'Charming property in Greensboro, Maryland',
      price: '$239,900',
      address: '108 N Academy St, Greensboro, MD',
      beds: 3,
      baths: 2,
      sqft: '1,850',
    },
    {
      id: 3,
      image: 'assets/listings/61st-ave.jpg',
      alt: 'Lovely home in Riverdale, Maryland',
      price: '$340,000',
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
      name: 'Valued Client',
      quote: 'I had a wonderful experience working with you. You were professional, knowledgeable, and always available to answer my questions throughout the entire home buying process. You made everything smooth and stress free, and I always felt confident that you had my best interests in mind. I truly appreciate your dedication, honesty, and hard work. I highly recommend Najiba to anyone looking to buy or sell a home. Thank you for your outstanding service!',
      rating: 5,
    },
  ],
};
