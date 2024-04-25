export const indexBy = (arr: Array<object>, key: string): object => {
  return arr.reduce((acc: object, item: object) => {
    acc[item[key]] = item;
    return acc;
  }, {});
};
