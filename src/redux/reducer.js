import { getHourMinuteSecond, calcAverage } from '../lib/lib';

const initialState = {
  count: 0,
  last: 0,
  changeCount: 0,
  average: 0,
  time: getHourMinuteSecond(),
};

export default function reducer(state = initialState, action) {
  const { average, count, changeCount } = state;
  switch (action.type) {
    case 'add':
      return {
        changeCount: changeCount + 1,
        average: calcAverage(average, count, changeCount),
        time: getHourMinuteSecond(),
        last: count,
        count: count + 1,
      };
    case 'subtratc':
      return {
        changeCount: changeCount + 1,
        average: calcAverage(average, count, changeCount),
        time: getHourMinuteSecond(),
        last: state.count,
        count: state.count - 1,
      };
    case 'reset':
      return {
        changeCount: 0,
        count: 0,
        last: 0,
        average: 0,
        time: getHourMinuteSecond(),
      };
    default:
      return state;
  }
}
