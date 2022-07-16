import React from 'react';
import Project from './Project';
import TimbrePreview from '../public/timbreprev.png';
import OnoLabPreview from '../public/onolabprev.png';
import LyingWordlePreview from '../public/lyingwordleprev.png';
import Chip8Preview from '../public/chip8prev.png';
import ThreeJSIcon from '../public/threejs.svg';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Container from './Container';

const Projects = () => {
  const projects = [
    {
      name: 'Timbre Music',
      image: TimbrePreview,
      blurb:
        'Navigate a procedurally-generated landscape to discover your new favorite tracks and curate your perfect Spotify playlist.',
      icons: [
        ['React', 'akar-icons:react-fill'],
        ['Node JS', 'akar-icons:node-fill'],
        [
          'Three JS',
          <Image
            src={ThreeJSIcon}
            width='40'
            height='40'
            key='threejs'
            alt='Three JS logo'
          />,
        ],
        ['Mongo DB', 'bxl:mongodb'],
        ['Framer Motion', 'gg:framer'],
      ],
      keywords: 'Three JS, OAuth, Spotify API',
      link: 'https://timbre.life',
    },
    {
      name: 'Lying Wordle',
      image: LyingWordlePreview,
      blurb:
        "Everyone's favorite puzzle game, Wordle... but with a twist. Can you outsmart the computer?",
      icons: [
        ['React', 'akar-icons:react-fill'],
        ['Tailwind', 'bxl:tailwind-css'],
        ['Flask', 'bxl:flask'],
        ['PostgreSQL', 'akar-icons:postgresql-fill'],
      ],
      keywords: 'React, SQL, Tailwind CSS',
      link: 'https://lying-wordle.netlify.app',
      github: 'https://github.com/rickono/lying-wordle',
    },
    {
      name: 'Ono Laboratory',
      image: OnoLabPreview,
      blurb: 'The MIT Stable Isotope Laboratory homepage.',
      icons: [
        ['Next JS', 'simple-icons:nextdotjs'],
        ['Framer Motion', 'gg:framer'],
        ['SCSS', 'akar-icons:sass-fill'],
      ],
      keywords: 'Next JS, Static Site Generation, Framer Motion',
      github: 'https://github.com/rickono/onolab-client',
    },
    {
      name: 'Rust+WASM CHIP-8 Interpreter',
      image: Chip8Preview,
      blurb:
        'The CHIP-8 is a simple programming language made to make video game programming easier on rudimentary computers, and WASM is a promising technology still in its infancy.',
      icons: [
        ['Rust', 'cib:rust'],
        ['WebAssembly', 'file-icons:webassembly'],
        ['Javascript', 'akar-icons:javascript-fill'],
      ],
      keywords: 'Rust, WebAssembly, Javascript',
      link: 'https://wasm-chip8.netlify.app',
      github: 'https://github.com/rickono/wasm-chip8',
    },
  ];
  return (
    <Container classes='bg-gray-800'>
      <div className='min-h-screen w-full text-slate-50 relative flex pt-12 pb-64 flex-col gap-16'>
        <h1 className='text-6xl font-bold'>Projects</h1>
        <p className='text-lg'>
          I enjoy working on side-projects in my free time to express my
          creativity and expand knowledge about new technologies.
        </p>
        <div className='flex flex-col gap-12'>
          {projects.map((project, idx) => (
            <Project key={project.name} {...project} idx={idx} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
