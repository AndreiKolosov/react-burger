import { DetailedHTMLProps, FormHTMLAttributes, ReactChild } from 'react';

export interface IForm extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  children: ReactChild;
  title?: string;
  onSubmit: () => void;
  name: string;
}
