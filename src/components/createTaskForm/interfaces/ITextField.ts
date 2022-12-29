import { ChangeEvent } from 'react';
import { IDisabled } from './IDisabled';

export interface ITextField extends IDisabled {
  value?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
