import { gql } from 'apollo-boost';

export const GET_LUKE = gql`
  query Character($id: Int!) {
    character(id: $id) {
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
