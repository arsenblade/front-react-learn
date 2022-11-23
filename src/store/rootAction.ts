import * as authActions from './auth/auth.actions'
import { currentTestSlice } from './currentTest/currentTest.slice'
import * as currentTestAction from './currentTest/currentTest.action'

export const allActions = {
  ...authActions,
  ...currentTestAction,
  ...currentTestSlice.actions,
}