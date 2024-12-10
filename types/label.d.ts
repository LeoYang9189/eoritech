declare module '@/components/ui/label' {
  import { LabelHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';

  export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

  export const Label: ForwardRefExoticComponent<LabelProps & RefAttributes<HTMLLabelElement>>;
} 