import { DetailedHTMLProps, FormHTMLAttributes, ReactNode, SyntheticEvent } from 'react';

export interface IForm extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  children: ReactNode;
  title?: string;
  onSubmit: (e: SyntheticEvent) => void;
  name: string;
}
