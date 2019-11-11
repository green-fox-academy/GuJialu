export const INCREASE = 'increase';
export const DECREASE = 'decrease';
export const SET = 'set';
export const RESET = 'reset';
export const ADD_TAG = 'addTag';
export const REMOVE_TAG = 'removeTag';
export const REMOVE_ALL_TAGS = 'removeAllTags';

export function increaseCounter() {
  return {
    type: INCREASE
  };
}

export function decreaseCounter() {
  return {
    type: DECREASE
  };
}

export function setCounter(val) {
  return {
    type: SET,
    payload: val
  }
}

export function resetCounter() {
  return {
    type: RESET
  }
}

export function addTag(val) {
  return {
    type: ADD_TAG,
    payload: val
  }
}

export function removeTag(val) {
  return {
    type: REMOVE_TAG,
    payload: val
  }
}

export function removeAllTags() {
  return {
    type: REMOVE_ALL_TAGS,
  }
}