const initialState = {
  contacts: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };

    case "EDIT_CONTACT":
      return state;

    case "DELETE_CONTACT":
      return state;

    default:
      return state;
  }
};

export default contactsReducer;