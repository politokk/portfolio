import React from 'react';

import type { LucideProps } from 'lucide-react';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import type { IconProps } from './icons';

export const iconVariants = cva('', {
  defaultVariants: {
    size: 'sm',
    variant: 'default',
  },
  variants: {
    size: {
      10: 'size-10',
      lg: 'size-6',
      md: 'size-5',
      sm: 'size-4',
      toolbar: 'size-[60px]',
      xl: 'size-8',
      xs: 'size-3',
      xs2: 'size-2',
    },
    spin: {
      true: 'inline-block animate-spin',
    },
    variant: {
      default: 'text-muted-foreground',
      error: 'text-destructive',
      menuItem: 'mr-2 size-5',
      muted: 'text-muted-foreground/70',
      placeholder: 'text-muted-foreground/50',
      primary: '',
      toolbar: 'size-5',
    },
  },
});

export type IconFC = React.FC<IconProps>;

export const createIcon = (
  Icon: React.FC<LucideProps>,
  { spin: defaultSpin, ...defaultProps }: Partial<IconProps> = {}
) => {
  return function IconComponent({
    className,
    label,
    size,
    spin = defaultSpin,
    variant,
    ...props
  }: IconProps) {
    return (
      <>
        {!!label && <span className="sr-only">{label}</span>}

        <Icon
          className={cn(
            iconVariants({ size: size, spin, variant }),
            defaultProps?.className,
            className
          )}
          aria-hidden
          {...defaultProps}
          {...props}
        />
      </>
    );
  };
};
