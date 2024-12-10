declare module 'framer-motion' {
    import { ElementType, ForwardRefExoticComponent, RefAttributes, HTMLAttributes, CSSProperties, ReactNode } from 'react';
  
    interface AnimationProps {
      initial?: any;
      animate?: any;
      exit?: any;
      transition?: {
        duration?: number;
        delay?: number;
        type?: string;
        stiffness?: number;
        damping?: number;
      };
      whileHover?: any;
      variants?: {
        [key: string]: any;
      };
      whileInView?: any;
    }
  
    export interface MotionProps extends HTMLAttributes<HTMLElement>, AnimationProps {
      className?: string;
      children?: ReactNode;
      style?: CSSProperties;
    }
  
    type MotionComponent<T extends ElementType> = ForwardRefExoticComponent<MotionProps & RefAttributes<HTMLElement>>;
  
    export const motion: {
      [K in keyof JSX.IntrinsicElements]: MotionComponent<K>;
    };
  
    export type MotionValue<T = any> = {
      get(): T;
      set(value: T): void;
      subscribe(subscriber: (value: T) => void): () => void;
    };
  
    export function useScroll(): {
      scrollX: MotionValue<number>;
      scrollY: MotionValue<number>;
      scrollXProgress: MotionValue<number>;
      scrollYProgress: MotionValue<number>;
    };
  
    export function useTransform<T>(
      value: MotionValue<number> | number[],
      inputRange: number[],
      outputRange: T[],
      options?: { clamp?: boolean }
    ): MotionValue<T>;
  }
  
  declare module 'next/link' {
    import { ForwardRefExoticComponent, RefAttributes } from 'react';
    import { LinkProps as NextLinkProps } from 'next/dist/client/link';
  
    interface ExtendedLinkProps extends Omit<NextLinkProps, 'as' | 'passHref' | 'prefetch'> {
      className?: string;
      children?: React.ReactNode;
    }
  
    const Link: ForwardRefExoticComponent<ExtendedLinkProps & RefAttributes<HTMLAnchorElement>>;
    export default Link;
  }
  
  declare module 'lucide-react' {
    import { FC, SVGProps } from 'react';
  
    interface IconProps extends SVGProps<SVGSVGElement> {
      size?: number | string;
      className?: string;
    }
  
    type Icon = FC<IconProps>;
  
    export const Calendar: Icon;
    export const ArrowLeft: Icon;
    export const Tag: Icon;
    export const Menu: Icon;
    export const X: Icon;
    export const Upload: Icon;
    export const Check: Icon;
    export const Copy: Icon;
    export const ChevronDown: Icon;
    export const ChevronUp: Icon;
    export const Globe2: Icon;
    export const Zap: Icon;
    export const Shield: Icon;
    export const CheckCircle: Icon;
    export const ArrowRight: Icon;
  }
  
  declare module '@/components/ui/button' {
    import { FC, ButtonHTMLAttributes } from 'react';
  
    interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
      variant?: string;
      size?: string;
    }
  
    export const Button: FC<ButtonProps>;
  }
  
  declare module '@/components/ui/popover' {
    import { FC, HTMLAttributes } from 'react';
  
    interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
      open?: boolean;
      onOpenChange?: (open: boolean) => void;
    }
  
    interface PopoverTriggerProps extends HTMLAttributes<HTMLButtonElement> {
      asChild?: boolean;
    }
  
    interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
      align?: 'start' | 'center' | 'end';
      sideOffset?: number;
    }
  
    export const Popover: FC<PopoverProps>;
    export const PopoverTrigger: FC<PopoverTriggerProps>;
    export const PopoverContent: FC<PopoverContentProps>;
  }
  
  declare module '@/components/ui/calendar' {
    import { FC, HTMLAttributes } from 'react';
  
    interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
      mode?: 'single' | 'multiple' | 'range';
      selected?: Date | Date[] | { from: Date; to: Date };
      onSelect?: (date: Date | undefined) => void;
      initialFocus?: boolean;
      classNames?: Record<string, string>;
    }
  
    export const Calendar: FC<CalendarProps>;
  }
  
  declare module '@/components/ui/input' {
    import { FC, InputHTMLAttributes } from 'react';
  
    interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
  
    export const Input: FC<InputProps>;
  }
  
  declare module '@/components/ui/label' {
    import { FC, LabelHTMLAttributes } from 'react';
  
    interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
  
    export const Label: FC<LabelProps>;
  }