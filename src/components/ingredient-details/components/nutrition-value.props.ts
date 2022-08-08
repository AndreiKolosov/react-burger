import { DetailedHTMLProps, LiHTMLAttributes } from 'react';

export interface INutritionValue extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  text: string;
  value: number;
}
