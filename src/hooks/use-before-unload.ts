import { useEffect } from 'react';

import { isBoolean, isFunction } from 'lodash';

export function useBeforeUnload(enabled: boolean | (() => boolean)) {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (
        (isFunction(enabled) && !enabled()) ||
        (isBoolean(enabled) && !enabled)
      )
        return;
      const msg = 'prompt'; // the ability to set a custom message has been removed from all modern browsers https://www.chromestatus.com/feature/5349061406228480
      e.returnValue = msg;
      return msg;
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [enabled]);
}
