const express = require('express');
const path = require('path');

const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const PORT = process.env.PORT || 3000;

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

console.log('Types', typesArray[0]['definitions'][1]['fields']);
console.log('Resolvers', resolversArray);

async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });

    const server = new ApolloServer({
        schema
    });

    await server.start();

    server.applyMiddleware({app, path: '/graphql'});

    app.listen(PORT, () => {
        `Server listening on port ${PORT}...`
    })
}

startApolloServer();





