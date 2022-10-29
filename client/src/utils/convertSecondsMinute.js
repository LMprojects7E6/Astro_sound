export const secondsToMinutes = (time) => {
  const minutes = Math.floor(time / 60);
  const minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  const seconds = time - minutes * 60;
  const roundSeconds = Math.round(seconds);
  const secondsFormat = roundSeconds < 10 ? `0${roundSeconds}` : roundSeconds;

  return `${minutesFormat}:${secondsFormat}`;
};
