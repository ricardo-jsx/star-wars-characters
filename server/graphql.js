const { gql } = require('apollo-server-express');
const axios = require('axios');

const { getIdFromObj } = require('./utils');

const typeDefs = gql`
  type Character {
    id: Int!
    name: String
    height: String
    mass: String
    hair_color: String
    birth_year: String
    gender: String
    skin_color: String
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

  type PageOfCharacters {
    count: Int
    results: [Character]
  }

  type Query {
    character(id: Int!): Character
    pageOfCharacters(page: Int!): PageOfCharacters
  }
`;

const resolvers = {
  Query: {
    async character(_, args) {
      const character = await axios.get(`https://swapi.co/api/people/${args.id}`);

      return { ...character.data, id: args.id };
    },
    async pageOfCharacters(_, args) {
      const page = await axios.get(`https://swapi.co/api/people/?page=${args.page}`);

      return page.data;
    },
  },
  Character: {
    async starships(parent) {
      const starships = await Promise.all(parent.starships.map(axios.get)).then((arr) => arr.map((elem) => elem.data));
      return starships.map((ship) => ({ ...ship, id: getIdFromObj(ship) }));
    },
    id(parent) {
      return getIdFromObj(parent);
    },
    img(parent) {
      return `/resources/characters/${getIdFromObj(parent)}.jpg`;
    },
  },
  Starship: {
    img(parent) {
      return `/resources/starships/${parent.id}.jpg`;
    },
  },
};

module.exports = { typeDefs, resolvers };
