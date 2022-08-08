import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IInputContainer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  gap?: string;
}
