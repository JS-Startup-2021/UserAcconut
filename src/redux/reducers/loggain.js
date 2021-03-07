const loggainReducer = (state = "{}", action) => {
  switch (action.type) {
    case "SET_ARTICLE_DETAILS":
      return { data: action.payload };
    default:
      return state;
  }
  /*  
    switch (action.type) {
    case "CHECKPASSWORD":
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
  /*
      switch (action.type) {
        case "FETCH_REQUEST":
          return state;
        case "FETCH_SUCCESS":
          return { ...state, posts: action.payload };
        default:
          return state;
      }*/
};
export default loggainReducer;
