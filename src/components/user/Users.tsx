import React, {Fragment, useState} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { IUser, useAddUserMutation, IGetProjectsQuery, GetProjectsDocument, useRemoveUserMutation, IProject } from '../../graphql/generated/graphql';
import { Grid, TextField, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddUser from './AddUser';
import ClearButton from '@material-ui/icons/Clear'
import useMe from '../../hooks/useMe';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

type PropType = Pick<IProject, "_id"> & {
  users: Pick<IUser, "username" | "email">[];
}


export default function Users({users, _id}: PropType) {
  const classes = useStyles();
  const me = useMe()
  const [removeUser] = useRemoveUserMutation({
    update: (client, {data}) => {
      const prev: IGetProjectsQuery | null = client.readQuery({query: GetProjectsDocument})
      if(prev && prev.projects && data && data.removeUser) {
        let projectIndex = prev.projects.findIndex(project => project._id == _id) 
        prev.projects[projectIndex].users = data.removeUser.users
        client.writeQuery({query: GetProjectsDocument, data: prev})
      }
    },
    onError: (error) => {alert(JSON.stringify(error))}
  })

  const handleSubmit = (email: string) => {
    removeUser({variables: {id: _id, email}})
  }

  return (
    <List className={classes.root}>
      {users.map(user => {
        return (
          <Fragment key={user.email}>
            <ListItem alignItems="flex-start" key={user.username}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {user.username}
                    </Typography>
                  </React.Fragment>
                }
              />
              { me && me.email !== user.email && (
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleSubmit(user.email)}>
                    <ClearButton />
                  </IconButton>
                </ListItemSecondaryAction>
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        )
      })}
      <AddUser _id={_id}/>
    </List>
  );
}
