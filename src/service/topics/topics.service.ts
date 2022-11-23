import { axiosPrivate, axiosPublic } from "../../api/interceptors"
import { MyToast } from "../../components/ui/MyToast/MyToast"
import { getAllTopics, getByIdTopic } from "../../constants/serverPath"
import { ITopic } from "../../types/topic.types"
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
}