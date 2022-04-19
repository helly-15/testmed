import './WizardNavigation.scss';

import { Link } from 'react-router-dom';

interface WizardNavigationProps {
  back?: string;
  next?: string;
}

export const WizardNavigation: React.FC<WizardNavigationProps> = ({
  back,
  next
}) => (
  <div className="wizard-nav">
    {back && (
      <Link
        className="ant-btn ant-btn-primary wizard-nav__back"
        to={back}
        type="primary"
      >
        Back
      </Link>
    )}
    {next && (
      <Link
        className="ant-btn ant-btn-primary wizard-nav__next"
        to={next}
        type="primary"
      >
        Next
      </Link>
    )}
  </div>
);
