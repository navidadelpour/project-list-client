import React, { Fragment, useState } from 'react'
import { useGetTasksQuery, IProject, useRemoveProjectMutation, GetProjectsDocument, IGetProjectsQuery, useUpdateProjectMutation, IUser } from '../../graphql/generated/graphql';
import Tasks from '../task/Tasks';
import AddTask from '../task/AddTask';
import { Paper, Divider, Grid, IconButton, TextField, CircularProgress } from '@material-ui/core';
import ClearButton from '@material-ui/icons/Clear'
import Users from '../user/Users';

type PropType = Pick<IProject, "_id">

export default function ProjectRemove({_id}: PropType) {
  const [remove] = useRemoveProjectMutation({
    variables: { id: _id},
    optimisticResponse: {
      __typename: "Mutation",
      removeProject: {
        __typename: "Project",
        _id
      }
    },
    update: (client, {data}) => {
      let prev: IGetProjectsQuery | null = client.readQuery({query: GetProjectsDocument})
      if(prev && prev.projects && data) {
        prev.projects = prev.projects.filter(project => project._id !== data.removeProject._id)
      }
      client.writeQuery({query: GetProjectsDocument, data: prev})
    }
  })

  const handleDeleteButtonClick = () => {
    remove()
  }

  return (
    <IconButton onClick={handleDeleteButtonClick} style={{
      position: "absolute",
      right: 5,
      top: 5,
    }}>
      <ClearButton fontSize="small" />
    </IconButton>
  )
}