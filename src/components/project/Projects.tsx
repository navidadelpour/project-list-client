import React, { Fragment } from 'react'
import Project from './Project';
import { useGetProjectsQuery, IUser } from '../../graphql/generated/graphql';
import AddProject from './AddProject';
import { Grid, CircularProgress } from '@material-ui/core/';

type PropType = Pick<IUser, 'username' | 'email'>

export default function Projects ({username, email}: PropType) {
  const {error, loading, data} = useGetProjectsQuery()

  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if(loading) return <CircularProgress/>

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {data && data.projects && data.projects.map(project => 
            <Grid key={project._id} item>
              <Project {...project} />
            </Grid>
          )}
          <Grid item>
            <AddProject username={username} email={email} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}