export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//let store = createStore(counter);
//store.subscribe(() => console.log(store.getState()));
//store.dispatch(increment());
