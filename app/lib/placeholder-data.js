const user = {
  username: 'admin',
  email: 'admin@admin.com',
  passwordHash: 'password',
};

const guitars = [
  {
    type: 'ELECTRIC',
    make: 'Gibson',
    model: 'SG',
    year: 1985,
    price: 1.5,
    description: 'Amazing axe!',
    isSold: false,
  },

  {
    type: 'ACOUSTIC',
    make: 'Taylor',
    model: 'martin',
    year: 1981,
    price: 2.5,
    description: 'Amazing acoustic!',
    isSold: false,
  },

  {
    type: 'ELECTRIC',
    make: 'Fender',
    model: 'stratocaster',
    year: 1955,
    price: 5.5,
    description: 'Rare, excellent condition!',
    isSold: true,
  },

  {
    type: 'ACOUSTIC',
    make: 'Gibson',
    model: 'j45',
    year: 1945,
    price: 55.0,
    description: 'Extremely rare, one left in the entire world',
    isSold: false,
  },
];

module.exports = {
  user,
  guitars,
};
