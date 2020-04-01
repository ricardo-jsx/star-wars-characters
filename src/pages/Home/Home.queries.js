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
export const GET_PAGE = gql`
  query Page($page: Int!) {
    pageOfCharacters(page: $page) {
      count
      results {
        id
        name
        img
      }
    }
  }
`;
