export const dateTransformer = (dateString) => {
  const currentTime = new Date(dateString);
  return `${currentTime.toLocaleDateString()}, ${currentTime.toLocaleTimeString()}`;
};

export const compareCreatedAt = (a, b) => {
  if (a.createdAt > b.createdAt) return -1;
  if (a.createdAt < b.createdAt) return 1;
  return 0;
};
