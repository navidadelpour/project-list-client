import gql from 'graphql-tag'

export default gql`
  mutation addProject ($name: String!) {
    addProject(name:$name) {
      _id
      name
    }
  }
`