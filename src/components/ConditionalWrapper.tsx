import * as React from 'react';

type Props = {
  condition: boolean;
  wrapper: (children: React.ReactNode) => React.ReactNode;
};

export const ConditionalWrapper: React.FC<Props> = ({
  condition,
  wrapper,
  children
}) => <>{condition ? wrapper(children) : children}</>;
