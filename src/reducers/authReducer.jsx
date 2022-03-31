const initialState = {
  contact: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTACT_DETAILS":
      return { ...state, contact: action.payload };

      default:
        return state;
  };
};

export default authReducer;