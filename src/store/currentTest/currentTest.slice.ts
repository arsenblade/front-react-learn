import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyToast } from "../../components/ui/MyToast/MyToast";
import { ICurrentQuestion } from "../../types/question.types";
import { getStoreLocal, getStoreLocalArray} from "../../utils/getStoreLocal";
import { createCurrentTest } from "./currentTest.action";
import { IAnswerUser, IInitialStateCurrentTest } from "./currentTest.interface";


const initialState: IInitialStateCurrentTest  = {
  isLoading: false,
  allQuestions: getStoreLocalArray<ICurrentQuestion[]>('AllQuestions'),
  currentQuestion: getStoreLocal<ICurrentQuestion>('CurrentQuestion'),
  allAnswersUser: getStoreLocalArray<IAnswerUser[]>('allAnswersUser'),
  currentTopicTitle: localStorage.getItem('currentTopicTitle'),
  idTest: localStorage.getItem('idTest'),
  nextTopicId:  localStorage.getItem('nextTopicId'),
}

export const currentTestSlice = createSlice({
  name: 'currentTest',
  initialState,
  reducers: {
    changeCurrentQuestion: (state, action: PayloadAction<{index: number}>) => {
      state.currentQuestion = state.allQuestions && state.allQuestions[action.payload.index]
      localStorage.setItem('CurrentQuestion', JSON.stringify(state.currentQuestion))
    },
    addAnswer: (state, action: PayloadAction<{idQuestion: string, idAnswersUser: string[]}>) => {
      const indexAnswer = state.allAnswersUser?.findIndex(answer => answer.idQuestion === action.payload.idQuestion)
      console.log(state.allAnswersUser)
      if(state.allAnswersUser && indexAnswer !== undefined && indexAnswer !== -1) {
        state.allAnswersUser[indexAnswer] = {
          IdAnswersUser: action.payload.idAnswersUser,
          idQuestion: action.payload.idQuestion
        }
        localStorage.setItem('allAnswersUser', JSON.stringify(state.allAnswersUser))
      }
      else if (state.allAnswersUser && (indexAnswer === undefined || indexAnswer === -1)) {
        state.allAnswersUser.push({
          IdAnswersUser: action.payload.idAnswersUser,
          idQuestion: action.payload.idQuestion
        })
        localStorage.setItem('allAnswersUser', JSON.stringify(state.allAnswersUser))
      }
    },
    cleanCurrentQuestion: (state) => {
      state.allQuestions = null
      state.currentQuestion = null
      localStorage.removeItem('AllQuestions')
      localStorage.removeItem('CurrentQuestion')
      localStorage.removeItem('currentTopicTitle')
      localStorage.removeItem('idTest')
      localStorage.removeItem('nextTopicId')
      localStorage.removeItem('allAnswersUser')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createCurrentTest.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createCurrentTest.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.allQuestions = payload.allQuestions
      state.currentQuestion = payload.allQuestions[0]
      state.idTest = payload.idTest
      state.currentTopicTitle = payload.currentTopicTitle
      state.nextTopicId = payload.nextTopicId
      state.allAnswersUser = []
      localStorage.setItem('AllQuestions', JSON.stringify(payload.allQuestions))
      localStorage.setItem('CurrentQuestion', JSON.stringify(payload.allQuestions[0]))
      localStorage.setItem('currentTopicTitle', payload.currentTopicTitle)
      localStorage.setItem('idTest', payload.idTest)
      localStorage.setItem('nextTopicId', payload.nextTopicId)
    })
    .addCase(createCurrentTest.rejected, (state) => {
      state.isLoading = false;
      MyToast('Произошла ошибка при загрузке тестов', false)
    })
  }
})


export const {reducer} = currentTestSlice;