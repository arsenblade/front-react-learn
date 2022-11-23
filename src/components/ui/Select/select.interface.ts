export interface ISelect {
  options: IOption[];
  placeholder?: string;
  customClassName?: string
}

export interface IOption {
  value: string,
  label: string
  link: string
}