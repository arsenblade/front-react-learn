import { axiosPublic } from "../../api/interceptors"
import { getLoginUrl, getRegisterUrl, getUsersUrl } from "../../constants/serverPath"
import { IUser } from "../../types/user.types"
import { removeTokenStorage, saveTokenStorage } from "./auth.helpers"
const uuid = require('uuid')

export interface IRegistration {
  email: string, password: string, name: string, avatar: string
}

export interface ILogin {
  email: string, password: string
}




export const authService = {
  async register(registerData: IRegistration) {
    const {avatar, email, name, password} = registerData
    const {data} = await axiosPublic.get<IUser[]>(getUsersUrl(), {
      params: {
        email_like: email
      }
    })

    if(data.length > 0) {
      throw new Error('There is already a user registered');
    }
 
    const defaultUser: IUser = {
      id: uuid.v4(),
      pointTests: [],
      email,
      password,
      name,
      avatar,
      isAdmin: false,
    }

    const response = await axiosPublic.post<IUser>(getRegisterUrl(), defaultUser)

    if(response.data) saveTokenStorage(uuid.v4(), response.data)

    return response;
  },

  async login(loginData: ILogin) {
    const {email, password} = loginData
    const response = await axiosPublic.post<IUser>(getLoginUrl(), {email, password})
    if(response.data) saveTokenStorage(uuid.v4(), response.data)

    return response
  },

  logout() {
    removeTokenStorage()
    localStorage.removeItem('user')
  }
}