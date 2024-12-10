declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export type Icon = FC<IconProps>;

  export const ChevronDown: Icon;
  export const ChevronUp: Icon;
  export const Calendar: Icon;
  export const ArrowLeft: Icon;
  export const Tag: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const Upload: Icon;
  export const Check: Icon;
  export const Copy: Icon;
} 