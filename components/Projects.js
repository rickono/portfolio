import React from 'react';
import Project from './Project';
import TimbrePreview from '../public/timbreprev.png';
import OnoLabPreview from '../public/onolabprev.png';
import LyingWordlePreview from '../public/lyingwordleprev.png';
import Chip8Preview from '../public/chip8prev.png';
import ThreeJSIcon from '../public/threejs.svg';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Projects = () => {
  const projects = [
    {
      name: 'Timbre Music',
      image: TimbrePreview,
      blurb:
        'Navigate a procedurally-generated landscape to discover your new favorite tracks and curate your perfect Spotify playlist.',
      icons: [
        'akar-icons:react-fill',
        'akar-icons:node-fill',
        <Image
          src={ThreeJSIcon}
          width='40'
          height='40'
          key='threejs'
          alt='Three JS logo'
        />,
        'bxl:mongodb',
        'gg:framer',
      ],
      keywords: 'Three JS, OAuth, Spotify API',
    },
    {
      name: 'Lying Wordle',
      image: LyingWordlePreview,
      blurb:
        "Everyone's favorite puzzle game, Wordle... but with a twist. Can you outsmart the computer?",
      icons: [
        'akar-icons:react-fill',
        'bxl:tailwind-css',
        'bxl:flask',
        'akar-icons:postgresql-fill',
      ],
      keywords: 'React, SQL, Tailwind CSS',
    },
    {
      name: 'Ono Laboratory',
      image: OnoLabPreview,
      blurb: 'The MIT Stable Isotope Laboratory homepage.',
      icons: ['simple-icons:nextdotjs', 'gg:framer', 'akar-icons:sass-fill'],
      keywords: 'Next JS, Static Site Generation, Framer Motion',
    },
    {
      name: 'Rust+WASM CHIP-8 Interpreter',
      image: Chip8Preview,
      blurb:
        'The CHIP-8 is a simple programming language made to make video game programming easier on rudimentary computers, and WASM is a promising technology still in its infancy.',
      icons: [
        'cib:rust',
        'file-icons:webassembly',
        'akar-icons:javascript-fill',
      ],
      keywords: 'Rust, WebAssembly, Javascript',
    },
  ];
  return (
    <div className='min-h-screen w-full bg-gray-800 text-slate-50 relative flex pt-12 pb-64 flex-col px-4 md:px-24 lg:px-36 gap-16'>
      <h1 className='text-6xl font-bold'>Projects</h1>
      <p className='text-lg'>
        I enjoy working on side-projects in my free time to express my
        creativity and expand knowledge about new technologies.
      </p>
      {projects.map((project, idx) => (
        <Project key={project.name} {...project} idx={idx} />
      ))}
    </div>
  );
};

export default Projects;
