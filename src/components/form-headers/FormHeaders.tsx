import * as React from 'react';
import './FormHeaders.scss';

export interface FormHeadersProps {
  labels: string[];
  hideInMobiles?: boolean;
}

export const FormHeaders: React.FC<FormHeadersProps> = React.memo(
  ({ labels, hideInMobiles }) => {
    return (
      <div
        className={`form-headers${
          hideInMobiles ? ' form-headers__mobile_hidden' : ''
        }`}
      >
        {labels.map(x => (
          <h3 key={x}>{x}</h3>
        ))}
      </div>
    );
  }
);

FormHeaders.displayName = 'FormHeaders';
