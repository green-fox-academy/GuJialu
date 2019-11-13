import { DISPLAY_MESSAGE } from '../actionCreators';

const initState = {
  messages: [],
}

export function messageReducer(state = initState, action) {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return { messages: action.payload };
    default:
      return state;
  }
}
