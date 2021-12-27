const gql = require('graphql-tag')

const typeDefs = gql`
    type Query {
        getTitles: [Title]
    }

    type Title {
        id: ID
        title: String
        thumbnail: String
    }
`

module.exports = typeDefs