import gql from 'graphql-tag'

export default gql`
  query getTasks($id: String!) {
    tasks(id: $id) {
      title
      _id
      completed
      project {
        _id
      }
    }
  }
`