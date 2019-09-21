import React, { Fragment, useState } from 'react'
import { useGetTasksQuery, IProject, useRemoveProjectMutation, GetProjectsDocument, IGetProjectsQuery, useUpdateProjectMutation, IUser } from '../../graphql/generated/graphql';
import Tasks from '../task/Tasks';
import AddTask from '../task/AddTask';
import { Paper, Divider, Grid, IconButton, TextField, CircularProgress } from '@material-ui/core';
import ClearButton from '@material-ui/icons/Clear'
import Users from '../user/Users';
import ProjectHeader from './ProjectHeader';

type PropType = Pick<IProject, "name" | "_id"> & {
  users: Array<(Pick<IUser, 'username' | 'email'>)>
}

export default function Project ({name, _id, users}: PropType) {
  return (
    <Paper>
      <Grid container justify="space-between" direction="column">
        <ProjectHeader name={name} _id={_id} />
        <Tasks _id={_id}/>
        <Users users={users} _id={_id}/>
      </Grid>
    </Paper>
  )
}