declare module 'next/link' {
  import { LinkProps as NextLinkProps } from 'next/dist/client/link';
  import { ForwardRefExoticComponent, RefAttributes, PropsWithChildren } from 'react';

  interface ExtendedLinkProps extends Omit<NextLinkProps, 'as' | 'passHref' | 'prefetch'> {
    className?: string;
  }

  type LinkProps = PropsWithChildren<ExtendedLinkProps>;
  
  const Link: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
  export default Link;
} 