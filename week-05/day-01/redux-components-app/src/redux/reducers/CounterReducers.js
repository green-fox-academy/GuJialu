import { INCREASE, DECREASE, SET, RESET , ASYNC_INCREASE} from '../actionCreators';

const initialState = {
  count: 0
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case ASYNC_INCREASE:
      return { count: state.count + action.payload };
    case DECREASE:
      return { count: state.count - 1 };;
    case SET:
      return { count: action.payload };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}