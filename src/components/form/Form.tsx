import './Form.scss';

import * as React from 'react';
import { Prompt } from 'react-router-dom';

import { Button, Modal, Typography } from 'antd';
import clsx from 'clsx';
import { Moment } from 'moment';

import { useBeforeUnload } from 'hooks';

import { Icon } from 'components/index';

export interface FormProps {
  alwaysEnabledSubmit?: boolean;
  className?: string;
  isChanged: boolean;
  isLoading?: boolean;
  lastUpdated?: Moment;
  onSubmit: () => void;
}

const leaveMessage = 'You have unsaved changes. Do you really want to leave?';

function Form({
  alwaysEnabledSubmit,
  children,
  className,
  isChanged,
  isLoading,
  lastUpdated,
  onSubmit
}: React.PropsWithChildren<FormProps>) {
  useBeforeUnload(isChanged);

  return (
    <div className={clsx('form', className)}>
      <Prompt message={() => (isChanged ? leaveMessage : true)} />
      {children}
      <div className="form-footer">
        {lastUpdated && (
          <div className="form-footer__text">
            <div className="form-footer__text-label">LAST UPDATED</div>
            <div>{lastUpdated.format('LLL')}</div>
          </div>
        )}
        <Button
          className="form-footer__submit-btn"
          type="primary"
          icon={<Icon size="sm">cloud_upload</Icon>}
          size="large"
          disabled={!alwaysEnabledSubmit && !isChanged}
          loading={isLoading}
          onClick={onSubmit}
        >
          Submit Changes
        </Button>
      </div>
    </div>
  );
}

export interface FormModalProps {
  visible: boolean;
  onClose: () => void;
  onGoto: () => void;
  gotoLabel: string;
}

function FormModal({ visible, onClose, onGoto, gotoLabel }: FormModalProps) {
  return (
    <Modal
      visible={visible}
      closable={false}
      footer={[
        <Button type="primary" key="Ok" onClick={onClose}>
          Ok
        </Button>,
        <Button key="back" onClick={onGoto}>
          {gotoLabel}
        </Button>
      ]}
    >
      <Typography.Paragraph>Your data was submitted.</Typography.Paragraph>
    </Modal>
  );
}

export { Form, FormModal };
