import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type ICount = {
   __typename?: 'Count',
  count: Scalars['Float'],
};

export type IMutation = {
   __typename?: 'Mutation',
  addProject: IProject,
  updateProject: IProject,
  removeProject: IProject,
  removeProjects: ICount,
  addUser: IProject,
  removeUser: IProject,
  toggleCompleted: ITask,
  addTask: ITask,
  removeTask: ITask,
  updateTask: ITask,
  signin: IUser,
  login: IUser,
  logout: IUser,
  removeAll: Scalars['String'],
};


export type IMutationAddProjectArgs = {
  name: Scalars['String']
};


export type IMutationUpdateProjectArgs = {
  name: Scalars['String'],
  id: Scalars['String']
};


export type IMutationRemoveProjectArgs = {
  id: Scalars['String']
};


export type IMutationAddUserArgs = {
  email: Scalars['String'],
  id: Scalars['String']
};


export type IMutationRemoveUserArgs = {
  email: Scalars['String'],
  id: Scalars['String']
};


export type IMutationToggleCompletedArgs = {
  id: Scalars['String']
};


export type IMutationAddTaskArgs = {
  completed: Scalars['Boolean'],
  title: Scalars['String'],
  id: Scalars['String']
};


export type IMutationRemoveTaskArgs = {
  id: Scalars['String']
};


export type IMutationUpdateTaskArgs = {
  title: Scalars['String'],
  id: Scalars['String']
};


export type IMutationSigninArgs = {
  username: Scalars['String'],
  password: Scalars['String'],
  email: Scalars['String']
};


export type IMutationLoginArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};

export type IProject = {
   __typename?: 'Project',
  _id: Scalars['String'],
  name: Scalars['String'],
  tasks: Array<ITask>,
  users: Array<IUser>,
};

export type IQuery = {
   __typename?: 'Query',
  projects?: Maybe<Array<IProject>>,
  project?: Maybe<IProject>,
  allTasks: Array<ITask>,
  tasks: Array<ITask>,
  getTask: ITask,
  users: Array<IUser>,
  me: IUser,
};


export type IQueryProjectArgs = {
  id?: Maybe<Scalars['String']>
};


export type IQueryTasksArgs = {
  id: Scalars['String']
};


export type IQueryGetTaskArgs = {
  id: Scalars['String']
};

/** application roles */
export enum IRoles {
  Admin = 'ADMIN',
  User = 'USER'
}

export type ITask = {
   __typename?: 'Task',
  _id: Scalars['String'],
  title: Scalars['String'],
  project: IProject,
  completed?: Maybe<Scalars['Boolean']>,
};

export type IUser = {
   __typename?: 'User',
  _id: Scalars['String'],
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  token?: Maybe<Scalars['String']>,
  role: IRoles,
  projects: Array<IProject>,
};

export type IX = {
   __typename?: 'x',
  d: Scalars['String'],
};
export type IAddProjectMutationVariables = {
  name: Scalars['String']
};


export type IAddProjectMutation = (
  { __typename?: 'Mutation' }
  & { addProject: (
    { __typename?: 'Project' }
    & Pick<IProject, '_id' | 'name'>
  ) }
);

export type IAddTaskMutationVariables = {
  projectId: Scalars['String'],
  title: Scalars['String'],
  completed: Scalars['Boolean']
};


export type IAddTaskMutation = (
  { __typename?: 'Mutation' }
  & { addTask: (
    { __typename?: 'Task' }
    & Pick<ITask, '_id' | 'title' | 'completed'>
    & { project: (
      { __typename?: 'Project' }
      & Pick<IProject, '_id'>
    ) }
  ) }
);

export type IAddUserMutationVariables = {
  id: Scalars['String'],
  email: Scalars['String']
};


export type IAddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser: (
    { __typename?: 'Project' }
    & { users: Array<(
      { __typename?: 'User' }
      & Pick<IUser, 'username' | 'email'>
    )> }
  ) }
);

export type IRemoveProjectMutationVariables = {
  id: Scalars['String']
};


export type IRemoveProjectMutation = (
  { __typename?: 'Mutation' }
  & { removeProject: (
    { __typename?: 'Project' }
    & Pick<IProject, '_id'>
  ) }
);

export type IRemoveTaskMutationVariables = {
  id: Scalars['String']
};


export type IRemoveTaskMutation = (
  { __typename?: 'Mutation' }
  & { removeTask: (
    { __typename?: 'Task' }
    & Pick<ITask, '_id' | 'completed' | 'title'>
  ) }
);

export type ILoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type ILoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & Pick<IUser, '_id' | 'token'>
  ) }
);

