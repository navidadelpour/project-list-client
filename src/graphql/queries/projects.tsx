import gql from 'graphql-tag'

export default gql`
  query getProjects {
    projects {
      _id
      name
      users {
        username
        email
      }
    }
  }
`