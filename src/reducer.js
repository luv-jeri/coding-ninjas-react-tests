import { ADD_COUNT, SUBSTRACT_COUNT } from './actions';

const initialState = {
  count: 0,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case SUBSTRACT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
