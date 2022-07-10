import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsTransition from '../components/ProjectsTransition';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <ProjectsTransition />
        <Projects />
      </main>
    </div>
  );
}
