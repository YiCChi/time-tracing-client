import { gql, useMutation, useQuery } from '@apollo/client';
import Link from 'next/link';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export const ALL_USERS_QUERY = gql`
  query allUsers {
    users {
      id
      userName
    }
  }
`;

const CREATE_USER = gql`
  mutation createUser($userName: String!, $password: String!, $email: EmailAddress!) {
    createUser(createUserInput: { userName: $userName, password: $password, email: $email }) {
      id
    }
  }
`;

export interface User {
  id: number;
  userName: string;
}

export interface CreateUserInput {
  userName: string;
  password: string;
  email: string;
}

export default function Home() {
  const [newUser, setNewUser] = useState<CreateUserInput>({
    userName: '',
    password: '',
    email: '',
  });
  const [createUser] = useMutation(CREATE_USER);
  const { data, loading, error } = useQuery<{ users: User[] }>(ALL_USERS_QUERY, {
    pollInterval: 5000,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.currentTarget.name]: e.currentTarget.value });
  };

  if (error) return <div className={styles.container}>error</div>;
  if (loading) return <div className={styles.container}>loading</div>;

  return (
    <div className={styles.container}>
      {data?.users.map((user, index) => {
        const { id, userName } = user;

        return <li key={index}>{`user id is ${id}, name is ${userName}`}</li>;
      })}
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void createUser({ variables: { ...newUser } });
          }}
        >
          <div>
            <span style={{ marginRight: '5px' }}>username</span>
            <input type='text' name='userName' onChange={changeHandler} />
          </div>
          <div>
            <span style={{ marginRight: '5px' }}>password</span>
            <input type='password' name='password' onChange={changeHandler} />
          </div>
          <div>
            <span style={{ marginRight: '5px' }}>email</span>
            <input type='email' name='email' onChange={changeHandler} />
          </div>
          <button type='submit'>logon</button>
        </form>
      </div>

      <div>
        <Link href='/ssg'>go to SSG page</Link>
      </div>
    </div>
  );
}
