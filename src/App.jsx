import s from './App.module.css'
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useMemo } from 'react';
import { useEffect } from 'react';

function App() {
  const icons = [<IoPerson />, <FaPhoneAlt />];
  const [inputValue, setInputValue] = useState("");
  const [debouncedInputValue] = useDebounce(inputValue, 300);
  const [contacts, setContacts] = useState(() => {
    const savedObject = window.localStorage.getItem("saved-contacts");
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  });
  
  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts))
  }, [contacts]);



  const visibleContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(debouncedInputValue.toLowerCase()))
  
  }, [contacts, debouncedInputValue]);

  const addContact = (values) => {

    const newContact = {
      id: Date.now() ,
      name: values.username,
      number: values.number,
  }
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    }
   )
  }
  
  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    )
  }

  
  return (
    <section className="section">
      <div className="container">
        <h1 className={s.header}>Phonebook</h1>
        <ContactForm
          onSubmit={addContact}
        />
        <SearchBox value={inputValue} onChange={setInputValue} />
        <ContactList icons={icons}
          filter={visibleContacts}
          onDelete={deleteContact}
           />
      </div>
    </section>
  );
}

export default App
