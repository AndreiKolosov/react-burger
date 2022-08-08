import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IModal extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  closeModal: () => void;
  heading: string;
  children?: ReactNode;
}
