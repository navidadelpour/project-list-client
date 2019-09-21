import gql from 'graphql-tag'

export default gql`
  mutation removeTask($id: String!) {
    removeTask(id: $id) {
      _id
      completed
      title
    }
  }
`