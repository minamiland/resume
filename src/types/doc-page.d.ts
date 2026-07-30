import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type DocPageAttributes = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  size?: 'letter' | 'a4' | 'legal';
  margin?: string;
  orientation?: 'landscape';
  width?: string;
  height?: string;
  'content-width'?: string;
  'content-height'?: string;
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'doc-page': DocPageAttributes;
    }
  }
}

export {};
