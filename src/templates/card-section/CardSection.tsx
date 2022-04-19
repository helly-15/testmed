import './CardSection.scss';

import { FC, PropsWithChildren } from 'react';

import { Typography } from 'antd';
import clsx from 'clsx';

export interface CardSectionProps {
  title: string;
  className?: string;
}

export const CardSection: FC<PropsWithChildren<CardSectionProps>> = ({
  title,
  className,
  children
}) => {
  return (
    <section className={clsx('card-section', className)}>
      <Typography.Title level={2}>{title}</Typography.Title>
      <div className="crx-card">{children}</div>
    </section>
  );
};
