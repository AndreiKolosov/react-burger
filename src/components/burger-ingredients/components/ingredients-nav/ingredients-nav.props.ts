import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TIngredientsType } from '../../../../utils/interfaces';

export interface IIngredientsNav extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tabs: TIngredientsType[];
  current: string;
  handleClick: (type: string) => void;
}