export type ILogoutMutationVariables = {};


export type ILogoutMutation = (
  { __typename?: 'Mutation' }
  & { logout: (
    { __typename?: 'User' }
    & Pick<IUser, '_id'>
  ) }
);

export type IRemoveUserMutationVariables = {
  id: Scalars['String'],
  email: Scalars['String']
};


export type IRemoveUserMutation = (
  { __typename?: 'Mutation' }
  & { removeUser: (
    { __typename?: 'Project' }
    & { users: Array<(
      { __typename?: 'User' }
      & Pick<IUser, 'username' | 'email'>
    )> }
  ) }
);

export type ISigninMutationVariables = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type ISigninMutation = (
  { __typename?: 'Mutation' }
  & { signin: (
    { __typename?: 'User' }
    & Pick<IUser, '_id' | 'token'>
  ) }
);

export type IToggleCompletedMutationVariables = {
  id: Scalars['String']
};


export type IToggleCompletedMutation = (
  { __typename?: 'Mutation' }
  & { toggleCompleted: (
    { __typename?: 'Task' }
    & Pick<ITask, '_id'>
  ) }
);

export type IUpdateProjectMutationVariables = {
  id: Scalars['String'],
  name: Scalars['String']
};


export type IUpdateProjectMutation = (
  { __typename?: 'Mutation' }
  & { updateProject: (
    { __typename?: 'Project' }
    & Pick<IProject, '_id' | 'name'>
  ) }
);

export type IUpdateTaskMutationVariables = {
  id: Scalars['String'],
  title: Scalars['String']
};


export type IUpdateTaskMutation = (
  { __typename?: 'Mutation' }
  & { updateTask: (
    { __typename?: 'Task' }
    & Pick<ITask, '_id' | 'title'>
  ) }
);

export type IMeQueryVariables = {};


export type IMeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<IUser, 'username' | 'email'>
  ) }
);

export type IGetProjectsQueryVariables = {};


export type IGetProjectsQuery = (
  { __typename?: 'Query' }
  & { projects: Maybe<Array<(
    { __typename?: 'Project' }
    & Pick<IProject, '_id' | 'name'>
    & { users: Array<(
      { __typename?: 'User' }
      & Pick<IUser, 'username' | 'email'>
    )> }
  )>> }
);

export type IGetTasksQueryVariables = {
  id: Scalars['String']
};


export type IGetTasksQuery = (
  { __typename?: 'Query' }
  & { tasks: Array<(
    { __typename?: 'Task' }
    & Pick<ITask, 'title' | '_id' | 'completed'>
    & { project: (
      { __typename?: 'Project' }
      & Pick<IProject, '_id'>
    ) }
  )> }
);

export const AddProjectDocument = gql`
    mutation addProject($name: String!) {
  addProject(name: $name) {
    _id
    name
  }
}
    `;
export type IAddProjectMutationFn = ApolloReactCommon.MutationFunction<IAddProjectMutation, IAddProjectMutationVariables>;

    export function useAddProjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IAddProjectMutation, IAddProjectMutationVariables>) {
      return ApolloReactHooks.useMutation<IAddProjectMutation, IAddProjectMutationVariables>(AddProjectDocument, baseOptions);
    };
export type AddProjectMutationHookResult = ReturnType<typeof useAddProjectMutation>;
export type AddProjectMutationResult = ApolloReactCommon.MutationResult<IAddProjectMutation>;
export type AddProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<IAddProjectMutation, IAddProjectMutationVariables>;
export const AddTaskDocument = gql`
    mutation addTask($projectId: String!, $title: String!, $completed: Boolean!) {
  addTask(id: $projectId, title: $title, completed: $completed) {
    _id
    title
    completed
    project {
      _id
    }
  }
}
    `;
export type IAddTaskMutationFn = ApolloReactCommon.MutationFunction<IAddTaskMutation, IAddTaskMutationVariables>;

    export function useAddTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IAddTaskMutation, IAddTaskMutationVariables>) {
      return ApolloReactHooks.useMutation<IAddTaskMutation, IAddTaskMutationVariables>(AddTaskDocument, baseOptions);
    };
export type AddTaskMutationHookResult = ReturnType<typeof useAddTaskMutation>;
export type AddTaskMutationResult = ApolloReactCommon.MutationResult<IAddTaskMutation>;
export type AddTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<IAddTaskMutation, IAddTaskMutationVariables>;
export const AddUserDocument = gql`
    mutation addUser($id: String!, $email: String!) {
  addUser(id: $id, email: $email) {
    users {
      username
      email
    }
  }
}
    `;
