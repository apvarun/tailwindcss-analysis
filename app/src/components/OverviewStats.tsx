import React from 'react';
import { Metrics } from '../../../src/types/metrics';

const keyNames: { [key: string]: string } = {
  colors: 'Colors',
  mediaQueries: 'Media Queries',
  selectors: 'Selectors',
  selectorsByAttribute: 'Selectors By Attribute',
  selectorsByClass: 'Selectors By Class',
  selectorsById: 'Selectors By Id',
  selectorsByPseudo: 'Selectors By Pseudo Class',
  selectorsByTag: 'Selectors By Tag',
  rules: 'Total CSS Rules',
  declarations: 'Total Properties Declared',
};

export default function OverviewStats({ data }: { data: Metrics }) {
  const secondaryStats: Array<keyof Metrics> = [
    'selectorsByAttribute',
    'selectorsByClass',
    'selectorsById',
    'selectorsByPseudo',
    'selectorsByTag',
  ];

  const tertiaryStats: Array<keyof Metrics> = ['rules', 'declarations'];

  return (
    <div className="my-8">
      <h2 className="mb-4 text-2xl font-bold">Overall Stats</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        <div className="px-16 pt-4 pb-2 border-r-2 -skew-x-12">
          <div className="skew-x-12 flex gap-2 items-end">
            <div className="text-6xl font-extralight">{data.colors}</div>
            <div className="mb-2 text-gray-400">{keyNames.colors}</div>
          </div>
        </div>
        <div className="px-16 pt-4 pb-2 border-r-2 -skew-x-12">
          <div className="skew-x-12 flex gap-2 items-end">
            <div className="text-6xl font-extralight">{data.mediaQueries}</div>
            <div className="mb-2 text-gray-400">{keyNames.mediaQueries}</div>
          </div>
        </div>
        <div className="px-16 pt-4 pb-2 -skew-x-12">
          <div className="skew-x-12 flex gap-2 items-end">
            <div className="text-6xl font-extralight">{data.selectors}</div>
            <div className="mb-2 text-gray-400">{keyNames.selectors}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-2">
        {secondaryStats.map((stat) => (
          <div
            key={stat}
            className="relative w-full rounded-lg border bg-white p-4 text-neutral-900 flex flex-col"
          >
            <div className="mb-2 text-gray-500 text-sm flex-1">
              {keyNames[stat]}
            </div>
            <div className="text-4xl font-medium text-right">{data[stat]}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 justify-start py-4">
        {tertiaryStats.map((stat) => (
          <div key={stat} className="pb-2 flex gap-2 items-center">
            <div className="text-gray-400">{keyNames[stat]}</div>
            <div className="text-xl font-bold">{data[stat]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
