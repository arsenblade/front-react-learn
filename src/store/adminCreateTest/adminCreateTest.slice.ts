import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyToast } from "../../components/ui/MyToast/MyToast";
import { IAnswer, ICurrentQuestion } from "../../types/question.types";
import { getStoreLocal} from "../../utils/getStoreLocal";
import { AddQuestionPayload, IInitialStateCreateTest } from "./adminCreateTest.interface";
const uuid = require("uuid");

const initialState: IInitialStateCreateTest  = {
  questions: [
    {
      id: uuid.v4(),
      allAnswer: [],
      correctAnswerId: [],
      textQuestion: ''
    },
    {
      id: uuid.v4(),
      allAnswer: [],
      correctAnswerId: [],
      textQuestion: ''
    },
    {
      id: uuid.v4(),
      allAnswer: [],
      correctAnswerId: [],
      textQuestion: ''
    },
    {
      id: uuid.v4(),
      allAnswer: [],
      correctAnswerId: [],
      textQuestion: ''
    },
    {
      id: uuid.v4(),
      allAnswer: [],
      correctAnswerId: [],
      textQuestion: ''
    }
  ]
}

export const createTestSlice = createSlice({
  name: 'createTest',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<AddQuestionPayload>) => {
      const findIndexQuestion = state.questions.findIndex(q => q.id === action.payload.questionId)
      const correctAnswerId: string[] = []
      const allAnswer: IAnswer[] = action.payload.answers.map(a => {
        const id = String(uuid.v4())
        if(a.answerCorrect === true && a.answerText !== '') {
          correctAnswerId.push(id)
        }
        return {id, idQuestion: action.payload.questionId, textAnswer: a.answerText}
      })
      const question: ICurrentQuestion = {id: action.payload.questionId, allAnswer, correctAnswerId, textQuestion: action.payload.questionsText}
      state.questions[findIndexQuestion] = question
    },
    cleanQuestions: (state) => {
      state.questions = state.questions.map(q => ({
        allAnswer: [],
        correctAnswerId: [],
        id: uuid.v4(),
        textQuestion: ''
      }))
    },
  },
})


export const {reducer} = createTestSlice;