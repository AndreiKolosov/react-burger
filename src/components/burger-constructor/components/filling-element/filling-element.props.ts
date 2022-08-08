import { DetailedHTMLProps, LiHTMLAttributes } from 'react';
import { IIngredient } from '../../../../utils/interfaces';

export interface IFillingElement extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item: IIngredient;
  deleteHandler: (item: IIngredient) => void;
  index: number;
}
