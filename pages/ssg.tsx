import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { initializeApollo } from '../apollo/apolloClient';
import styles from '../styles/Home.module.css';
import type { User } from '.';
import { ALL_USERS_QUERY } from '.';

interface Props {
  users: Array<User>;
}

export default function SSGHome(props: Props) {
  const data = { users: props.users };

  return (
    <div className={styles.container}>
      {data.users.map((user, index) => {
        const { id, name, age } = user;

        return <p key={index}>{`user id is ${id}, name is ${name}, age is ${age}`}</p>;
      })}
      <div>check the terminal to confirm that data fetching run on node</div>
      <div>
        <Link href='/'>go to client page</Link>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const res = await apolloClient.query<{ users: Array<User> }>({
    query: ALL_USERS_QUERY,
  });

  console.log('SSG: ', res.data);

  return {
    props: {
      initializeApollo: apolloClient.cache.extract(),
      users: res.data.users,
    },
  };
};
