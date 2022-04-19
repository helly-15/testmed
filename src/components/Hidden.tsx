import { PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';

import { desktopMinWidth, mobileMaxWidth } from 'constants/media-queries';

export interface HiddenProps {
  onMobile?: boolean;
  onTablet?: boolean;
  onDesktop?: boolean;
}

type Props = PropsWithChildren<HiddenProps>;

export function Hidden(props: Props) {
  const { onMobile, onTablet, onDesktop, children } = props;

  const isDesktop = useMediaQuery(desktopMinWidth);
  const isMobile = useMediaQuery(mobileMaxWidth);

  return (
    <>
      {((isMobile && !onMobile) ||
        (!isMobile && !isDesktop && !onTablet) ||
        (isDesktop && !onDesktop)) &&
        children}
    </>
  );
}
