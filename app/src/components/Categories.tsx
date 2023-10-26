import React, { useEffect } from 'react';
import { useState } from 'react';
import ClassnameInfo from '../../../src/types/classnameInfo';
import Category from './Category';

export default function Categories({ data }: { data: ClassnameInfo[] }) {
  const [groups, setGroups] = useState<Record<string, ClassnameInfo[]>>({});

  useEffect(() => {
    let newGroups: Record<string, ClassnameInfo[]> = {};

    data.forEach((item) => {
      if (item.category === 'Unknown' || item.category === 'Variable') {
        return;
      }

      if (newGroups[item.category]) {
        if (
          !newGroups[item.category].find((exItem) => exItem.name === item.name)
        ) {
          newGroups[item.category].push(item);
        }
      } else {
        newGroups[item.category] = [item];
      }
    });

    setGroups(newGroups);
  }, [data]);

  return (
    <div className="my-8">
      <h2 className="mb-4 text-2xl font-medium">
        Class names based on categories
      </h2>
      <div className="grid md:grid-cols-3 gap-4 px-4">
        {Object.entries(groups).map(([groupName, items]) => (
          <Category key={groupName} name={groupName} items={items} />
        ))}
      </div>
    </div>
  );
}
