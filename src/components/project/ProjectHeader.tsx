import React, { Fragment, useState } from 'react'
import { useGetTasksQuery, IProject, useRemoveProjectMutation, GetProjectsDocument, IGetProjectsQuery, useUpdateProjectMutation, IUser } from '../../graphql/generated/graphql';
import Tasks from '../task/Tasks';
import AddTask from '../task/AddTask';
import { Paper, Divider, Grid, IconButton, TextField, CircularProgress } from '@material-ui/core';
import ClearButton from '@material-ui/icons/Clear'
import Users from '../user/Users';
import ProjectRemove from './ProjectRemove';

type PropType = Pick<IProject, "name" | "_id">
var timer: number = 0

export default function ProjectHeader({name, _id}: PropType) {
  const [_name, _setName] = useState(name)

  const [update] = useUpdateProjectMutation({
    variables: {id: _id, name: _name},
  })

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setName(e.target.value)
    clearTimeout(timer)
    timer = setTimeout(update, 500)
  }

  return (
    <Grid container alignContent="stretch" justify="space-between" direction="column">
      <Grid item style={{position: "relative"}}>
        <TextField
          hiddenLabel
          variant="filled"
          value={_name}
          onChange={handleNameChange}
          style={{
            display:"flex",
            flexGrow:1,
            alignItems: "center",
          }}
          InputProps={{
            "style": {
              paddingRight: 45,
              width: "100%"
            }
          }}
        />
        <ProjectRemove _id={_id}/>
      </Grid>
    </Grid>
  )
}