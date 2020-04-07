export const tabs = [`Overview`, `Details`, `Reviews`];

export const getTimeFromMinutes = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return `${hours}h ${minutes}m`;
};

export const getRatingName = (rate) => {
  const rateFloor = Math.floor(rate);

  if (rateFloor < 3) {
    return `bad`;
  } else if (rateFloor >= 3 && rateFloor < 5) {
    return `normal`;
  } else if (rateFloor >= 5 && rateFloor < 8) {
    return `good`;
  } else if (rateFloor >= 8 && rateFloor < 10) {
    return `very good`;
  } else if (rateFloor >= 10) {
    return `awesome`;
  }

  return rateFloor;
};
