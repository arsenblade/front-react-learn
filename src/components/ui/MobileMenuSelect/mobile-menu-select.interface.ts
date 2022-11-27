
import {Dispatch, SetStateAction} from 'react'
import { IOption } from "../Select/select.interface";

export interface MobileMenuSelectProps {
  title: string;
  options: IOption[]
  setVisibleMenu: Dispatch<SetStateAction<boolean>>
}