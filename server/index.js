
const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');
const { JSDOM } = require("jsdom");

const typeDefs = gql`
  type Character {
    id: Int
    name: String
    height: String
    mass: String
    gender: String
    imgs: [String]
    starships: [Starship]
  }

  type Starship {
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
      const imgs = await fetchCharacterImgs(character.name);

      return {...character.data, imgs, id: args.id };
    },
  },
  Character: {
    starships(parent) {
      console.log(parent.id);
      return [{ name: 'X Wing' }]
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

async function fetchCharacterImgs(name = '') {
  const nameWithoutSpaces = name.split(' ').join('-');
  const characterPage = await axios.get(`https://www.starwars.com/databank/${nameWithoutSpaces}`);
  const { document } = (new JSDOM(characterPage.data)).window;

  console.log(document.querySelector("#ref-1-1").textContent)

  return ['Hello'];
}