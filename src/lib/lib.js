export function getHourMinuteSecond() {
  const dt = new Date();

  return `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
}

export function calcAverage(avg, curr, count) {
  return avg === 0 && count === 0
    ? 0
    : ((avg * count + curr) / count).toFixed(2);
}
