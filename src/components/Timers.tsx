import { useTimersContext } from '../store/useTimersContext.ts';
import Timer from './Timer';

const Timers = function () {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map((timer) => (
        <li key={timer.name}>
          <Timer {...timer} />
          {/* timer = {timer.name} duration = {timer.duration} */}
        </li>
      ))}
    </ul>
  );
};

export default Timers;
