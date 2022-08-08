import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface INotification extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: string;
  message: string;
  canGoHome: boolean;
  onClose: () => void;
  onRepeatRequest: () => void;
}
