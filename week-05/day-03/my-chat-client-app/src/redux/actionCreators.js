export const DISPLAY_MESSAGE = 'displayMessage';

export function displayMessage() {
  return (dispatch) => {
    fetch('https://stream-vanadium.glitch.me/messages')
      .then((res) => res.json())
      .then((resJson) => dispatch({ type: DISPLAY_MESSAGE, payload: resJson.messages }))
  };
}