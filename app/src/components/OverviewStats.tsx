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
      <h2 className="mb-4 text-center text-2xl font-medium">Overall Stats</h2>
      <div className="flex flex-wrap gap-10 justify-evenly">
        {Object.entries(data).map(([key, value]) => (
          <div className="shadow px-8 py-4 rounded border">
            <div className="mb-2 text-lg text-gray-500">{keyNames[key]}</div>
            <div className="text-6xl font-extralight">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
