/* eslint-disable @typescript-eslint/naming-convention */
import '../styles/globals.css';
import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { useApollo } from '../apollo/apolloClient';

export default function App({ Component, pageProps }: AppProps<{ initializeApollo: NormalizedCacheObject }>) {
  const apolloClient = useApollo(pageProps.initializeApollo);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
