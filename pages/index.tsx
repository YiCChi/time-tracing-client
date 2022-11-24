import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export const ALL_USERS_QUERY = gql`
  query allUsers {
    users {
      id
      name
      age
    }
  }
`;

export interface User {
  id: number;
  name: string;
  age: number;
}

export default function Home() {
  const { data, loading, error } = useQuery<{ users: Array<User> }>(ALL_USERS_QUERY);

  if (error) return <div className={styles.container}>error</div>;
  if (loading) return <div className={styles.container}>loading</div>;

  return (
    <div className={styles.container}>
      {data?.users.map((user, index) => {
        const { id, name, age } = user;

        return <p key={index}>{`user id is ${id}, name is ${name}, age is ${age}`}</p>;
      })}
      <div>
        <Link href='/ssg'>go to SSG page</Link>
        <br />
        <Link href='/ssr'>go to SSR page</Link>
      </div>
    </div>
  );
}
