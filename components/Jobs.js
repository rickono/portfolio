import React, { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ZayaLogo from '../public/zayalogo.png';
import MediaLogo from '../public/medialogo.svg';
import BCHLogo from '../public/bch.png';

const JobCard = ({
  company,
  titles,
  image,
  isSelected,
  setSelected,
  borderColor,
}) => {
  return (
    <div
      className={`cursor-pointer bg-white rounded-lg drop-shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden before:absolute before:-inset-y-1 before:inset-x-32 ${borderColor} after:absolute after:inset-1 after:bg-white after:-z-10 before:-z-20 hover:before:inset-x-0 before:opacity-0 hover:before:opacity-100 before:transition-all after:transition-all after:rounded-md ${
        isSelected && 'before:opacity-100 before:inset-x-0'
      }`}
      onClick={() => {
        setSelected(company);
      }}
    >
      <Image src={image} alt='Media Lab logo' width='50' height='50' />
      <div className='flex flex-col items-center sm:items-start'>
        <h3 className='font-bold font-xl'>{company}</h3>
        {titles.map((title) => (
          <p className='font-lg text-center sm:text-left' key={company}>
            {title}
          </p>
        ))}
      </div>
    </div>
  );
};

const JobDetails = ({ company, details }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        layoutId='jobdetail'
        className='bg-white drop-shadow-lg rounded-md p-8'
        animate={{ translateX: 0, translateY: 0, opacity: 1 }}
        key='hello'
      >
        <h2 className='font-semibold text-3xl'>{company}</h2>
        <p className='italic'>{details.position}</p>
        <div className='flex gap-4 items-center my-4'>
          {details.icons.map((icon) => (
            <Icon
              icon={icon}
              key={`${company}${icon}`}
              height='30'
              width='30'
            />
          ))}
        </div>
        <p className='mb-4'>{details.description}</p>
        <h4 className='font-bold mb-4 text-lg'>My Responsibilities</h4>
        <ul className='flex flex-col gap-4'>
          {details.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

const Jobs = () => {
  const [selected, setSelected] = useState('Zaya Health');
  const experience = [
    {
      company: 'Zaya Health',
      image: ZayaLogo,
      titles: ['Fullstack SWE Intern'],
      borderColor: 'before:bg-indigo-400',
    },
    {
      company: 'MIT Media Lab',
      image: MediaLogo,
      titles: ['Undergraduate Researcher', 'Mobile + Backend Engineer'],
      borderColor: 'before:bg-black',
    },
    {
      company: "Boston Children's Hospital",
      image: BCHLogo,
      titles: ['Computational Neuroscience + Machine Learning Intern'],
      borderColor: 'before:bg-blue-800',
    },
  ];
  const jobDetails = {
    'Zaya Health': {
      position: 'Fullstack SWE Intern',
      icons: [
        'vscode-icons:file-type-js-official',
        'vscode-icons:file-type-typescript-official',
        'vscode-icons:file-type-reactjs',
        'vscode-icons:file-type-node',
        'vscode-icons:file-type-firebase',
      ],
      description:
        'Zaya health is a company that strives to make high-quality mental healthcare more accessible to everyone by demystifying the insurance claims process.',
      responsibilities: [
        'Started integration with various insurance company FHIR-standard APIs to streamline the authentication process for accessing patient insurance data.',
        'Built React UI components that are currently in production.',
        'Created NodeJS Express endpoints to interface the client-side app with the Firestore database.',
      ],
    },
    'MIT Media Lab': {
      position: 'Undergraduate Researcher, Software Engineer',
      icons: [
        'vscode-icons:file-type-reactjs',
        'logos:python',
        'bxl:flask',
        'logos:postgresql',
        'logos:c',
      ],
      description:
        'I worked with the Conformable Decoders group at the MIT Media Lab on a smart-facemask project, which records biosignatures through various sensors on a typical surgical mask. We submitted a paper to Nature Electronics that is currently in review.',
      responsibilities: [
        'Created a mobile app in React Native to connect to the facemask using BLE for easy data collection.',
        'Made a Flask server with a PostgreSQL database to store data from the facemask, and deployed the server to an Ubuntu VM using NGINX.',
        'Assisted with programming the firmware of the DA-14585 microcomputer in C.',
      ],
    },
    "Boston Children's Hospital": {
      position:
        'Machine Learning + Computational Neuroscience Intern @ Stamoulis Laboratory',
      icons: [
        'vscode-icons:file-type-matlab',
        'logos:python',
        'logos:pytorch-icon',
      ],
      description:
        'The Computational Neuroscience Laboratory, led by Dr. Caterina Stamoulis researches brain dynamics and networks given high-dimensional data, and works to develop novel signal processing techniques.',
      responsibilities: [
        'Used machine learning tools, such as the MATLAB Deep Learning Toolbox and PyTorch to perform classifications on the Adolescent Brain Cognitive Development dataset.',
        'Developed a pipeline in MATLAB for performing machine learning classifications on arbitrary data without need for extensive machine learning knowledge.',
      ],
    },
  };
  return (
    <>
      <h2 className='text-5xl font-bold'>Work Experience</h2>
      <div className='grid gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        <div className='relative flex flex-col gap-6'>
          {experience.map((job) => (
            <div key={job.company} className='relative'>
              <JobCard
                {...job}
                setSelected={setSelected}
                isSelected={selected === job.company}
              />
            </div>
          ))}
        </div>
        <div className='xl:col-span-2'>
          {Object.keys(jobDetails).map((job) => {
            return (
              job === selected && (
                <JobDetails details={jobDetails[job]} company={job} />
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Jobs;
