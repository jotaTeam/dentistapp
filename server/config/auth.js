module.exports = {
  salt: process.env.SALT || 10,
  secret: process.env.SECRET || 'carmelita',
  expireIn: process.env.EXPIRES || '1d'
}