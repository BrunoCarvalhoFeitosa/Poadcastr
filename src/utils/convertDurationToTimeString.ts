export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / (3600)),
        minutes = Math.floor((duration % 3600) / 60),
        seconds = duration % 60,
        timeString = [hours, minutes, seconds]
          .map(unit => String(unit).padStart(2, '0'))
          .join(':');

  return timeString;
};