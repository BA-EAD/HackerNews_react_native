import dayjs from 'dayjs';

// time management
export const getFormatTime = (time: any) => {
  let agoTime = dayjs(new Date().getTime()).diff(time * 1000, 'hours');
  if (agoTime > 0) {
    if (agoTime > 60) {
      agoTime = dayjs(new Date().getTime()).diff(time * 1000, 'day');
      return `${agoTime}d ago`;
    } else {
      return `${agoTime}h ago`;
    }
  } else {
    agoTime = dayjs(new Date().getTime()).diff(time * 1000, 'minute');
    if (agoTime > 3) {
      return `${agoTime}m ago`;
    } else {
      return 'now';
    }
  }
}
