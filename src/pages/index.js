import Head from 'next/head'
import Container from '../components/global/Container'
import FullPage from '../components/global/FullPage'
import Header from '../components/global/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>RyanBriggs.dev</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

        <FullPage id='home'>
          <Container>
            <Header 
              h1={`React / Next.js Frontend Developer 👨‍💻`}
              h1ClassName='font-4'
              label={`Hi. I'm Ryan.`}
              labelClassName='font-2'
            />
          </Container>
        </FullPage>

      <FullPage id='about'>
        <Container>
          <Header 
            h2={`About Me`}
            h2ClassName='font-3'
            label={`Learn a bit, or a lot, about me.`}
            labelClassName='font-2'
          />
        </Container>
      </FullPage>

      <FullPage id='projects'>
        <Container>
          <Header
            h1={`Projects`}
            h1ClassName='font-3'
            label={`What I've been working on.`}
            labelClassName='font-2'
          />
        </Container>
      </FullPage>

      <FullPage id='skills'>
        <Container>
          <Header 
            h1={`Skills`}
            h1ClassName='font-3'
            label={`My tech stack.`}
            labelClassName='font-2'
          />
        </Container>
      </FullPage>

      <FullPage id='now'>
        <Container>
          <Header 
            h1={`Now`}
            h1ClassName='font-3'
            label={`What I'm working on and future plans.`}
            labelClassName='font-2'
          />
        </Container>
      </FullPage>

      <FullPage id='contact'>
        <Container>
          <Header 
            h1={`Contact`}
            h1ClassName='font-3'
            label={`Fancy a chat? Connect with me.`}
            labelClassName='font-2'
          />
        </Container>
      </FullPage>

    </>
  )
}
