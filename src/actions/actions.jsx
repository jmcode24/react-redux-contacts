export const addContactAction = (contact) => {
  return {
    type: "ADD_CONTACT",
    payload: contact,
  };
};