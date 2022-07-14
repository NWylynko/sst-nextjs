import type { NextPage } from 'next'
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
      <div>
        <span>Hello World</span>
      </div>
    </>
  )
}

export default Home
