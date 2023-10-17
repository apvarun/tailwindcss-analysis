import React from 'react';
import ClassnameInfo from '../../../src/types/classnameInfo';

export default function Category({
  name,
  items,
}: {
  name: string;
  items: ClassnameInfo[];
}) {
  return (
    <div className="p-4 rounded bg-gray-100">
      <div className="text-xl font-semibold mb-2">{name}</div>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <span className="px-2 py-0.5 bg-gray-600 rounded text-white">
            {item.name.replaceAll('\\', '')}
          </span>
        ))}
      </div>
    </div>
  );
}
