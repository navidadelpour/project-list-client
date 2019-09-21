import React, {Fragment, useState} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { IUser, useAddUserMutation, IGetProjectsQuery, GetProjectsDocument, IProject } from '../../graphql/generated/graphql';
import { Grid, TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import UserIcon from '@material-ui/icons/Person';

type PropType = Pick<IProject, "_id">
  
export default function AddUser({_id}: PropType) {
  const [email, setEmail] = useState("")
  const [add] = useAddUserMutation({
    variables: {email: email, id: _id},
    update: (client, {data}) => {
      const prev: IGetProjectsQuery | null = client.readQuery({query: GetProjectsDocument})
      if(prev && prev.projects && data && data.addUser) {
        let projectIndex = prev.projects.findIndex(project => project._id == _id) 
        prev.projects[projectIndex].users = data.addUser.users
        client.writeQuery({query: GetProjectsDocument, data: prev})
      } 
    },
    onError: (error) => {alert(JSON.stringify(error))}
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    add()
    setEmail("")
  }

  return (
    <Grid container justify="space-between">
      <Grid item>
        <UserIcon fontSize="large" />
      </Grid>
      <Grid item>
        <TextField value={email} onChange={handleChange} placeholder="new user"/>
      </Grid>
      <Grid item>
        <IconButton aria-label="plus" onClick={handleSubmit}>
          <AddIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
