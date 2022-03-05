export const addContactAction = (contact) => {
  return {
    type: "ADD_CONTACT",
    payload: contact,
  };
};

export const editContactAction = (id, contactData) => {
  return {
    type: "EDIT_CONTACT",
    payload: {
      id: id,
      contactData: contactData,
    },
  };
};

export const deleteContactAction = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: id,
  };
};