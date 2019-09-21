import gql from 'graphql-tag'

export default gql`
mutation removeUser ($id: String!, $email: String!){
  removeUser(id: $id, email: $email) {
    users {
      username
      email
    }
  }
}
`