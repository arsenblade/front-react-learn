export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
  pointQuestions: IPointQuestions[]
}


export interface IPointQuestions {
  idQuestions: string;
  points: string;
}