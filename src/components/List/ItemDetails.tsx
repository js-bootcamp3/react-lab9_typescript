import React from 'react'
import { TStudent } from './../../types/student'

type TProps = {
  item: TStudent;
  back: () => void;
}
export const ItemDetails = ({ item, back }: TProps) => {
  return (
    <div>
      <button onClick={back}>Back</button>
      <h1>{item.name}</h1>
      <div>{item.age}</div>
      <div>{item.skills.join(', ')}</div>
    </div>
  )
}
