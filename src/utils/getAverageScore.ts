import { IStatUser } from "../types/user.types";

export const getAverageScore = (array: IStatUser[]) => {
  let countScore = 0;
  const allScore = array.reduce((prev, current) => {
    if(current.isFilled === true) {
      countScore++
      return prev + current.value
    }
    else {
      return prev
    }
  }, 0)

  if((allScore / countScore) * 10 % 10 === 0) {
    return (allScore / countScore)
  }

  else {
    return (allScore / countScore).toFixed(1)
  }
}