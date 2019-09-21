import gql from 'graphql-tag'

export default gql`
  mutation updateTask ($id: String!, $title: String!){
    updateTask(id: $id, title: $title) {
      _id
      title
    }
  }
`