export const getDuration = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);

  return { h, m, formatted: `${h}h ${m}m` };
};
