declare module 'next/image' {
  import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

  interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    loader?: (resolverProps: ImageLoaderProps) => string;
    quality?: number;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    unoptimized?: boolean;
  }

  interface ImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
  }

  const Image: (props: ImageProps) => JSX.Element;
  export default Image;
} 