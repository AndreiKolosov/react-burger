import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IIngredientIcon extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  img: string;
  alt: string;
}
