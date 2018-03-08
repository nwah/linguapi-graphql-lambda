const { send } = require('micro')
const { get, post, router } = require('microrouter')
const { microGraphiql, microGraphql } = require('apollo-server-micro')
const schema = require('./schema')

const graphqlHandler = microGraphql({ schema })
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' })

module.exports = router(
  get('/graphql', graphqlHandler),
  post('/graphql', graphqlHandler),
  get('/', graphiqlHandler),
  (req, res) => send(res, 404, 'not found'),
)