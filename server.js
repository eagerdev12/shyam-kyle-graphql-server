const express = require('express'),
    { ApolloServer, gql } = require('apollo-server-express'),
    cors = require("cors");

// graphql Server

const expressPlayground = require('graphql-playground-middleware-express').default,
    schema = require('./src/graphql/schema'),
    graphqlServer = new ApolloServer({
        schema,
        playground: true
    });

graphqlServer.start().then(() => {
    const app = express();
    app.use(cors());

    graphqlServer.applyMiddleware({ app });
    app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

    app.listen({ port: 4000 }, () =>
        console.log(`graphqlServer ready at http://localhost:4000${graphqlServer.graphqlPath}`)
    );
})
    .catch((error) => {
        console.log('graphqlServer start error: ', error);
    });

// rest api server

const restServer = express(),
    apiRoutes = require('./src/rest/routes');
restServer.use(cors());
restServer.use('/api', apiRoutes);

restServer.listen(5000, () => {
    console.log(`rest-api server ready at http://localhost:5000/api`);
})
    .catch((error) => {
        console.log('rest-api server start error: ', error);
    });