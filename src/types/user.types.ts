export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
  isAdmin: boolean;
  pointQuestions: IPointQuestions[]
}


export interface IPointQuestions {
  idQuestions: string;
  points: string;
}

export interface IStatUser {
  value: number;
  isFilled: boolean;
}