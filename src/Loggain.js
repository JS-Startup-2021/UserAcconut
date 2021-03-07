import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleDetails } from "./redux/actions/loggain.js";

//import { useSelector } from "react-redux";
//import { useLocation, useHistory } from "react-router-dom";
//import { Alert } from "../UI";

//import queryString from "query-string";

// ForgotPassword component
const Loggain = (props) => {
  // const history = useHistory();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emptyLoginFields, setEmptyLoginFields] = useState(false);
  const [newPasswordNotMatch, setNewPasswordNotMatch] = useState(false);
  const loggaincorrect = useSelector((state) => state.loggaincorrect);
  const dispatch = useDispatch();
  //  const location = useLocation();
  //  const [redirectUrl, setRedirectUrl] = useState(false);
  /*
  useEffect(() => {
    const qs = queryString.parse(location.search);
    if ("redirect" in qs) {
      const redirectToUrl = qs["redirect"];
      setRedirectUrl(redirectToUrl);
    }
  }, []);
 
  const checkInputFieldsAndContinue = () => {
    if (firstNewPassword === secondNewPassword) {
      if (redirectUrl) {
        history.push("/" + redirectUrl);
      }
    } else {
      setNewPasswordNotMatch(true);
    }
  };
  */
  // newPasswordForm form

  const checkInputFieldsAndContinue = () => {
    dispatch(fetchArticleDetails(userName));
    console.log(loggaincorrect);
  };
  const LoggainForm = () => {
    return (
      <div className="newpassword">
        <ul>{"hdj" + loggaincorrect}</ul>
        <div className="newpassword__wrapper">
          <div className="text-center">
            <h1 className="h1 page-header newpassword__header">
              {"Ändra lösenord"}
            </h1>
          </div>
          {newPasswordNotMatch === true && (
            <p>{"Lösenorden du har angett matchar inte"}</p>
          )}
          <form className="newpassword__form">
            <div>
              <input
                type="text"
                placeholder={"Nytt lösenord"}
                value={userName}
                name="firstnewpassword"
                id="firstnewpassword"
                className={`form-control newpassword__firstnewpassword${
                  emptyLoginFields?.firstNewPassword === "" && !userName
                    ? " newpassword__input--invalid"
                    : ""
                }`}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={"Repetera nytt lösenord"}
                name="secondnewpassword"
                id="secondnewpassword"
                value={userPassword}
                className={`form-control newpassword__secondnewpassword${
                  emptyLoginFields?.secondNewPassword === "" && !userPassword
                    ? " newpassword__input--invalid"
                    : ""
                }`}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
            </div>

            <div className="newpassword__submit-container">
              <input
                type="button"
                className="btn btn-primary btn-block newpassword__submit"
                value={"Enter"}
                onClick={checkInputFieldsAndContinue}
              />
            </div>
          </form>
        </div>
      </div>
    );
  };

  return LoggainForm();
};

export default Loggain;
