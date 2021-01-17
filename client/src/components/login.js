import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addUserCreds } from "../actions";

import Logo from "./logos/CYOSLogo";
import GoogleLogo from "./logos/GoogleLogo";
import axios from "axios";

const InLineText = styled(Form.Text)`
  font-size: ${(props) => props.fontSize};
  float: ${(props) => props.float};
  color: black;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InLineATag = styled.a`
  font-size: ${(props) => props.fontSize};
  float: ${(props) => props.float};
  margin-bottom: 20px;
  color: #088771;
  font-weight: bold;
`;

const LogIn = (props) => {

  const history = useHistory();
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  async function responseGoogle(response) {
    console.log(response);
    history.push("/");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(username, password);
    const userData = {
      username: username,
      password: password
    }
    const googleData = {
      tokenInfo: {
        bearerToken: null,
        bearerExpirationTime: null,
        bearerIssueTime: null
      },
      profileInfo: {
        email: "danielmurph8@gmail.edu",
        familyName: null,
        givenName: null,
        googleId: null,
        imageUrl: null,
        name: null
      }
    }
    props.addUserCreds(userData, googleData);

    axios({
      method: "post",
      url: "http://localhost:5000/auth/login",
      data: {
        username: username,
        password: password,
      },
    }).then(
      (response) => {
        // TODO: add authentication check and pop-up message for incorrect credentials
        console.log(response);
        history.push("/");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="box">
      <a href="/" rel="noreferrer">
        {Logo()}
      </a>
      <div className="login-wrapper">
        <Form style={{ width: "350px" }}>
          <div>
            <InLineText fontSize={"16px"} float={"left"}>
              Sign In
            </InLineText>
            <InLineATag href="/forgot" fontSize={"14px"} float={"right"}>
              Forgot Password?
            </InLineATag>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleUsername}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Button
              variant="primary"
              type="submit"
              style={{
                width: "350px",
                backgroundColor: "#BBC918",
                border: "1px solid #BBC918",
              }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Form.Group>
        </Form>
        <GoogleLogin
          clientId="174084973781-lghmn9234jkpq2elgna0cd2hifg4tu5k.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              style={{
                width: "350px",
                backgroundColor: "white",
                padding: "5px",
                border: "1px solid white",
                borderRadius: "5px",
              }}
            >
              {GoogleLogo()} Sign In With Google
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          // TODO: make this more robust later
          // FIXME!
          onFailure={ () => {alert("Error!")}}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

function mapStatetoProps(state) {
  return {
    auth: {
      user: {
        username: state.userAuth.user.username,
        password: state.userAuth.user.password,
      },
      google: {
        tokenInfo: {
          bearerToken: state.userAuth.google.tokenInfo.bearerToken,
          bearerExpirationTime: state.userAuth.google.tokenInfo.bearerExpirationTime,
          bearerIssueTime: state.userAuth.google.tokenInfo.bearerIssueTime,
        },
        profileInfo: {
          email: state.userAuth.google.profileInfo.email,
          familyName: state.userAuth.google.profileInfo.familyName,
          givenName: state.userAuth.google.profileInfo.givenName,
          googleId: state.userAuth.google.profileInfo.googleId,
          imageUrl: state.userAuth.google.profileInfo.imageUrl,
          name: state.userAuth.google.profileInfo.name,
        },
      },
    },
  };
}

export default connect(mapStatetoProps, { addUserCreds })(
  LogIn
);