import React from 'react';

import { Alert } from 'antd';

export const PageError: React.FC = () => (
  <Alert
    message="Error"
    description="Ooops, something went wrong here!"
    type="error"
    showIcon
  />
);
