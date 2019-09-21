import gql from 'graphql-tag'

export default gql`
  mutation updateProject ($id: String!, $name: String!) {
    updateProject(id: $id, name: $name) {
      _id
      name
    }
  }
`