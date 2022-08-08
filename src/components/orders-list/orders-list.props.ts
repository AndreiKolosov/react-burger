import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IOrdersList extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  personal: boolean;
}
