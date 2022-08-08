import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IFormControls extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
