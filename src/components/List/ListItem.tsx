import React from 'react'

export enum GENDER_TYPES {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
}

export interface IHouse {
  int: number
}
export interface IAddress {
  street: string
  houses: IHouse[]
}

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

