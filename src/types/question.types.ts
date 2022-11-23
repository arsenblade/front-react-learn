export interface ITest {
  id: string;
  currentQuestions: ICurrentQuestion[]
}

export interface ICurrentQuestion {
  id: string;
  textQuestion: string;
  correctAnswerId: string[];
  allAnswer: IAnswer[]
}

export interface IAnswer {
  id: string;
  idQuestion: string;
  textAnswer: string;
}

