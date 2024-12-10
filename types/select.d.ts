declare module '@radix-ui/react-select' {
  import * as React from 'react';

  interface SelectRootProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
    name?: string;
    disabled?: boolean;
    required?: boolean;
    children?: React.ReactNode;
  }

  interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: 'popper' | 'item-aligned';
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
    align?: 'start' | 'center' | 'end';
    alignOffset?: number;
    avoidCollisions?: boolean;
    ref?: React.Ref<HTMLDivElement>;
  }

  interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    disabled?: boolean;
    textValue?: string;
    ref?: React.Ref<HTMLDivElement>;
  }

  export const Root: React.FC<SelectRootProps>;
  export const Trigger: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement>>;
  export const Value: React.FC<{ children?: React.ReactNode; placeholder?: React.ReactNode }>;
  export const Portal: React.FC<{ children: React.ReactNode; forceMount?: boolean }>;
  export const Content: React.ForwardRefExoticComponent<SelectContentProps>;
  export const Item: React.ForwardRefExoticComponent<SelectItemProps>;
  export const ItemText: React.FC<{ children: React.ReactNode }>;
  export const Group: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  export const Label: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  export const Separator: React.FC<React.HTMLAttributes<HTMLDivElement>>;
} 