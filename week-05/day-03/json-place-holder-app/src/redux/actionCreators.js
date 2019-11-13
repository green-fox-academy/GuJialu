export const GET_JSON = 'getJson';

export function getJson() {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((resJson => dispatch({ type: GET_JSON, payload: resJson })));
  }
}