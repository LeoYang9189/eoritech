declare module '@/components/ui/dialog' {
  import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';

  interface DialogProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
  interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {}
  interface DialogDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

  export const Dialog: ForwardRefExoticComponent<DialogProps & RefAttributes<HTMLDivElement>>;
  export const DialogTrigger: ForwardRefExoticComponent<DialogProps & RefAttributes<HTMLDivElement>>;
  export const DialogContent: ForwardRefExoticComponent<DialogContentProps & RefAttributes<HTMLDivElement>>;
  export const DialogHeader: ForwardRefExoticComponent<DialogProps & RefAttributes<HTMLDivElement>>;
  export const DialogFooter: ForwardRefExoticComponent<DialogProps & RefAttributes<HTMLDivElement>>;
  export const DialogTitle: ForwardRefExoticComponent<DialogProps & RefAttributes<HTMLDivElement>>;
  export const DialogDescription: ForwardRefExoticComponent<DialogDescriptionProps & RefAttributes<HTMLParagraphElement>>;
} 