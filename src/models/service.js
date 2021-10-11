exports.formatDate = () => {
  const date = new Date();
  let day = date.getDay();
  let mounth = date.getMonth() + 1;
  const year = date.getFullYear();
  if (day < 10) {
    day = `0${day}`;
  }
  if (mounth < 10) {
    mounth = `0${mounth}`;
  }
  return `${day}.${mounth}.${year}`;
};

exports.formatTime = () => {
  const time = new Date();
  let hours = time.getHours();
  let min = time.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  return `${hours}:${min}`;
};
