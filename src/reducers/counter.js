//reducer = how actions transform the initial state (store)
const counter = (state = 0, action) => {
  //depending on the action and its type
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'INCREMENT' :
      return state + 1;
    case 'DECREMENT' :
      return state - 1;
    default:
      return state;
  }
};

export default counter;