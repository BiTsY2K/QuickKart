import React from 'react';

import type { ButtonProps } from '@/components/shared_components/AppButtons/Button';
import Button from '@/components/shared_components/AppButtons/Button';

export interface ButtonSecondaryProps extends ButtonProps {
  href?: any;
}

const ButtonSecondary2: React.FC<ButtonSecondaryProps> = ({
  className = '',
  ...args
}) => {
  const CLASSES = `text-primary border-2 border-primary dark:border-neutral-500 dark:text-white hover:bg-primary hover:text-white transition-all duration-200 text-sm ${className}`;

  return <Button className={CLASSES} {...args} />;
};

export default ButtonSecondary2;
