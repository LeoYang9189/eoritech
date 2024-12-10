declare module 'next/link' {
  import { LinkProps as NextLinkProps } from 'next/dist/client/link';
  import { ForwardRefExoticComponent, RefAttributes } from 'react';

  type LinkProps = Omit<NextLinkProps, 'as' | 'passHref' | 'prefetch'>;
  
  const Link: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
  export default Link;
} 