import { GET_JSON } from '../actionCreators'

const initState = {
  elements: [],
}

export function jsonReducer(state = initState, action) {
  switch (action.type) {
    case GET_JSON:
      return { elements: action.payload.slice(0, 10) };
    default:
      return state;
  }
}