import { DetailedHTMLProps, LiHTMLAttributes } from 'react';
import { IWsOrder } from '../../../../utils/interfaces';

export interface IOrderCard extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  order: IWsOrder;
}
