import React, { useState } from 'react'
import ListItem from './ListItem'

const List = () => {
  const [list] = useState(['Atif', 'Nauman', 'Asim', 'Kamil', 'farukh'])

  return (
    <div className='container mt-5 mb-5'>
      <h2>List Example</h2>
      <ul className='list-group'>
        {list.map((x, index) => (
          <ListItem
            key={index}
            color={index % 2 === 0 ? 'red' : 'blue'}
            text={x} />
        ))}
      </ul>
      <br />
      <ol className='list-group'>
        {list.map((x, index) => (
          <ListItem 
          key={index} 
          id={++index} 
          color={index % 2 === 0 ? 'red' : 'blue'}
          text={x} />
        ))}
      </ol>
    </div>
  )
}
export default List
