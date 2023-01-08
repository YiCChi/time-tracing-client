import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import { initializeApollo } from '../apollo/apolloClient';
import styles from '../styles/Home.module.css';
import type { User } from './client';
import { ALL_USERS_QUERY } from './client';

interface Props {
  users: User[];
}

export default function SSGHome(props: Props) {
  const data = { users: props.users };

  return (
    <div className={styles.container}>
      {data.users.map((user, index) => {
        const { id, userName } = user;

        return <p key={index}>{`user id is ${id}, name is ${userName}`}</p>;
      })}
      <div>check the terminal to confirm that data fetching run on node</div>
      <div>
        <Link href="/client">go to client page</Link>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  const res = await apolloClient.query<{ users: User[] }>({
    query: ALL_USERS_QUERY,
    context: { accessToken: context.req.cookies['auth-token'] ?? '' },
  });

  return {
    props: {
      initializeApollo: apolloClient.cache.extract(),
      users: res.data.users,
    },
  };
};
