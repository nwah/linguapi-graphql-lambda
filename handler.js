// graphql.js
const server = require('apollo-server-lambda')
const schema = require('./schema')

exports.graphqlHandler = server.graphqlLambda({ schema })
exports.graphiqlHandler = server.graphiqlLambda({
  endpointURL: '/dev/graphql',
})