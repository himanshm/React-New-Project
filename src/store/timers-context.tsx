import { type ReactNode, createContext, useContext } from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};
const TimersContext = createContext<TimersContextValue | null>(null);

// Create a context Type-Safe custom hook
export const useTimersContext = function () {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error('TimersContext is null - that should not be the case!');
  }

  return timersCtx;
};

type TimerContextProviderProps = {
  children: ReactNode;
};

const TimersContextProvider = function ({
  children,
}: TimerContextProviderProps) {
  const contextValue: TimersContextValue = {
    isRunning: true,
    timers: [],
    addTimer: function (timerData: Timer) {
      // ...
    },
    startTimers: function () {
      // ...
    },
    stopTimers: function () {
      // ...
    },
  };
  return (
    <TimersContext.Provider value={contextValue}>
      {children}
    </TimersContext.Provider>
  );
};

// export { useTimersContext };
export default TimersContextProvider;
