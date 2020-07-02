var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return "Hello world!";
    }
};

var app = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");

// import cors from "cors";
// import express from "express";
// import { ApolloServer } from "apollo-server-express";

// const app = express();
// app.use(cors());

// const schema = gql`
//     type Query {
//         me: User
//     }

//     type User {
//         username: String
//     }
// `;

// const data = {
//     me: {
//         username: "PTQ"
//     }
// };

// const resolvers = {
//     Query: {
//         me: () => {
//             return data;
//         }
//     }
// };

// const server = new ApolloServer({
//     typeDefs: schema,
//     resolvers
// });

// server.applyMiddleware({ app, path: "/graphql" });

// app.listen({ port: 8000 }, () => {
//     console.log("Apollo Server on http://localhost:8000/graphql");
// });
