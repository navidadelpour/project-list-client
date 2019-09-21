import React, { Fragment, useState } from 'react'
import { useAddTaskMutation, GetTasksDocument, IGetTasksQuery, IGetTasksQueryVariables, IProject } from '../../graphql/generated/graphql';
import { Grid, IconButton, Checkbox, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

type PropType = Pick<IProject, "_id">

export default function AddTask({_id}: PropType) {
  
  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)

  const [add] = useAddTaskMutation({
    variables: {title, projectId: _id, completed},
    optimisticResponse: {
      __typename: "Mutation",
      addTask: {
        __typename: "Task",
        _id: "123",
        title: title,
        completed: completed,
        project: {
          __typename: "Project",
          _id
        }
      }
    },
    update: (client, {data}) => {
      const prev: IGetTasksQuery | null = client.readQuery<IGetTasksQuery, IGetTasksQueryVariables>({
        query: GetTasksDocument,
        variables: {id: _id}
      })
      if(prev && prev.tasks && data && data.addTask) {
        prev.tasks.push(data.addTask)
        client.writeQuery<IGetTasksQuery, IGetTasksQueryVariables>({
          query: GetTasksDocument,
          variables: {id: _id},
          data: prev
        })
      }
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    add()
    setTitle("")
    setCompleted(false)
  }

  const handleCompletedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(!completed)
  }

  return (
    <Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Checkbox checked={completed || false} color="default" onChange={handleCompletedChange}/>
        </Grid>
        <Grid item>
          <TextField value={title} onChange={handleChange} placeholder="new Task"/>
        </Grid>
        <Grid item>
          <IconButton aria-label="plus" onClick={handleSubmit}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </Fragment>
  )
}
