import { DetailedHTMLProps, FormEvent, FormHTMLAttributes, ReactNode } from 'react';

export interface IForm extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  children: ReactNode;
  title?: string;
  onSubmit: (e: FormEvent) => void;
  name: string;
}
