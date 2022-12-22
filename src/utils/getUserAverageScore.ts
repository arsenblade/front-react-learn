import { ITopic } from "../types/topic.types";
import { IPointTest, IStatUser, IUser } from "../types/user.types";

export const getUserAverageScore = (currentUsers: IUser, allTopics: ITopic[]) => {
  const sortAllTopics = allTopics.sort((a, b) => a.numberTopic - b.numberTopic)
  const dictionaryTopics = new Map()
  sortAllTopics.forEach(topic => {
    dictionaryTopics.set(topic.relatedQuestionsId, {idTest: topic.relatedQuestionsId, points: 0, isFilled: false})
  }) 

  currentUsers.pointTests.forEach(pointTest => {
    dictionaryTopics.set(pointTest.idTest, {idTest: pointTest.idTest, points: pointTest.points, isFilled: true})
  })

  const resultArray:IStatUser[] = []

  dictionaryTopics.forEach(pointsTopic => {
    resultArray.push({isFilled: pointsTopic.isFilled, value: pointsTopic.points})
  })

  if(resultArray.length < allTopics.length) {
    for(let i = 0; i < allTopics.length - resultArray.length; i++) {
      resultArray.push({isFilled: false, value: 0})
    }
  }

  return resultArray;
}