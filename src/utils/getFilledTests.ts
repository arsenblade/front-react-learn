import { IStatUser } from "../types/user.types";

export const getFilledTests = (array: IStatUser[]) => {
  const countFilled = array.reduce((prev, current) => {
    if(current.isFilled === true) {
      prev++
      return prev;
    }
    else {
      return prev
    }
  }, 0)

  return countFilled
}