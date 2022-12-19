import {reducer as authReducer} from './auth/auth.slice'
import {reducer as currentTestReducer} from './currentTest/currentTest.slice'
import {reducer as adminCreateTest} from './adminCreateTest/adminCreateTest.slice'
import {reducer as authModalReducer} from './authModal/authModal.slice'

export const reducers = {
  auth: authReducer,
  currentTest: currentTestReducer,
  adminCreateTest: adminCreateTest,
  authModal: authModalReducer
}