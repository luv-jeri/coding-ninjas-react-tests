import { createStore } from 'redux';

const countReudcer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore(countReudcer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
