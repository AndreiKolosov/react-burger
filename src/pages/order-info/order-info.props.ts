import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IOrderInfo extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  personal?: boolean;
}
