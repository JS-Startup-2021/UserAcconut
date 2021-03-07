import axios from "axios";

/*
export const checkPasswordCorrect = (name, password) => {
  let data = false;

  const v = [];
  axios
    .get("https://jsonplaceholder.typicode.com/posts/" + name)
    .then((res) => {
      data = res.data.title;

      console.log(data === password);
    });
};

export const checkPassword = (name, password) => {
  return {
    type: "CHECKPASSWORD",
    payload: checkPasswordCorrect(name, password),
  };
}; */

export const fetchArticleDetails = (name) => {
  return function (dispatch) {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts/" + name)
      .then(({ data }) => {
        dispatch(setArticleDetails(data.title));
      });
  };
};
export const setArticleDetails = (data) => {
  return {
    type: "SET_ARTICLE_DETAILS",
    payload: data,
  };
};