export type IAddUserMutationFn = ApolloReactCommon.MutationFunction<IAddUserMutation, IAddUserMutationVariables>;

    export function useAddUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IAddUserMutation, IAddUserMutationVariables>) {
      return ApolloReactHooks.useMutation<IAddUserMutation, IAddUserMutationVariables>(AddUserDocument, baseOptions);
    };
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = ApolloReactCommon.MutationResult<IAddUserMutation>;
export type AddUserMutationOptions = ApolloReactCommon.BaseMutationOptions<IAddUserMutation, IAddUserMutationVariables>;
export const RemoveProjectDocument = gql`
    mutation removeProject($id: String!) {
  removeProject(id: $id) {
    _id
  }
}
    `;
export type IRemoveProjectMutationFn = ApolloReactCommon.MutationFunction<IRemoveProjectMutation, IRemoveProjectMutationVariables>;

    export function useRemoveProjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IRemoveProjectMutation, IRemoveProjectMutationVariables>) {
      return ApolloReactHooks.useMutation<IRemoveProjectMutation, IRemoveProjectMutationVariables>(RemoveProjectDocument, baseOptions);
    };
export type RemoveProjectMutationHookResult = ReturnType<typeof useRemoveProjectMutation>;
export type RemoveProjectMutationResult = ApolloReactCommon.MutationResult<IRemoveProjectMutation>;
export type RemoveProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<IRemoveProjectMutation, IRemoveProjectMutationVariables>;
export const RemoveTaskDocument = gql`
    mutation removeTask($id: String!) {
  removeTask(id: $id) {
    _id
    completed
    title
  }
}
    `;
export type IRemoveTaskMutationFn = ApolloReactCommon.MutationFunction<IRemoveTaskMutation, IRemoveTaskMutationVariables>;

    export function useRemoveTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IRemoveTaskMutation, IRemoveTaskMutationVariables>) {
      return ApolloReactHooks.useMutation<IRemoveTaskMutation, IRemoveTaskMutationVariables>(RemoveTaskDocument, baseOptions);
    };
export type RemoveTaskMutationHookResult = ReturnType<typeof useRemoveTaskMutation>;
export type RemoveTaskMutationResult = ApolloReactCommon.MutationResult<IRemoveTaskMutation>;
export type RemoveTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<IRemoveTaskMutation, IRemoveTaskMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    _id
    token
  }
}
    `;
export type ILoginMutationFn = ApolloReactCommon.MutationFunction<ILoginMutation, ILoginMutationVariables>;

    export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ILoginMutation, ILoginMutationVariables>) {
      return ApolloReactHooks.useMutation<ILoginMutation, ILoginMutationVariables>(LoginDocument, baseOptions);
    };
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<ILoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<ILoginMutation, ILoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout {
    _id
  }
}
    `;
export type ILogoutMutationFn = ApolloReactCommon.MutationFunction<ILogoutMutation, ILogoutMutationVariables>;

    export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ILogoutMutation, ILogoutMutationVariables>) {
      return ApolloReactHooks.useMutation<ILogoutMutation, ILogoutMutationVariables>(LogoutDocument, baseOptions);
    };
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<ILogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<ILogoutMutation, ILogoutMutationVariables>;
export const RemoveUserDocument = gql`
    mutation removeUser($id: String!, $email: String!) {
  removeUser(id: $id, email: $email) {
    users {
      username
      email
    }
  }
}
    `;
export type IRemoveUserMutationFn = ApolloReactCommon.MutationFunction<IRemoveUserMutation, IRemoveUserMutationVariables>;

    export function useRemoveUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IRemoveUserMutation, IRemoveUserMutationVariables>) {
      return ApolloReactHooks.useMutation<IRemoveUserMutation, IRemoveUserMutationVariables>(RemoveUserDocument, baseOptions);
    };
export type RemoveUserMutationHookResult = ReturnType<typeof useRemoveUserMutation>;
export type RemoveUserMutationResult = ApolloReactCommon.MutationResult<IRemoveUserMutation>;
export type RemoveUserMutationOptions = ApolloReactCommon.BaseMutationOptions<IRemoveUserMutation, IRemoveUserMutationVariables>;
export const SigninDocument = gql`
    mutation signin($username: String!, $email: String!, $password: String!) {
  signin(username: $username, email: $email, password: $password) {
    _id
    token
  }
}
    `;
