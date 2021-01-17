import { ADD_USER_AUTH } from "../actions/types";

const initialState = {
    user: {
      username: null,
      password: null,
    },
    google: {
      tokenInfo: {
        bearerToken: null,
        bearerExpirationTime: null,
        bearerIssueTime: null,
      },
      profileInfo: {
        email: null,
        familyName: null,
        givenName: null,
        googleId: null,
        imageUrl: null,
        name: null,
      },
    },
  };

export default function AuthReducer(state = initialState, action) {

  console.log(action.type);
  switch (action.type) {
    case ADD_USER_AUTH:
      return {
        ...state,
        user: {
          username: action.payload.user.username,
          password: action.payload.user.password
        },
        google: {
          tokenInfo: {
            bearerToken: action.payload.google.tokenInfo.bearerToken,
            bearerExpirationTime: action.payload.google.tokenInfo.bearerExpirationTime,
            bearerIssueTime: action.payload.google.tokenInfo.bearerIssueTime
          },
          profileInfo: {
            email: action.payload.google.profileInfo.email,
            familyName: action.payload.google.profileInfo.familyName,
            givenName: action.payload.google.profileInfo.givenName,
            googleId: action.payload.google.profileInfo.googleId,
            imageUrl: action.payload.google.profileInfo.imageUrl,
            name: action.payload.google.profileInfo.name
          }
        }
      };
    default:
      return state;
  }
}
