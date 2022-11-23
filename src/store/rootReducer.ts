import {reducer as authReducer} from './auth/auth.slice'
import {reducer as currentTestReducer} from './/currentTest/currentTest.slice'

export const reducers = {
  auth: authReducer,
  currentTest: currentTestReducer
}