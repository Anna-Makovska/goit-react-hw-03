import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.css"
const ContactList = ({ icons, filter }) => {
    return (
      <ul className={s.list}>
        {filter.map((contact) => (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              icons={icons}
            />
          </li>
        ))}
      </ul>
    );
}
export default ContactList;