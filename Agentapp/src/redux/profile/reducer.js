import profileConstant from "./constant";
const initialState = {
  profile: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileConstant.getprofile:
      return {
        ...state,
        profile:action?.payload
    };
    default:
      return state;
  }
};