import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
query getClients {
  clients {
    id
    name
    phone
    email
    location
  }
}
`;


export{ GET_CLIENTS };