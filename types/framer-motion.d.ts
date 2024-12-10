declare module 'framer-motion' {
  import { ComponentType, CSSProperties, ReactNode, HTMLAttributes, ElementType, ForwardRefExoticComponent, RefAttributes } from 'react';

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
  }

  export interface MotionProps extends HTMLAttributes<HTMLElement>, AnimationProps {
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
  }

  type MotionComponent<T extends ElementType> = ForwardRefExoticComponent<MotionProps & JSX.IntrinsicElements[T] & RefAttributes<HTMLElement>>;

  export const motion: {
    [K in keyof JSX.IntrinsicElements]: MotionComponent<K>;
  };
}

declare module 'next/link' {
  import { LinkProps as NextLinkProps } from 'next/dist/client/link';
  import { ForwardRefExoticComponent, RefAttributes } from 'react';

  interface ExtendedLinkProps extends NextLinkProps {
    className?: string;
    children?: React.ReactNode;
  }

  const Link: ForwardRefExoticComponent<ExtendedLinkProps & RefAttributes<HTMLAnchorElement>>;
  export default Link;
}

declare module 'lucide-react' {
  import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
  }

  type Icon = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

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
}

declare module '@/components/ui/button' {
  import { ForwardRefExoticComponent, RefAttributes, ButtonHTMLAttributes } from 'react';

  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
    size?: string;
  }

  export const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;
}

declare module '@/components/ui/input' {
  import { ForwardRefExoticComponent, RefAttributes, InputHTMLAttributes } from 'react';

  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

  export const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;
}

declare module '@/components/ui/label' {
  import { ForwardRefExoticComponent, RefAttributes, LabelHTMLAttributes } from 'react';

  interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

  export const Label: ForwardRefExoticComponent<LabelProps & RefAttributes<HTMLLabelElement>>;
} 