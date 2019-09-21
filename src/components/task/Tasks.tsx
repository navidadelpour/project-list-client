import React, { Fragment } from 'react'
import { ITask, IProject, useGetTasksQuery } from '../../graphql/generated/graphql';
import Task from './Task';
import AddTask from './AddTask';

type PropType = Pick<IProject, "_id">

export default function Tasks ({_id}: PropType) {
  const {data} = useGetTasksQuery({variables: { id: _id}})

  return (
    <Fragment>
    {data && data.tasks && data.tasks.length > 0 && data.tasks.map(task => (
      <Task key={task._id} {...task}/>
    ))}
      <AddTask _id={_id} />
    </Fragment>
  )
}