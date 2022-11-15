export interface ISelect {
  options: IOption[];
  value:  IOption | undefined;
  onChange: React.Dispatch<React.SetStateAction<IOption | undefined>>;
  placeholder?: string;
  customClassName?: string
}

export interface IOption {
  value: string,
  label: string
}