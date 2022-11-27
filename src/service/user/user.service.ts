import { axiosPrivate } from "../../api/interceptors"
import { getUserUrl, getUsersUrl } from "../../constants/serverPath"
import { IUser } from "../../types/user.types"
const uuid = require('uuid')


export const userService = {

  async getAll() {
    const response = await axiosPrivate.get<IUser[]>(getUsersUrl())

    return response
  },

  async getById(id: string) {
    const response = await axiosPrivate.get<IUser>(getUserUrl(id))

    return response
  },

  async updateUser(id: string, email: string, password: string, name: string) {
    const response = await axiosPrivate.patch<IUser>(getUserUrl(id), {email, password, name})

    return response
  }
}