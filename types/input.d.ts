declare module '@/components/ui/input' {
  import { InputHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';

  export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

  export const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;
} 