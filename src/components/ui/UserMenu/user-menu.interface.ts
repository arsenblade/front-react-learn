export interface IUserMenu {
  options: IOption[];
  value:  IOption | undefined;
  isAdmin: boolean;
  onChange: React.Dispatch<React.SetStateAction<IOption | undefined>>;
}

export interface IOption {
  value: string,
  label: string
}