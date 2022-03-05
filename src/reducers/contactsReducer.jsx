const initialState = {
  contacts: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };

    case "EDIT_CONTACT":
      const editedContacts = state.contacts.map((contact) => {
        if(contact.id === action.payload.id) return action.payload.contactData;
        return contact
      });
      return { ...state, contacts: editedContacts };

    case "DELETE_CONTACT":
      const filteredContacts = state.contacts.filter((contact) => {
        if (contact.id !== action.payload) return contact;
      });
      return { ...state, contacts: filteredContacts}

    default:
      return state;
  }
};

export default contactsReducer;