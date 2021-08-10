const { User } = require('../models')
const bcrypt = require('bcryptjs')

const createTestUser = async () => {
  console.log('creating user')
  const hash = bcrypt.hashSync('test12', 10);
  await User.create({
    email: 'test@test.com',
    passwordHash: hash
  })
}

module.exports = createTestUser
