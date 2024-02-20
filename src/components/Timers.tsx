import { useTimersContext } from '../store/timers-context';
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
