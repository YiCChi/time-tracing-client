import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

const LOGIN_QUERY = gql`
  mutation login($userName: String!, $password: String!) {
    login(loginUserInput: { userName: $userName, password: $password }) {
      access_token
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({ userName: '', password: '' });
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [login, { error, loading }] = useMutation<{ login: { access_token: string } }>(LOGIN_QUERY);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void login({ variables: { ...user } }).then((res) => {
      const accessToken = res.data?.login.access_token ?? '';

      sessionStorage.setItem('accessToken', accessToken);
      document.cookie = `accessToken=${accessToken}`;
      void router.push('/client');
    });
  };

  if (error) return <div>error</div>;
  if (loading) return <div>loading</div>;

  return (
    <form onSubmit={onSubmit}>
      <label>username</label>
      <input type='text' name='userName' onChange={changeHandler} />
      <label>password</label>
      <input type='password' name='password' onChange={changeHandler} />
      <button type='submit'>login</button>
    </form>
  );
}
