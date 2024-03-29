import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>@RiteshK</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/male-technologist-type-1-2_1f468-1f3fb-200d-1f4bb.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
