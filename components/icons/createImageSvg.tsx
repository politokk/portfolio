import React from 'react';

import type { LucideProps } from 'lucide-react';

export const createImageSvg = (src: string) => {
  const ImageComponent = (props: LucideProps) => {
    return (
      <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <image height="100%" href={src} width="100%" />
      </svg>
    );
  };
  
  ImageComponent.displayName = `ImageSvg(${src})`;
  
  return ImageComponent;
};
