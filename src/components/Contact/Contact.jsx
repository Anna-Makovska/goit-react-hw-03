import s from "../Contact/Contact.module.css"
const Contact = ({ name, number, icons }) => 
{
    return (
        
      <div className={s.mainBox}>
        <div className={s.submainBox}>
          <div className={s.wrapper}>
            <i className={s.icon}>{icons[0]}</i>
            <span className={s.name}>{name} </span>
          </div>
          <div className={s.wrapper}>
            <i className={s.icon}>{icons[1]}</i>
            <span className={s.number}>{number}</span>
          </div>
        </div>

        <button className={s.contactButton}>Delete</button>
      </div>
    );
}
export default Contact;