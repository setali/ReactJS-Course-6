import Main from '../layout/Main'
import Head from 'next/head'

export default function Home () {
  return (
    <Main>
      <Head>
        <title>NextJS Course | HomePage</title>
      </Head>
      <h2>Welcome to HomePage</h2>
      <h3>Welcome {process.env.myName}</h3>
      <p>Welcome to NextJS</p>
    </Main>
  )
}
