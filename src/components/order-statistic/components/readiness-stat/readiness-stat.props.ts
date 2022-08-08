import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IReadinessStat extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  orders: number[];
  ready?: boolean;
}
