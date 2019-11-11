import { ADD_TAG, REMOVE_TAG, REMOVE_ALL_TAGS } from '../actionCreators';

const initState = {
  tags: ['asdf', 'fdasf']
}

export function tagReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TAG:
      return { tags: [...state.tags, action.payload] };
    case REMOVE_TAG:
      return { tags: state.tags.filter((tag) => tag !== action.payload) };
    case REMOVE_ALL_TAGS:
      return { tags: [] };
    default:
      return state;
  }
}
