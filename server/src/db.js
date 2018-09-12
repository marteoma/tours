const pgp = require('pg-promise')()

const con = {
  database: 'tours',
  user: 'postgres',
  password: 'marteoma'
}
const db = pgp(con)

module.exports = db
