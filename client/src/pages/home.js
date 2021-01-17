import { connect } from "react-redux";
import { addUserCreds } from "../actions";


function L(props) {
    console.log(props.auth.user.username);
    return (
        <div>
            Hello {props.auth.user.username}, {props.auth.user.password}!
        </div>
    )
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
    L
  );