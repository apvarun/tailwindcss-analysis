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
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm px-6 py-4 group hover:shadow-md transition-shadow">
      <h2 className="mb-4 text-lg font-bold leading-none tracking-tight">
        {name}
      </h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item.name}
            className="rounded-full px-2.5 py-0.5 text-white text-md font-semibold bg-black/60 group-hover:bg-black/80 transition-colors cursor-default"
          >
            {item.name.replaceAll('\\', '')}
          </span>
        ))}
      </div>
    </div>
  );
}
