const fetch = require('node-fetch')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Query {
    character(text: String!): Character
  }

  type Character {
    unicode: String!
  }

  schema {
    query: Query
  }
`

const resolvers = {
  Query: {
    character: (_, { text }) => ({ unicode: text })
  }
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})