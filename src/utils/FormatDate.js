export function dateRange() {
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const weekAgoDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 7}`;
  return { currentDate, weekAgoDate };
}
