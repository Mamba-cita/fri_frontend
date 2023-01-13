import { gql } from "@apollo/client";

const ADD_JOB = gql`
  mutation AddJob(
    $name: String!
    $description: String!
    $status: JobStatus!
    $container: String!
    $size: String!
    $weight: String!
    $origin: String!
    $destination: String!
    $receiver: String!
    $empty_return:String!
    $clientId: ID!
  ) {
    addJob(
      name: $name
      description: $description
      status: $status
      container: $container
      size: $size
      weight: $weight
      origin: $origin
      destination: $destination
      receiver: $receiver
      empty_return:$empty_return
      clientId: $clientId
    ) {
      name
      id
      description
      status
      container
      size
      weight
      origin
      destination
      receiver
      empty_return

      client {
        id
        name
        email
        phone
      }
    }
  }
`;


const DELETE_JOB =gql`
mutation deleteJob($id: ID!){
    deleteJob(id: $id){
        id
    }

}


`;


const UPDATE_JOB = gql`
  mutation UpdateJob(
    $id: ID!
    $name: String!
    $description: String!
    $status: JobStatusUpdate!
    $container: String!
    $size: String!
    $weight: String!
    $origin: String!
    $destination: String!
    $receiver: String!
    $empty_return:String!
    
  ) {
    updateJob(
        id:$id
      name: $name
      description: $description
      status: $status
      container: $container
      size: $size
      weight: $weight
      origin: $origin
      destination: $destination
      receiver: $receiver
      empty_return:$empty_return
      
    ) {
      name
      id
      description
      status
      container
      size
      weight
      origin
      destination
      receiver
      empty_return

      client {
        id
        name
        email
        phone
      }
    }
  }
`;




export { ADD_JOB, DELETE_JOB, UPDATE_JOB};