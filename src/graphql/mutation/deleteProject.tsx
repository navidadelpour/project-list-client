import gql from 'graphql-tag'

export default gql`
  mutation removeProject($id: String!) {
    removeProject(id: $id) {
      _id
    }
  }
`