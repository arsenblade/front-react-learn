import { IUser } from "../../types/user.types";

export interface IUserRegistration extends Omit<IUser, 'id' | 'pointQuestions'> {}

export interface IUserLogin extends Omit<IUser, 'id' | 'name' | 'avatar' | 'pointQuestions'> {}

export interface IUserState extends Omit<IUser, 'email' | 'password'> {}

export interface IInitialStateAuth {
  isLoading: boolean;
  error: string;
  user: IUserState | null
}
