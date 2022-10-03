import { IUserState } from "../store/auth/auth.interface";

export const getStoreLocal = (name: string): IUserState | null => {
  if(typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name);
    return ls ? JSON.parse(ls) : null;
  }

  return null
}