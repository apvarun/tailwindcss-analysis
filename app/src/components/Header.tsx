import React from 'react';
import logo from '../assets/analysis-300px.png';

export default function Header() {
  return (
    <div className="transition duration-500 ease-in-out transform bg-white border rounded-lg flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row justify-between">
      <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
        <div className="inline-flex items-center">
          <img className="w-12 h-12 mr-2" src={logo} />
          <h2 className="block p-2 text-xl transition duration-500 ease-in-out transform cursor-pointer lg:text-x lg:mr-8">
            TailwindCSS Analysis
          </h2>
        </div>
      </a>
      <a
        href="https://github.com/apvarun/tailwindcss-analysis"
        target="_blank"
        className="w-auto px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-gray-600 border-gray-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 "
      >
        GitHub
      </a>
    </div>
  );
}
