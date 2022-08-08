import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITotalStat extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: string;
  quantity: number | null;
}
