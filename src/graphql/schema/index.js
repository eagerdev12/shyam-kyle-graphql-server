const { makeExecutableSchema } = require('@graphql-tools/schema')
const { mergeResolvers } = require('@graphql-tools/merge');

const mediaSchema = require('./media')

const schema = makeExecutableSchema({
    typeDefs: [
        mediaSchema.typeDefs,
    ],
    resolvers: mergeResolvers(
        mediaSchema.resolvers,
    )
})

module.exports = schema
