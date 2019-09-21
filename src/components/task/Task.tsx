import React, { Fragment, useState } from 'react'
import { ITask, IProject, useRemoveTaskMutation, GetTasksDocument, IGetTasksQuery, IGetTasksQueryVariables, useUpdateTaskMutation, useToggleCompletedMutation } from '../../graphql/generated/graphql';
import { Grid, IconButton, Checkbox, TextField } from '@material-ui/core';
import ClearButton from '@material-ui/icons/Clear'

type PropType = Pick<ITask, "_id" | "title" | "completed" > & {
  project: Pick<IProject, "_id">;
}

var timer : number = 0

export default function Task ({_id, title, completed, project}: PropType) {
  const [_title, _setTitle] = useState(title)
  const [_completed, _setCompleted] = useState(completed)
  const [remove] = useRemoveTaskMutation({
    variables: {id: _id},
    optimisticResponse: {
      __typename: "Mutation",
      removeTask: {
        __typename: "Task",
        _id,
        completed: false,
        title: title
      }
    },
    update: (client, {data}) => {
      const prev: IGetTasksQuery | null = client.readQuery<IGetTasksQuery, IGetTasksQueryVariables>({
        query: GetTasksDocument,
        variables: {id: project._id}
      })
      if(prev && prev.tasks && data) {
        prev.tasks = prev.tasks.filter(task => task._id !== data.removeTask._id)
        client.writeQuery<IGetTasksQuery, IGetTasksQueryVariables>({
          query: GetTasksDocument,
          variables: {id: project._id},
          data: prev
        })
      }
    },
    onError: (error) => alert(error)
  })

  const [update] = useUpdateTaskMutation({
    variables: {id: _id, title: _title},
  })

  const [toggle] = useToggleCompletedMutation({
    variables: {id: _id}
  })
  
  const handleDeleteButtonClick = () => {
    remove()
  }
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setTitle(e.target.value)
    clearTimeout(timer)
    timer = setTimeout(update, 500)
  }

  const handleCompletedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setCompleted(!_completed)
    toggle()
  }

  return (
    <Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Checkbox checked={_completed || false} color="default" onChange={handleCompletedChange}/>
        </Grid>
        <Grid item>
          <TextField value={_title} onChange={handleNameChange} placeholder="new Task"/>
        </Grid>
        <IconButton aria-label="clear" onClick={handleDeleteButtonClick}>
          <ClearButton fontSize="small" />
        </IconButton>
      </Grid>
    </Fragment>
  )
}