import './BackButton.scss';

import React from 'react';

import { Icon } from 'components/icon';

export const BackButton: React.FC = () => (
  <div className="back-button">
    <Icon>arrow_back</Icon>
  </div>
);
