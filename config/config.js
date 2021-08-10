module.exports = {
  "development": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": 'user_auth_development',
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
