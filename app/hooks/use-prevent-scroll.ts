import { useEffect } from 'react';

export default (isPrevent: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isPrevent ? 'hidden' : 'auto';
    document.documentElement.style.overflow = isPrevent ? 'hidden' : 'visible';

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'visible';
    };
  }, [isPrevent]);
};
