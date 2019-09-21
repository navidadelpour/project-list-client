import gql from 'graphql-tag'

export default gql`
mutation addUser ($id: String!, $email: String!){
  addUser(id: $id, email: $email) {
    users {
      username
      email
    }
  }
}
`