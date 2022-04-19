import './Footer.scss';

import React from 'react';

import { Col, Row } from 'antd';
import { halfCol } from 'utils/antd';

const clinicName = 'Harrison Healthcare Inc.';
const year = new Date().getFullYear();
const href = '/';
const target = '_blank';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Row className="footer__content">
        <Col className="footer__clinic column" {...halfCol}>
          {clinicName}, &#169; {year}
        </Col>
        <Col {...halfCol} className="column footer__terms">
          <a href={href} target={target} className="footer__control">
            Terms of Use &amp; Privacy Policy
          </a>
        </Col>
      </Row>
    </div>
  );
};
