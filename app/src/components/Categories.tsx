import React, { useEffect } from 'react';
import { useState } from 'react';
import ClassnameInfo from '../../../src/types/classnameInfo';
import Category from './Category';

export default function Categories({ data }: { data: ClassnameInfo[] }) {
  const [groups, setGroups] = useState<Record<string, any>>({});

  useEffect(() => {
    let newGroups: Record<string, any> = {};

    data.forEach(item => {
      if (item.category === 'unknown' || item.category === 'variable') {
        return;
      }

      if (newGroups[item.category]) {
        newGroups[item.category].push(item);
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
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(groups).map(([groupName, items]) => (
          <Category name={groupName} items={items} />
        ))}
      </div>
    </div>
  );
}
