import dayjs from 'dayjs';


export const getFormatTime = (time: any) => {
  let agoTime = dayjs(new Date().getTime()).diff(time * 1000, 'hours');
  if (agoTime > 0) {
    return `${agoTime}h ago`;
  } else {
    agoTime = dayjs(new Date().getTime()).diff(time * 1000, 'minute');
    if (agoTime > 3) {
      return `${agoTime}m ago`;
    } else {
      return 'now';
    }
  }
//   return dayjs(new Date().getTime()).diff(time * 1000, 'hours');
}
