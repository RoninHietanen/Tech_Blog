const { User } = require('../models');

const userData = [
  {
    username: 'JennyJackson59',
    password: 'password'
    
  },
  {
    username: 'TheCodingMaster',
    password: 'password2'
  },
  {
    username: 'SisterSequelize',
    password: 'password3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;