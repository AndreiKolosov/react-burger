import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IIngredient } from '../../../utils/interfaces';

export interface IOrderInfoIngredient extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ingredient: IIngredient;
}
