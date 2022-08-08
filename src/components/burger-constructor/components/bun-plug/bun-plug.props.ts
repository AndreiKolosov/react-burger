import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IBunPlug extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  position: 'top' | 'bottom';
  hover: boolean;
}
