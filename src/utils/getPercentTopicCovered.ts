import { IUserState } from "../store/auth/auth.interface"
import { ITopic } from "../types/topic.types"
import { IStatUser, IUser } from "../types/user.types"

export const getPercentTopicCovered = (allUsers: IUser[], allTopics: ITopic[]) => {
  const sortAllTopics = allTopics.sort((a, b) => a.numberTopic - b.numberTopic)
  const dictionaryTopics = new Map()
  sortAllTopics.forEach(topic => {
    dictionaryTopics.set(topic.relatedQuestionsId, 0)
  }) 

  allUsers.forEach(user => {
    user.pointTests.forEach(pointTest => {
      const countCoveredUsers = dictionaryTopics.get(pointTest.idTest) + 1
      dictionaryTopics.set(pointTest.idTest, countCoveredUsers)
    })
  })

  const resultArray:IStatUser[] = []

  dictionaryTopics.forEach(countCoveredUsers => {
    const percent = (countCoveredUsers / allUsers.length) * 100 % 10 === 0 ? (countCoveredUsers / allUsers.length) * 100 : Number(((countCoveredUsers / allUsers.length) * 100).toFixed(1))
    resultArray.push({isFilled: true, value: percent})
  })

  if(resultArray.length < allTopics.length) {
    for(let i = 0; i < allTopics.length - resultArray.length; i++) {
      resultArray.push({isFilled: false, value: 0})
    }
  }

  return resultArray;
}