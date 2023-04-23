import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/ApolloClient'

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
