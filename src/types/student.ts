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

export type TStudent = {
  id: number,
  name: string,
  gender: GENDER_TYPES
  age?: number | null,
  skills: string[],
  address?: IAddress
}