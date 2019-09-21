import gql from 'graphql-tag'

export default gql`
  mutation toggleCompleted ($id: String!){
    toggleCompleted(id: $id){
      _id
    }
  }
`