import gql from 'graphql-tag'

export default gql`
  mutation addTask ($projectId: String!, $title: String!, $completed: Boolean!) {
    addTask(id: $projectId, title: $title, completed: $completed) {
      _id
      title
      completed
      project {
        _id
      }
    }
  }
`