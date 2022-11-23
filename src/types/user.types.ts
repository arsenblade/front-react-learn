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
  idTest: string;
  points: string;
}

export interface IStatUser {
  value: number;
  isFilled: boolean;
}