import dayjs from 'dayjs';

dayjs.locale('ko');

// 로케일 변경
export const setLocale = locale => {
  dayjs.locale(locale);
};

// 날짜 포맷팅
export const dateFormatting = (date, format = 'YYYY-MM-DD') => {
  return date ? dayjs(date).format(format) : null;
};

// 포맷팅 된 오늘 날짜
export const today = () => dateFormatting(dayjs());

// N달 전
export const monthAgo = (month = 1, format) =>
  dateFormatting(dayjs().subtract(month, 'month'), format);

// N일 전
export const dayAgo = (date = 1, format) =>
  dateFormatting(dayjs().subtract(date, 'day'), format);

// N달 후
export const monthLater = (month = 1, format) =>
  dateFormatting(dayjs().add(month, 'month'), format);

// N일 후
export const dayLater = (date = 1, format) =>
  dateFormatting(dayjs().add(date, 'day'), format);
