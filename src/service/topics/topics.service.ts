import { axiosPrivate, axiosPublic } from "../../api/interceptors"
import { MyToast } from "../../components/ui/MyToast/MyToast"
import { getAllTest, getAllTopics, getByIdTopic } from "../../constants/serverPath"
import { ITopic } from "../../types/topic.types"
import { ITest, ICurrentQuestion } from "../../types/question.types"
import { IUser } from "../../types/user.types"
const uuid = require('uuid')


export const topicService = {

  async getAll() {
    const response = await axiosPrivate.get<ITopic[]>(getAllTopics())

    return response
  },

  async getById(id: string) {
    const response = await axiosPrivate.get<ITopic>(getByIdTopic(id))

    return response
  },

  async addTopic(questions: ICurrentQuestion[], descriptionTopic: string, titleTopic: string) {
    const {data: allTopics} = await axiosPrivate.get<ITopic[]>(getAllTopics())
    const resultQuestions: ICurrentQuestion[] = questions.map(q => ({
      id: q.id,
      allAnswer: q.allAnswer.filter(a => a.textAnswer !== ''),
      correctAnswerId: q.correctAnswerId,
      textQuestion: q.textQuestion
    }))

    const testOfTopic: ITest = {
      id: uuid.v4(),
      currentQuestions: resultQuestions
    }

    const defaultTopic: ITopic = {
      id: uuid.v4(),
      descriptionTopic,
      passedTopic: false,
      titleTopic,
      numberTopic: allTopics.length + 1,
      relatedQuestionsId: testOfTopic.id,
      pictureTopicUrl: 'react-poster.png',
      videoUrl: 'tor-4-video.mp4'
    }

    await axiosPrivate.post<ITopic[]>(getAllTopics(), defaultTopic)
    await axiosPrivate.post<ITest>(getAllTest(), testOfTopic)
  },
}