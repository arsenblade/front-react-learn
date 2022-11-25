import { ICurrentQuestion } from "../../types/question.types";

export interface IInitialStateCurrentTest {
  isLoading: boolean;
  allQuestions: ICurrentQuestion[] | null;
  currentQuestion: ICurrentQuestion | null;
  allAnswersUser: IAnswerUser[] | null;
  currentTopicTitle: string | null;
  idTest: string | null
  nextTopicId: string | null
}


export interface IAnswerUser {
  IdAnswersUser: string[];
  idQuestion: string;
}

export interface ICurrentTestState  {
  allQuestions: ICurrentQuestion[]
  currentTopicTitle: string,
  idTest: string
  nextTopicId: string
}