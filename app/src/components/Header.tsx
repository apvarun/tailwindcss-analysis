import React from 'react';
import logo from '../assets/analysis-300px.png';

export default function Header() {
  return (
    <div className="bg-white border border-neutral-200/60 rounded-md flex flex-col flex-wrap justify-center px-4 py-2 mx-auto md:items-center md:flex-row md:justify-between my-4">
      <a
        href="/"
        className="pr-2 lg:pr-8 lg:px-6 focus:outline-none text-center md:text-left"
      >
        <div className="inline-flex items-center">
          <img className="w-12 h-12 mr-2" src={logo} />
          <h2 className="block p-2 text-xl cursor-pointer lg:text-x lg:mr-8">
            TailwindCSS Analysis
          </h2>
        </div>
      </a>
      <a
        href="https://github.com/apvarun/tailwindcss-analysis"
        target="_blank"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-neutral-950 hover:bg-neutral-700 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none"
      >
        GitHub
      </a>
    </div>
  );
}
