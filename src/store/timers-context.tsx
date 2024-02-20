import { type ReactNode, createContext, useContext, useReducer } from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};
const initialState: TimersState = {
  isRunning: false,
  timers: [],
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
// Use discrimindated union type to define the action type
type startTimersAction = {
  type: 'START_TIMERS';
};

type stopTimersAction = {
  type: 'STOP_TIMERS';
};

type addTimerAction = {
  type: 'ADD_TIMER';
  payload: Timer;
};
// action will be the message you are sending with help of dispatch. It's really up to you which shape and form that action should have. But it is quite common to work with action objects where you have some property that uniquely identifies the different actions and then potentially some extra data that might belong to an action.
type Action = startTimersAction | stopTimersAction | addTimerAction;

const timersReducer = function (
  state: TimersState,
  action: Action
): TimersState {
  if (action.type === 'START_TIMERS') {
    return {
      ...state,
      isRunning: true,
    };
  }

  if (action.type === 'STOP_TIMERS') {
    return {
      ...state,
      isRunning: false,
    };
  }

  if (action.type === 'ADD_TIMER') {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }

  return state;
};

const TimersContextProvider = function ({
  children,
}: TimerContextProviderProps) {
  /* So what's this reducerFn here? Well, that should be a function that's automatically executed by React whenever we dispatch a new action and we'll be able to dispatch such an action with help of the return value of useReducer. Because useReducer does return a value, to be precise, it returns an array which we can therefore destructure with array destructuring, which has exactly two elements. The first element is the current state managed by useReducer. So we could name this timersState. The second element is a dispatch function, which we can therefore call dispatch, which allows us to trigger a state change because the idea with useReducer is that we can send messages, you could say, that will lead to the generation of a new state. The component function to which useReducer belongs will then be executed again and the new state will be made available through this timersState constant here. So through that first element of that array that's returned by useReducer. And it's this reducer function that will be responsible for generating the new state. It is a function that will be executed by React whenever a new message is sent, a new action is dispatched, and its job is to then produce a new state. */

  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const contextValue: TimersContextValue = {
    isRunning: timersState.isRunning,
    timers: timersState.timers,
    addTimer: function (timerData: Timer) {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
    },
    startTimers: function () {
      dispatch({ type: 'START_TIMERS' });
    },
    stopTimers: function () {
      dispatch({ type: 'STOP_TIMERS' });
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
