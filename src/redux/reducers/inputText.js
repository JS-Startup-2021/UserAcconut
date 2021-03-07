const inputText = (state = "Someya", action) => {
  switch (action.type) {
    case "ADDTEXT":
      return state + action.playload;
    default:
      return state;
  }
};

export default inputText;
