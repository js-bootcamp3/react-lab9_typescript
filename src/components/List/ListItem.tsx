import React from 'react'
import { GENDER_TYPES, IAddress } from './../../types/student'

interface IProps {
  name: string;
  gender: GENDER_TYPES;
  age?: number | null;
  skills: string[];
  address?: IAddress
}
export const ListItem = ({name, gender, age, skills, address}: IProps) => {
  
  return (
    <div>
      <h2>{name}</h2>
      <div>{gender}</div>
      <div>{age}</div>
      <div>{skills.join(', ')}</div>
      {address && <div>
          <div>Street: {address.street}</div>
          <div>House: {address.houses[0].int}</div>
          <div>Apt: {address.houses[1].int}</div>
      </div>
      }
    </div>
  )
}

