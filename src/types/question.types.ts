export interface IAllQuestion {
  id: string;
  currentQuestions: ICurrentQuestions[]
}

export interface ICurrentQuestions {
  id: string;
  title: string;
  correctAnswerId: string;
  allAnswer: IAllAnswer[]
}

export interface IAllAnswer {
  id: string;
  title: string;
}

