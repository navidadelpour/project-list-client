import gql from 'graphql-tag'

export default gql`
mutation logout {
  logout {
    _id
  }
}
`