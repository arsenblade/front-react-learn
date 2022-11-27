import { ITopic } from "../types/topic.types";
import { IUser } from "../types/user.types";

export const getCourseGraduates = (allUsers: IUser[], allTopics: ITopic[]) => {
  let countGraduates = 0;

  allUsers.forEach(user => {
    if(user.pointTests.length === allTopics.length) {
      countGraduates++
    }
  })

  return countGraduates;
} 