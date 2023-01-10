export const API_URL = 'https://js-front-learn.onrender.com'

export const getLoginUrl = () => '/login'
export const getRegisterUrl = () => '/users'
export const getUsersUrl = () => '/users'
export const getUserUrl = (id: string) => `/users/${id}`
export const getAllTopics = () => '/topicsOfStudy'
export const getByIdTopic = (id: string) => `/topicsOfStudy/${id}`
export const getByIdQuestions = (id: string) => `allTest/${id}`
export const getAllTest = () => `allTest`
