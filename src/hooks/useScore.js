export const useScore = (score) => {
  const persentage = (score / 110) * 100;

  return `${persentage.toFixed(1)} %`;
};
