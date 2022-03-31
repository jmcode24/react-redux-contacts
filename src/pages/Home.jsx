import React from "react";
import ContactsForm from "../components/ContactsForm";
import ContactsList from "../components/ContactsList"

const Home = () => {
  return (
    <div>
      <ContactsForm />
      <ContactsList />
    </div>
  );
};

export default Home;

