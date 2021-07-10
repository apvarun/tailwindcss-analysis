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
  return (
    <div className="my-8">
      <h2 className="mb-4 text-2xl font-medium">Overall Stats</h2>

      <div className="flex gap-2 mb-8">
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

      <div className="grid grid-cols-5 gap-4 my-2">
        <div className="shadow px-8 pt-4 pb-2 rounded border">
          <div className="text-6xl font-extralight">
            {data.selectorsByAttribute}
          </div>
          <div className="mb-2 text-gray-400">
            {keyNames.selectorsByAttribute}
          </div>
        </div>
        <div className="shadow px-8 pt-4 pb-2 rounded border">
          <div className="text-6xl font-extralight">
            {data.selectorsByClass}
          </div>
          <div className="mb-2 text-gray-400">{keyNames.selectorsByClass}</div>
        </div>
        <div className="shadow px-8 pt-4 pb-2 rounded border">
          <div className="text-6xl font-extralight">{data.selectorsById}</div>
          <div className="mb-2 text-gray-400">{keyNames.selectorsById}</div>
        </div>
        <div className="shadow px-8 pt-4 pb-2 rounded border">
          <div className="text-6xl font-extralight">
            {data.selectorsByPseudo}
          </div>
          <div className="mb-2 text-gray-400">{keyNames.selectorsByPseudo}</div>
        </div>
        <div className="shadow px-8 pt-4 pb-2 rounded border">
          <div className="text-6xl font-extralight">{data.selectorsByTag}</div>
          <div className="mb-2 text-gray-400">{keyNames.selectorsByTag}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-start">
        <div className="px-8 pt-4 pb-2 flex gap-2 items-center">
          <div className="text-gray-400">{keyNames.rules}</div>
          <div className="text-xl font-bold">{data.rules}</div>
        </div>
        <div className="px-8 pt-4 pb-2 flex gap-2 items-center">
          <div className="text-gray-400">{keyNames.declarations}</div>
          <div className="text-xl font-bold">{data.declarations}</div>
        </div>
      </div>
    </div>
  );
}
