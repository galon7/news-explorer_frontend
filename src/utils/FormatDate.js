export function dateRange() {
  const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };
  const date = new Date();
  const currentDate = formatDate(date);
  const weekAgo = new Date(date);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const weekAgoDate = formatDate(weekAgo);
  return { currentDate, weekAgoDate };
}

export function convertDate(date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dates = date.split('T');
  const values = dates[0].split('-');
  const month = values[1];
  let monthNum = 0;
  if (month.charAt(0) === '0') monthNum = month.charAt(1);
  else monthNum = month;
  return `${months[monthNum - 1]} ${values[2]}, ${values[0]}`;
}
