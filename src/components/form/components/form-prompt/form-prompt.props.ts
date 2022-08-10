import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IFormPrompt extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  link: string;
  prompt: string;
  linkCaption: string;
  gap?: string;
}
