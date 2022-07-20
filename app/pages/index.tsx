import type { NextPage } from 'next'
import { NextSeo } from 'next-seo';
import { trpc } from '../lib/trpc';

const Home: NextPage = () => {

  const { data } = trpc.hello.me.useQuery({ name: "next" })

  return (
    <>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
      <div>
        <span>{JSON.stringify(data, null, 2)}</span>
      </div>
    </>
  )
}

export default Home
