import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <main className={"grid grid-cols-9"}>
        {/*  Sidebar */}
        <Sidebar />

        {/*  Feed */}
        <Feed />

        {/*  Widgets */}
        <Widgets />
      </main>
    </div>
  )
}

export default Home
