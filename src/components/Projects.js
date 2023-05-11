import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I love the creative process of designing and building applications, both individually or as a part of a team.
          </p>
        </div>
        <div className="w-full m-auto md:w-9/12 lg:w-6/12 xl:w-6/12 mb-5">
          {projects.map((project) => (
            <div className="w-full">
              <a
                href={project.link}
                key={project.image}
                target='_blank'
                rel="noreferrer"
                className="sm:w-1/2 no-wrap w-40 p-4">
                <div className="flex h-full w-full relative">
                  <img
                    alt="gallery"
                    className="top-0 left-0 w-full inset-0 object-center rounded-md"
                    src={project.image}
                  />
                  <div className="absolute flex flex-col justify-center top-0 left-0 w-full h-full px-8 py-10 z-10 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}