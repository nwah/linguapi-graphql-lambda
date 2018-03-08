const {
  UnihanReadingType,
  UnihanVariantType,
} = require('./constants')

const { Pool } = require('pg')
const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

const resultToCharacter = result =>
  result.rows.map(row => ({ character: row.ch, unicode: row.ucn }))[0]

const getCharacter = ch =>
  pool.query('SELECT ch, ucn FROM character WHERE ch = $1 LIMIT 1', [ch])
    .then(resultToCharacter)

const getCharacterByUnicode = ucn =>
  pool.query('SELECT ch, ucn FROM character WHERE ucn = $1 LIMIT 1', [ucn])
    .then(resultToCharacter)

const allowedReadingTypes = Object.values(UnihanReadingType)
const getReadings = (ch, types = allowedReadingTypes) =>
  pool.query('SELECT type, reading FROM reading WHERE ch = $1 AND type = ANY ($2)', [ch, types])
    .then(r => { console.log(types); return r })
    .then(result => result.rows)

const allowedVariantTypes = Object.values(UnihanVariantType)
const getVariants = (ch, types = allowedVariantTypes) =>
  pool.query('SELECT type, variant, additional FROM variant WHERE ch = $1 AND type = ANY ($2)', [ch, types])
    .then(r => { console.log(types); return r })
    .then(result => result.rows)

const getDefinitions = ch =>
  pool.query('SELECT definition FROM definition WHERE ch = $1', [ch])
    .then(result => result.rows.map(result => result.definition))

module.exports = {
  Query: {
    unihanCharacter: (_, { character }) => getCharacter(character),
  },

  UnihanReadingType,
  UnihanVariantType,

  UnihanCharacter: {
    variants: (obj, { types }) => getVariants(obj.character, types),
    readings: (obj, { types }) => getReadings(obj.character, types),
    definitions: obj => getDefinitions(obj.character)
  },

  UnihanVariant: {
    character: obj => getCharacterByUnicode(obj.variant)
  }  
}