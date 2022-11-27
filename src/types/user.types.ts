export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
  isAdmin: boolean;
  pointTests: IPointTest[]
}


export interface IPointTest {
  idUser: string;
  idTest: string;
  points: number;
}

export interface IStatUser {
  value: number;
  isFilled: boolean;
}