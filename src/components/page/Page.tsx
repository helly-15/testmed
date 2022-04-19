import './Page.scss';

import * as React from 'react';
import { useDispatch } from 'react-redux';

import { LoadingOutlined } from '@ant-design/icons';
import { Alert, PageHeader, Row, Spin } from 'antd';
import { TagType } from 'antd/lib/tag';
import clsx from 'clsx';
import { goBack, push } from 'connected-react-router';

import { BackButton } from 'components/back-button';
import { setTitle } from 'features/navigation/navigationSlice';

export interface PageProps {
  backLink?: string;
  className?: string | string[];
  extra?: React.ReactNode;
  hasError?: boolean;
  hideBack?: boolean;
  isLoading?: boolean;
  noHeader?: boolean;
  pushExtraRight?: boolean;
  tags?: React.ReactElement<TagType> | React.ReactElement<TagType>[];
  title?: string;
}

export const Page: React.FC<React.PropsWithChildren<PageProps>> = ({
  backLink,
  children,
  className,
  extra,
  hasError,
  hideBack,
  isLoading,
  noHeader,
  pushExtraRight,
  tags,
  title
}) => {
  const dispatch = useDispatch();

  const backIcon = hideBack ? false : <BackButton />;
  const handleBack = () => dispatch(backLink ? push(backLink) : goBack());

  React.useEffect(() => {
    dispatch(setTitle(title ?? ''));
  }, [dispatch, title]);

  return (
    <div className={clsx('page', noHeader && 'no-header', className)}>
      {!noHeader && (
        <PageHeader
          title={isLoading ? undefined : title}
          backIcon={backIcon}
          onBack={handleBack}
          tags={tags}
          extra={extra}
          className={clsx({ 'extra-right': pushExtraRight })}
        />
      )}
      {!hasError && isLoading && (
        <Row justify="center" align="middle" className="page__spin">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </Row>
      )}
      {!hasError && !isLoading && children}
      {hasError && (
        <Alert
          message="Error"
          description="OOPS! Something went wrong. Please try again later."
          type="error"
          showIcon
        />
      )}
    </div>
  );
};
