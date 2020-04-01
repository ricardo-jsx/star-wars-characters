import { gql } from 'apollo-boost';

export const GET_LUKE = gql`
  {
    character(id: 1) {
      id
      name
      img
      starships {
        id
        name
        img
      }
    }
  }
`;

//TODO
export const GET_CHARACTERS = gql`
  {
    character(id: 1) {
      id
    }
  }
`;
