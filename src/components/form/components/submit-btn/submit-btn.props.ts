import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISubmitButton extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  name: string;
  disabled?: boolean;
  gap?: string;
}
