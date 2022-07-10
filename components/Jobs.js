import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import ZayaLogo from '../public/zayalogo.png';
import MediaLogo from '../public/medialogo.svg';
import BCHLogo from '../public/bch.png';

const JobCard = ({ company, titles, image }) => {
  return (
    <div className='bg-white rounded-lg drop-shadow-lg p-6 flex items-center gap-6'>
      <Image src={image} alt='Media Lab logo' width='50' height='50' />
      <div>
        <h3 className='font-bold font-xl'>{company}</h3>
        {titles.map((title) => (
          <p className='font-lg' key={company}>
            {title}
          </p>
        ))}
      </div>
    </div>
  );
};

const Jobs = () => {
  const experience = [
    {
      company: 'Zaya Health',
      image: ZayaLogo,
      titles: ['Fullstack SWE Intern'],
    },
    {
      company: 'MIT Media Lab',
      image: MediaLogo,
      titles: ['Undergraduate Researcher', 'Mobile + Backend Engineer'],
    },
    {
      company: "Boston Children's Hospital",
      image: BCHLogo,
      titles: ['Computational Neuroscience Intern', 'Machine Learning Intern'],
    },
  ];
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3'>
      <div className='relative'>
        {experience.map((job) => (
          <div
            key={job.company}
            className='relative py-5 pr-10 before:absolute before:bottom-1/2 before:-right-1 before:h-3 before:w-3 before:rounded-full before:bg-black after:absolute after:bottom-0 after:bg-black after:h-full after:w-1 after:right-0'
          >
            <JobCard {...job} />
          </div>
        ))}
      </div>
      <div className='xl:col-span-2 px-20'>
        <h2 className='font-semibold text-3xl uppercase font-[Montserrat]'>
          Zaya Health
        </h2>
        <div className='flex gap-4 items-center my-4'>
          <Icon
            icon='vscode-icons:file-type-js-official'
            width='32'
            height='32'
          />
          <Icon
            icon='vscode-icons:file-type-typescript-official'
            width='32'
            height='32'
          />
          <Icon icon='vscode-icons:file-type-reactjs' width='32' height='32' />
          <Icon icon='vscode-icons:file-type-node' width='32' height='32' />
          <Icon icon='vscode-icons:file-type-firebase' width='32' height='32' />
        </div>
        <p className='mb-4'>Zaya health is a ...</p>
        <h4 className='font-bold mb-4 text-lg'>My Responsibilities</h4>
        <ul className='flex flex-col gap-4'>
          {[1, 2, 3, 4].map((num) => (
            <li key={num}>Did something</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
