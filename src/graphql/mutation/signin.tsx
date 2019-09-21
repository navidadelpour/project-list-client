import gql from 'graphql-tag'

export default gql`
mutation signin ($username: String!, $email: String!, $password: String!) {
  signin (username: $username, email: $email, password: $password) {
    _id
    token
  }
}
`