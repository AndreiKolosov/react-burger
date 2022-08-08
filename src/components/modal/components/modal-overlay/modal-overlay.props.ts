import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IModalOverlay extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  handleClick: () => void;
}