export type ISigninMutationFn = ApolloReactCommon.MutationFunction<ISigninMutation, ISigninMutationVariables>;

    export function useSigninMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ISigninMutation, ISigninMutationVariables>) {
      return ApolloReactHooks.useMutation<ISigninMutation, ISigninMutationVariables>(SigninDocument, baseOptions);
    };
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = ApolloReactCommon.MutationResult<ISigninMutation>;
export type SigninMutationOptions = ApolloReactCommon.BaseMutationOptions<ISigninMutation, ISigninMutationVariables>;
export const ToggleCompletedDocument = gql`
    mutation toggleCompleted($id: String!) {
  toggleCompleted(id: $id) {
    _id
  }
}
    `;
export type IToggleCompletedMutationFn = ApolloReactCommon.MutationFunction<IToggleCompletedMutation, IToggleCompletedMutationVariables>;

    export function useToggleCompletedMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IToggleCompletedMutation, IToggleCompletedMutationVariables>) {
      return ApolloReactHooks.useMutation<IToggleCompletedMutation, IToggleCompletedMutationVariables>(ToggleCompletedDocument, baseOptions);
    };
export type ToggleCompletedMutationHookResult = ReturnType<typeof useToggleCompletedMutation>;
export type ToggleCompletedMutationResult = ApolloReactCommon.MutationResult<IToggleCompletedMutation>;
export type ToggleCompletedMutationOptions = ApolloReactCommon.BaseMutationOptions<IToggleCompletedMutation, IToggleCompletedMutationVariables>;
export const UpdateProjectDocument = gql`
    mutation updateProject($id: String!, $name: String!) {
  updateProject(id: $id, name: $name) {
    _id
    name
  }
}
    `;
export type IUpdateProjectMutationFn = ApolloReactCommon.MutationFunction<IUpdateProjectMutation, IUpdateProjectMutationVariables>;

    export function useUpdateProjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IUpdateProjectMutation, IUpdateProjectMutationVariables>) {
      return ApolloReactHooks.useMutation<IUpdateProjectMutation, IUpdateProjectMutationVariables>(UpdateProjectDocument, baseOptions);
    };
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = ApolloReactCommon.MutationResult<IUpdateProjectMutation>;
export type UpdateProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<IUpdateProjectMutation, IUpdateProjectMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation updateTask($id: String!, $title: String!) {
  updateTask(id: $id, title: $title) {
    _id
    title
  }
}
    `;
export type IUpdateTaskMutationFn = ApolloReactCommon.MutationFunction<IUpdateTaskMutation, IUpdateTaskMutationVariables>;

    export function useUpdateTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IUpdateTaskMutation, IUpdateTaskMutationVariables>) {
      return ApolloReactHooks.useMutation<IUpdateTaskMutation, IUpdateTaskMutationVariables>(UpdateTaskDocument, baseOptions);
    };
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = ApolloReactCommon.MutationResult<IUpdateTaskMutation>;
export type UpdateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<IUpdateTaskMutation, IUpdateTaskMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    username
    email
  }
}
    `;

    export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IMeQuery, IMeQueryVariables>) {
      return ApolloReactHooks.useQuery<IMeQuery, IMeQueryVariables>(MeDocument, baseOptions);
    };
      export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IMeQuery, IMeQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<IMeQuery, IMeQueryVariables>(MeDocument, baseOptions);
      };
      
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<IMeQuery, IMeQueryVariables>;
export const GetProjectsDocument = gql`
    query getProjects {
  projects {
    _id
    name
    users {
      username
      email
    }
  }
}
    `;

    export function useGetProjectsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGetProjectsQuery, IGetProjectsQueryVariables>) {
      return ApolloReactHooks.useQuery<IGetProjectsQuery, IGetProjectsQueryVariables>(GetProjectsDocument, baseOptions);
    };
      export function useGetProjectsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGetProjectsQuery, IGetProjectsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<IGetProjectsQuery, IGetProjectsQueryVariables>(GetProjectsDocument, baseOptions);
      };
      
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsQueryResult = ApolloReactCommon.QueryResult<IGetProjectsQuery, IGetProjectsQueryVariables>;
export const GetTasksDocument = gql`
    query getTasks($id: String!) {
  tasks(id: $id) {
    title
    _id
    completed
    project {
      _id
    }
  }
}
    `;

    export function useGetTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGetTasksQuery, IGetTasksQueryVariables>) {
      return ApolloReactHooks.useQuery<IGetTasksQuery, IGetTasksQueryVariables>(GetTasksDocument, baseOptions);
    };
      export function useGetTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGetTasksQuery, IGetTasksQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<IGetTasksQuery, IGetTasksQueryVariables>(GetTasksDocument, baseOptions);
      };
      
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksQueryResult = ApolloReactCommon.QueryResult<IGetTasksQuery, IGetTasksQueryVariables>;