import { ADD_USER_AUTH } from "./types";

export const addUserCreds = (userData, googleData) => (dispatch) => {
  const payload = {
    user: {
      username: userData.username,
      password: userData.password,
    },
    google: {
      tokenInfo: {
        bearerToken: googleData.tokenInfo.bearerToken,
        bearerExpirationTime: googleData.tokenInfo.bearerExpirationTime,
        bearerIssueTime: googleData.tokenInfo.bearerIssueTime,
      },
      profileInfo: {
        email: googleData.profileInfo.email,
        familyName: googleData.profileInfo.familyName,
        givenName: googleData.profileInfo.givenName,
        googleId: googleData.profileInfo.googleId,
        imageUrl: googleData.profileInfo.imageUrl,
        name: googleData.profileInfo.name,
      },
    }, 
  };
  dispatch({ type: ADD_USER_AUTH, payload: payload });
};
