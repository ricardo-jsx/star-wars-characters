const { gql } = require('apollo-server-express');
const axios = require('axios');

const typeDefs = gql`
  type Character {
    id: Int!
    name: String
    height: String
    mass: String
    gender: String
    img: String
    starships: [Starship]
  }

  type Starship {
    id: Int!
    url: String
    name: String
    model: String
    img: String
  }

  type Query {
    character(id: Int): Character
  }
`;

const resolvers = {
  Query: {
    async character(_, args) {
      const character = await axios.get(`https://swapi.co/api/people/${args.id}`);

      return {...character.data, id: args.id };
    },
  },
  Character: {
    async starships(parent) {
      const starships = await Promise.all(parent.starships.map(axios.get)).then(arr => arr.map(elem => elem.data));
      return starships.map(ship => ({...ship, id: Number(ship.url.split("/").slice(-2, -1)[0])}));
    },
    img(parent) {
      return `/resources/characters/${parent.id}.jpg`;
    }
  },
  Starship: {
    img(parent) {
      return `/resources/starships/${parent.id}.jpg`;
    }
  }
};

module.exports = { typeDefs, resolvers };