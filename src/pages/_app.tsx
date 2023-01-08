/* eslint-disable @typescript-eslint/naming-convention */
import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { useApollo } from '../apollo/apolloClient';
import '../styles/globals.css';

export default function App({
  Component,
  pageProps,
}: AppProps<{ initializeApollo: NormalizedCacheObject }>) {
  const apolloClient = useApollo(pageProps.initializeApollo);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
