import Footer from 'components/Footer'
import Head from 'next/head'
import React from 'react'
import TopScrollButton from './TopScrollButton'

type Props = {
  title: string
}

const Container: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
      <TopScrollButton />
      <Footer />
    </div>
  )
}

export default Container
