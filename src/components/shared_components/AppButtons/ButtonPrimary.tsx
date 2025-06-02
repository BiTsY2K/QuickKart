// import Link from 'next/link';
import React from 'react';

import type { ButtonProps } from '@/components/shared_components/AppButtons/Button';
import Button from '@/components/shared_components/AppButtons/Button';

export interface ButtonPrimaryProps extends ButtonProps {
  href?: any;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className,
  ...args
}) => {
  return (
    <Button
      className={`rounded bg-primary text-white hover:bg-primary/80 disabled:bg-opacity-70 dark:bg-white dark:text-black dark:hover:bg-white/80 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
