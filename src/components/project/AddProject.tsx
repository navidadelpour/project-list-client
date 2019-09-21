import React, { Fragment, useState } from 'react'
import { useAddProjectMutation, GetProjectsDocument, IGetProjectsQuery, IUser } from '../../graphql/generated/graphql';
import { Paper, Grid, IconButton, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

type PropType = Pick<IUser, 'username' | 'email'>

export default function AddProject({username, email}: PropType) {
  const [name, setName] = useState("")
  
  const [add] = useAddProjectMutation({
    variables: {name},
    optimisticResponse: {
      __typename: "Mutation",
      addProject: {
        __typename: "Project",
        _id: "123",
        name,
      }
    },
    update: (client, {data}) => {
      const prev: IGetProjectsQuery | null = client.readQuery({query: GetProjectsDocument})
      if(prev && prev.projects && data && data.addProject) {
        prev.projects.push({ 
          ...data.addProject,
          users: [{
            __typename: "User",
            username,
            email
          }]
        })
        client.writeQuery({query: GetProjectsDocument, data: prev})
      }
    },
    onError: (error) => {alert(JSON.stringify(error))}
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    add()
    setName("")
  }

  return (
    <Paper>
        <Grid container alignContent="stretch" justify="space-between" direction="column">
          <Grid item style={{position: "relative"}}>
            <TextField
              variant="filled"
              label="New Project"
              value={name}
              onChange={handleChange}
                style={{
                display:"flex",
                flexGrow:1
              }}
              InputProps={{
                "style": {
                  paddingRight: 45
                }
              }}
            />
            <IconButton onClick={handleSubmit} style={{
              position: "absolute",
              right: 5,
              top: 5,
            }}>
              <AddIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>

    </Paper>
  )
}