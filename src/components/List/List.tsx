import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { ListItem } from './ListItem';
import {GENDER_TYPES, IAddress, TStudent } from './../../types/student'
import { ItemDetails } from './ItemDetails';

const List = () => {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState<TStudent | null>(null)

  const items: TStudent[] = [
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

  const handleClick = (item: TStudent) => {
    setActiveItem(item)
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }

  if (activeItem) {
    return  <ItemDetails item={activeItem} back={() => setActiveItem(null)}/>
  }

  return (
    <div>
      <h1>List</h1>
      <div><button onClick={handleLogout}>Log Out</button></div>
      {items.map((item: TStudent) => 
        <div key={item.id} onClick={() => handleClick(item)}>
          <ListItem
            name={item.name}
            gender={item.gender}
            age={item.age}
            skills={item.skills}
            address={item.address}
          />
        </div>
      )}
    </div>
  )
}

export default List
