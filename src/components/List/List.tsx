import React from 'react';
import { ListItem, GENDER_TYPES, IAddress } from './ListItem';

const List = () => {
  const items = [
    {
      id: 1,
      name: 'Almaz',
      gender: GENDER_TYPES.MALE,
      age: 12,
      skills: ['HTML', 'CSS', 'JS'],
      address: {
        street: 'Manas st.',
        houses: [
          {int: 147}, 
          {int: 17}
        ]
      } as IAddress
    },
    {
      id: 2,
      name: 'Nayel',
      gender: GENDER_TYPES.MALE,
      age: null,
      skills: ['JS', 'ReactJS']
    },
    {
      id: 3,
      name: 'Aizhan',
      gender: GENDER_TYPES.FEMALE,
      skills: ['HTML', 'CSS', 'JS', 'Redux']
    },
    {
      id: 4,
      name: 'John',
      gender: GENDER_TYPES.OTHER,
      age: 50,
      skills: ['C++']
    }
  ]

  return (
    <div>
      <h1>List</h1>
      {items.map((item) => 
        <ListItem
          name={item.name}
          gender={item.gender}
          age={item.age}
          skills={item.skills}
          address={item.address}
        />
      )}
    </div>
  )
}

export default List
