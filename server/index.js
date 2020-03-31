const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require("cors");

const { typeDefs, resolvers } = require('./graphql');
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use('/resources', express.static('resources'));
server.applyMiddleware({ app });

app.listen(
  { port: 4000 },
  () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);