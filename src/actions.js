export const ADD_COUNT = 'ADD_COUNT';
export const SUBSTRACT_COUNT = 'SUBSTRACT_COUNT';

export const addCount = (store) => {
  store.dispatch({
    type: ADD_COUNT,
  });
};

export const substractCount = (store) => {
  store.dispatch({
    type: SUBSTRACT_COUNT,
  });
};
