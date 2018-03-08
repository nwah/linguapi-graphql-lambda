// graphql.js
const server = require('apollo-server-lambda')
const schema = require('./schema')

const graphqlHandler = server.graphqlLambda({ schema })
exports.graphqlHandler = (event, lambdaContext, callback) => {
  lambdaContext.callbackWaitsForEmptyEventLoop = false
  return graphqlHandler(event, lambdaContext, callback)
}

exports.graphiqlHandler = server.graphiqlLambda({
  endpointURL: '/dev/graphql',
})
