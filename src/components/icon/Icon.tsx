import './Icon.scss';

import { FC, PropsWithChildren } from 'react';

import clsx from 'clsx';

export interface IconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  light?: boolean;
  inactive?: boolean;
  className?: string;
}

export const Icon: FC<PropsWithChildren<IconProps>> = ({
  size = 'md',
  light,
  inactive,
  className,
  children
}) => (
  <span className="anticon">
    <i className={clsx('material-icons', size, { light, inactive }, className)}>
      {children}
    </i>
  </span>
);
