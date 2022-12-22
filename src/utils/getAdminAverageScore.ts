import { ITopic } from "../types/topic.types";
import { IPointTest, IStatUser, IUser } from "../types/user.types";

export const getAdminAverageScore = (allUsers: IUser[], allTopics: ITopic[]) => {
  const sortAllTopics = allTopics.sort((a, b) => a.numberTopic - b.numberTopic)
  const dictionaryTopics = new Map()
  sortAllTopics.forEach(topic => {
    dictionaryTopics.set(topic.relatedQuestionsId, {idTest: topic.relatedQuestionsId, points: 0, isFilled: false})
  }) 

  allUsers.forEach(user => {
    user.pointTests.forEach(pointTest => {
      const points = dictionaryTopics.get(pointTest.idTest).points + pointTest.points
      dictionaryTopics.set(pointTest.idTest, {idTest: pointTest.idTest, points, isFilled: true})
    })
  })
  const resultArray:IStatUser[] = []

  dictionaryTopics.forEach(pointsTopic => {
    let averagePoints = pointsTopic.points / allUsers.filter(user => user.pointTests.find(pointTest => pointTest.idTest === pointsTopic.idTest)).length
    averagePoints = averagePoints * 100 % 10 === 0 ? averagePoints: Number((averagePoints).toFixed(1))
    resultArray.push({isFilled: pointsTopic.isFilled, value: averagePoints})
  })

  return resultArray;
}