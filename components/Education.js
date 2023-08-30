import React from "react";
import Image from "next/image";
import MITSvg from "../public/MIT.svg";
import { Icon } from "@iconify/react";

const Education = () => {
  const [showAllClasses, setShowAllClasses] = React.useState(false);
  const courses = [
    "6.5820: Computer Networks (current)",
    "6.5830: Database Systems (current)",
    "6.1060 [6.172]: Software Performance Engineering",
    "6.5120: Formal Reasoning About Programs",
    "6.S050: Programming Language Design",
    "6.1120: Dynamic Computer Language Engineering",
    "6.1800: Computer Systems Engineering",
    "6.031: Software Construction",
    "6.046: Design and Analysis of Algorithms",
    "18.404: Theory of Computation",
    "6.036: Machine Learning",
    "6.003: Signal Processing",
    "6.004: Computation Structures",
    "6.041: Probabilistic Systems Analysis",
  ];
  const otherCourses = [
    "9.60: Machine Vision",
    "9.53: Emergent Computations in Distributed Neural Circuits",
    "9.40: Neural Computation",
    "9.66: Computational Cognitive Science",
    "6.0001: Intro to CS Programming in Python",
    "6.0002: Intro to Computational Thinking and Data Science",
    "6.006: Introduction to Algorithms",
    "6.042: Math for Computer Science",
    "6.057: Introduction to MATLAB",
    "6.148: Web Lab",
    "6.S191: Deep Learning",
    "18.03: Differential Equations",
    "14.13: Psychology and Economics",
    "14.01: Principles of Microeconomics",
    "14.02: Principles of Macroeconomics",
    "9.00: Psychological Science",
    "5.12: Organic Chemistry",
    "7.002: Fundamentals of Experimental Molecular Biology",
    "7.03: Genetics",
    "7.015: Introductory Biology",
    "9.01: Introduction to Neuroscience",
    "8.01: Physics I",
    "8.02: Physics II",
    "18.01 Calculus",
    "18.022: Calculus",
    "24.09: Minds and Machines",
    "21L.580: Translations",
    "12.011: Archaeological Science",
    "21W.022: Writing and Experience",
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold">Education</h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-10 py-16">
        <div className="col-span-2 flex items-center justify-center">
          <Image src={MITSvg} width="100" height="50" alt="MIT logo" />
        </div>
        <div className="col-span-3">
          <h3 className="text-3xl font-bold">
            Massachusetts Institute of Technology
          </h3>
          <h2 className="text-xl font-semibold italic">
            Candidate for Master of Engineering in Computer Science and
            Engineering (6-3)
          </h2>
          <h2 className="text-xl">Expected spring 2024, GPA: 5.0/5</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-10 pb-16">
        <div className="col-span-2 flex items-center justify-center">
          <Image src={MITSvg} width="100" height="50" alt="MIT logo" />
        </div>
        <div className="col-span-3">
          <h3 className="text-3xl font-bold">
            Massachusetts Institute of Technology
          </h3>
          <h2 className="text-xl font-semibold italic">
            Bachelor of Science in Computer Science and Engineering (6-3)
          </h2>
          <h2 className="text-xl italic">
            Minor in Brain and Cognitive Sciences (9)
          </h2>
          <h2 className="text-xl">2019-2023, GPA: 4.7/5</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-1 rounded-lg drop-shadow-lg bg-white p-6">
          <h3 className="text-2xl font-bold mb-2">MIT Coursework</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {courses.map((course) => (
              <p key={course} className="pl-2 pr-6 py-1 before:-z-50 relative">
                {course}
                <Icon
                  icon="akar-icons:chevron-right"
                  className="absolute text-white right-1 top-1/2 -translate-y-1/2"
                />
              </p>
            ))}
          </div>
          {showAllClasses && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
              {otherCourses.map((course) => (
                <p
                  key={course}
                  className="pl-2 pr-6 py-1 before:-z-50 relative"
                >
                  {course}
                  <Icon
                    icon="akar-icons:chevron-right"
                    className="absolute text-white right-1 top-1/2 -translate-y-1/2"
                  />
                </p>
              ))}
            </div>
          )}
          {!showAllClasses && (
            <button onClick={() => setShowAllClasses(!showAllClasses)}>
              <div className="flex justify-center items-center gap-2 mt-4">
                Show all
                <Icon icon="akar-icons:chevron-down" />
              </div>
            </button>
          )}
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-10 py-16">
        <div className="col-span-2 flex items-center justify-center">
          <p className="font-serif text-blue-700 text-3xl">ANDOVER</p>
        </div>
        <div className="col-span-3">
          <h3 className="text-3xl font-bold">Phillips Academy, Andover</h3>
          <h2 className="text-xl font-bold">GPA: 5.4/6, ACT: 36</h2>
        </div>
      </div>
    </div>
  );
};

export default Education;
