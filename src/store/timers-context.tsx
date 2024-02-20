import { type ReactNode, createContext } from 'react';

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

type TimerContextProviderProps = {
  children: ReactNode;
};

const TimersContextProvider = function ({
  children,
}: TimerContextProviderProps) {
  const contextValue: TimersContextValue = {
    isRunning: false,
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
