import Head from 'next/head'
import Container from '../components/global/Container'
import FullPage from '../components/global/FullPage'
import Header from '../components/global/Header'
import Card from '../components/global/Card'
import Image from 'next/image'

import logo from '../assets/images/logo.png'

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
            label={`Learn a bit about me.`}
            labelClassName='font-2'
          />
          <div className='grid grid-2_60-40 gap-2'>
            <Card 
              cardBorder={true}
              cardPadding={true}
              cardRounded={true }
              cardBg={true}
              cardBgHover={true}
            >
              <div className='about-me flex f-d-col gap-1'>
                <p>
                  I am a self taught front end web developer with 1 year of experience in creating dynamic and responsive web applications using React and Next.js frameworks. 
                </p>
                <p>
                  My expertise in HTML, CSS, and JavaScript allows me to build visually appealing and user-friendly websites. I have a solid understanding of the principles of component-based development, and am passionate about creating high-performance and scalable web applications that provide an exceptional user experience.
                </p>
                <p>
                  I am a fast learner, and I am always eager to expand my skillset and improve my development process. I am excited to continue learning and growing as a developer, and am eager to apply my skills to real-world projects.
                </p>
                <p>
                  In my free time, I love going for long walks with my dog, Ivy. I am also currently learning CAD modelling so I can 3D print my own designs.  
                </p>
              </div>
            </Card>
            <div id='hide-mobile' className='w-100 flex justify-center'>
              <Image 
                style={{objectFit: 'contain'}}
                id='hide-mobile'
                className='w-100' 
                src={logo} 
                alt='ryanbriggs.dev logo'
                height={300}
              />
            </div>
          </div>
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
          <div className="grid grid-3">
            <Card width={'w-100'} cardBorder={true} cardPadding={true} cardRounded={true} cardBg={true}>
              <Image src={logo} width={150} height={150}/>
            </Card>
          </div>
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
