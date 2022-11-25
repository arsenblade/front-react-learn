import {reducer as authReducer} from './auth/auth.slice'
import {reducer as currentTestReducer} from './currentTest/currentTest.slice'
import {reducer as adminCreateTest} from './adminCreateTest/adminCreateTest.slice'

export const reducers = {
  auth: authReducer,
  currentTest: currentTestReducer,
  adminCreateTest: adminCreateTest
}