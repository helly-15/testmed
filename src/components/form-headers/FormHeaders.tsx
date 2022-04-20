import * as React from "react";
import './FormHeaders.scss';

export interface FormHeadersProps {
  labels: string[];
}

export const FormHeaders: React.FC<FormHeadersProps> = React.memo(
  ({ labels}) => {
    return (
      <div className="form-headers">
        {labels.map(x => (
          <h3 key={x}>{x}</h3>
        ))}
      </div>
    )
  }
);

FormHeaders.displayName = 'FormHeaders';
