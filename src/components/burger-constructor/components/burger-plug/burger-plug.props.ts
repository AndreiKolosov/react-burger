import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IBurgerPlug extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  hover: boolean;
}
