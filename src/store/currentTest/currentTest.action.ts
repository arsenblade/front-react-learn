import { createAsyncThunk } from "@reduxjs/toolkit"
import { userTest } from "../../service/userTest/userTest.service"
import {  } from "../../types/question.types"
import { ICurrentTestState } from "./currentTest.interface"


export const createCurrentTest = createAsyncThunk<ICurrentTestState, {id: string, currentTopicTitle: string, idTest: string, nextTopicId: string | 'lastTopic'} >('create current test', async ({id, currentTopicTitle, idTest, nextTopicId}, thunkApi) => {
  try {
    const {data} = await userTest.getById(id)
    const currentTestData: ICurrentTestState  = {
      allQuestions: data.currentQuestions,
      currentTopicTitle: currentTopicTitle,
      idTest: idTest,
      nextTopicId
    }
    return currentTestData
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})