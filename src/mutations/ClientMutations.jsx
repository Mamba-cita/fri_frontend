import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation addClient(
    $name: String!
    $email: String!
    $phone: String!
    $payment: String!
    $kra_pin: String!
    $location: String!
  ) {
    addClient(
      name: $name
      email: $email
      phone: $phone
      payment: $payment
      kra_pin: $kra_pin
      location: $location
    ){
      id
      name
      email
      phone
      payment
      kra_pin
      location
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
      location
    }
  }
`;

export { DELETE_CLIENT,ADD_CLIENT };
