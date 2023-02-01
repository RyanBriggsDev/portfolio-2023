import Head from 'next/head'
import Container from '../components/global/Container'
import FullPage from '../components/global/FullPage'
import Header from '../components/global/Header'
import Card from '../components/global/Card'
import Skills from '../components/Skills'
import Now from '../components/Now'
import Contact from '../components/Contact'
import Projects from '../components/global/Projects'
import About from '../components/global/About'

import Image from 'next/image'
import { useRouter } from 'next/router'

import logo from '../assets/images/logo.png'

import { useInView } from 'react-intersection-observer'

export default function Home() {

  const router = useRouter()
  const { ref: homeRef, inView: homeInView } = useInView({
    triggerOnce: true,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: nowRef, inView: nowInView } = useInView({
    triggerOnce: true,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
  });

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

        <FullPage id='home' refProp={homeRef}>
          <Container className={`mb-5 ${homeInView ? 'animate-in-right-1' : ''}`}>
            <Header 
              h1={`React / Next.js Frontend Developer 👨‍💻`}
              h1ClassName='font-4'
              label={`Hi. I'm Ryan.`}
              labelClassName='font-2'
            />
          </Container>
        </FullPage>

      <FullPage id='about' refProp={aboutRef}>
        <Container className={`my-5 ${aboutInView ? 'animate-in-left-1' : ''}`} >
          <Header
            h2={`About Me`}
            h2ClassName='font-3'
            label={`Learn a bit about me.`}
            labelClassName='font-2'
          />
          <About />
        </Container>
      </FullPage>

      <FullPage id='projects' refProp={projectsRef}>
        <Container className={`my-5 ${projectsInView ? 'animate-in-right-1' : ''}`}>
          <Header
            h2={`Projects`}
            h2ClassName='font-3'
            label={`My most recent projects.`}
            labelClassName='font-2'
            externalUrl={false}
            // btnText='View All'
            // btnClassName='btn-primary my-05'
            // btnOnClick={()=>router.push('/projects')}
          />
          <Projects />
          
        </Container>
      </FullPage>

      <FullPage id='skills' refProp={skillsRef}>
        <Container className={`my-5 ${skillsInView ? 'animate-in-left-1' : ''}`}>
          <Header
            h2={`Skills`}
            h2ClassName='font-3'
            label={`My tech stack.`}
            labelClassName='font-2'
          />
          <div>
            <Skills />
          </div>
        </Container>
      </FullPage>

      <FullPage id='now' refProp={nowRef}>
        <Container className={`my-5 ${nowInView ? 'animate-in-right-1' : ''}`}>
          <Header 
            h2={`Now`}
            h2ClassName='font-3'
            label={`What I'm working on right now.`}
            labelClassName='font-2'
          />
          <Now />
        </Container>
      </FullPage>

      <FullPage id='contact' refProp={contactRef}>
        <Container className={`my-5 ${contactInView ? 'animate-in-left-1' : ''}`}>
          <Header 
            h2={`Contact`}
            h2ClassName='font-3'
            label={`Fancy a chat? Connect with me.`}
            labelClassName='font-2'
          />
          <Contact />
        </Container>
      </FullPage>

    </>
  )
}
