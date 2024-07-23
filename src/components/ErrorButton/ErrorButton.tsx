import { useEffect, useState } from 'react';

import { Button } from '../ui/Button';

export const ErrorButton = () => {
  const [throwError, setThrowError] = useState(false);

  useEffect(() => {
    if (throwError) {
      throw new Error('Something went wrong');
    }
  }, [throwError]);

  return <Button onClick={() => setThrowError(true)}>Throw error</Button>;
};
