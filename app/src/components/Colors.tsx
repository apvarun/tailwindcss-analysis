import React, { useMemo } from 'react'
import ClassnameInfo from '../../../src/types/classnameInfo'

export const Colors = ({ data }: { data: ClassnameInfo[] }) => {

  const colors = useMemo(() => {
    const textAndBg = data.filter(item => item.category === 'Text' || item.category === 'Background')
    const allTags = textAndBg.map(item => item.name);

    const colorTags = allTags.filter(tag => {
      const hexCodeRegex = /(?:$|^|)#?([0-9a-f]{6}|[0-9a-f]{3})(?:$|^|)/gi
      const colorRegex = /(?:$|^|)(red-|blue-|indigo-|cool-gray-|pink-|yellow-|teal-|gray-|orange-|green-|purple-)(50|100|200|300|400|500|600|700|800|900)(?:$|^|)/gi
      if (tag.includes('[')) {
        return hexCodeRegex.test(tag);
      }
      return colorRegex.test(tag)
    })

    return colorTags
  }, data);

  return (
    <div>
      <h2 className='mb-4 text-2xl font-medium'>
        Colors
      </h2>
      <div className='flex flex-wrap gap-5 px-4'>
        {colors.map(color => <div key={color} className='flex flex-col items-center'>
          <div className={`w-16 h-16 rounded border ${color.replaceAll('\\', '').replace('text', 'bg')}`}>&nbsp;</div>
          <p>{color.replaceAll('\\', '')}</p>
        </div>)}
      </div>
    </div>
  )
}
