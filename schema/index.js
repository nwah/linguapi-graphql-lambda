const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')
const { UnihanReadingType, UnihanVariantType } = require('./constants')

const typeDefs = `
  enum UnihanReadingType {
    ${Object.keys(UnihanReadingType).join('\n')}
  }

  enum UnihanVariantType {
    ${Object.keys(UnihanVariantType).join('\n')}
  }

  type UnihanVariant {
    type: UnihanVariantType!
    character: UnihanCharacter!
    additional: String
  }

  type UnihanReading {
    type: UnihanReadingType!
    reading: String!
  }

  type UnihanCharacter {
    character: String!
    unicode: String!
    definitions: [String]!
    readings(types: [UnihanReadingType]): [UnihanReading]!
    variants(types: [UnihanVariantType]): [UnihanVariant]!
  }

  type Query {
    unihanCharacter(character: String): UnihanCharacter
  }

  schema {
    query: Query
  }
`

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})