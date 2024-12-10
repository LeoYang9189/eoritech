declare module '@radix-ui/react-dialog' {
  import * as React from 'react';

  interface DialogRootProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children?: React.ReactNode;
    defaultOpen?: boolean;
  }

  interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
    forceMount?: boolean;
    onOpenAutoFocus?: (event: Event) => void;
    onCloseAutoFocus?: (event: Event) => void;
    onEscapeKeyDown?: (event: KeyboardEvent) => void;
    onPointerDownOutside?: (event: PointerEvent) => void;
    onInteractOutside?: (event: Event) => void;
    ref?: React.Ref<HTMLDivElement>;
  }

  interface DialogOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
  }

  interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    ref?: React.Ref<HTMLHeadingElement>;
  }

  export const Root: React.FC<DialogRootProps>;
  export const Trigger: React.FC<React.HTMLAttributes<HTMLButtonElement>>;
  export const Portal: React.FC<{ children: React.ReactNode; forceMount?: boolean }>;
  export const Overlay: React.ForwardRefExoticComponent<DialogOverlayProps>;
  export const Content: React.ForwardRefExoticComponent<DialogContentProps>;
  export const Title: React.ForwardRefExoticComponent<DialogTitleProps>;
  export const Description: React.FC<React.HTMLAttributes<HTMLParagraphElement>>;
  export const Close: React.FC<React.HTMLAttributes<HTMLButtonElement>>;
}

declare module '@radix-ui/react-popover' {
  import * as React from 'react';

  interface PopoverRootProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
    modal?: boolean;
    children?: React.ReactNode;
  }

  interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
    alignOffset?: number;
    avoidCollisions?: boolean;
    collisionPadding?: number | { top?: number; right?: number; bottom?: number; left?: number };
    ref?: React.Ref<HTMLDivElement>;
    asChild?: boolean;
  }

  interface PopoverTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
  }

  export const Root: React.FC<PopoverRootProps>;
  export const Trigger: React.ForwardRefExoticComponent<PopoverTriggerProps>;
  export const Portal: React.FC<{ children: React.ReactNode; forceMount?: boolean }>;
  export const Content: React.ForwardRefExoticComponent<PopoverContentProps>;
  export const Arrow: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  export const Close: React.FC<React.HTMLAttributes<HTMLButtonElement>>;
} 