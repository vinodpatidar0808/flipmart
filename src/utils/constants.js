export const getDayStartTimestamp = (date) => {
  if (!date) return null;
  const [year, month, day] = date.split('-');
  const newDate = new Date(year, month - 1, day, 0, 0, 0, 0);
  return newDate.getTime();
};

export const getDayEndTimestamp = (date) => {
  if (!date) return null;
  const [year, month, day] = date.split('-');
  const newDate = new Date(year, month - 1, day, 23, 59, 59, 999);
  return newDate.getTime();
};
