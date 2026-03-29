export const getFormattedDate = (targetDate) => {
  const dateObj = new Date(Number(targetDate));
  return dateObj.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

export const getDayName = (targetDate) => {
  return new Date(Number(targetDate)).toLocaleDateString('ko-KR', { weekday: 'short' });
};

export const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  return `${year}-${month}-${date}`;
};
