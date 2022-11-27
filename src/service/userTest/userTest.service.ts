import { axiosPrivate } from "../../api/interceptors"
import { getAllTest, getByIdQuestions, getUserUrl } from "../../constants/serverPath"
import { IAnswerUser } from "../../store/currentTest/currentTest.interface"
import { ICurrentQuestion, ITest } from "../../types/question.types"
import { IUser } from "../../types/user.types"
import { getPointUser } from "../../utils/getPointUser"
const uuid = require('uuid')


export const userTest = {
  async getAll() {
    const response = await axiosPrivate.get<ITest[]>(getAllTest())

    return response
  },

  async getById(id: string) {
    const response = await axiosPrivate.get<ITest>(getByIdQuestions(id))

    return response
  },

  async saveResultsTest(idUser: string, idTest: string, answersUser: IAnswerUser[], allQuestions: ICurrentQuestion[]) {
    const {data: userData} = await axiosPrivate.get<IUser>(getUserUrl(idUser))
    const points = getPointUser(allQuestions, answersUser)
    const pointTestIndex = userData.pointTests.findIndex(pTest => pTest.idTest === idTest)

    if(pointTestIndex !== undefined && pointTestIndex !== -1) {
      userData.pointTests[pointTestIndex].points = Number(points)
    }
    else {
      userData.pointTests.push({
        idUser,
        idTest,
        points: Number(points)
      })
    }
    
    const response = await axiosPrivate.put<IUser>(getUserUrl(idUser), userData)

    return response
  },
}