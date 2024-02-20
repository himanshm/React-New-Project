import { useContext } from 'react';
import { TimersContext } from './timers-context.tsx';

export const useTimersContext = function () {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error('TimersContext is null - that should not be the case!');
  }

  return timersCtx;
};
