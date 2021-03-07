const userReducer = (state = "f", action) => {
  switch (action.type) {
    case "PERSONNUMER":
      return state + action.paylod;
    default:
      return state;
  }
};
export default userReducer;
