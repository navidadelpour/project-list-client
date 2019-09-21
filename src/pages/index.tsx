import React, { Fragment } from 'react'
import Projects from '../components/project/Projects';
import CustomAppBar from '../components/CustomAppBar';
import { useMeQuery } from '../graphql/generated/graphql';
import { Redirect } from 'react-router';
import { CircularProgress } from '@material-ui/core';

const Home = () => {
  const {loading, error, data} = useMeQuery()
  
  if(loading) return <CircularProgress/>
  
  const me = data && data.me && data.me
  if(!me) return <Redirect to='/form'/>
  
  return (
    <Fragment>
      <CustomAppBar username={me.username} />
      <Projects {...me}/>      
    </Fragment>
  )
}

export default Home