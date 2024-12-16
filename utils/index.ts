const placeHolderFunction = (data?: any, param?: any) => { }

const timeoutDelay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export {
  placeHolderFunction,
  timeoutDelay,
};
