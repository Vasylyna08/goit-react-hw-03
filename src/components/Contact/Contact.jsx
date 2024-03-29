import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import css from './Contact.module.css';

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <p className={css.contactInfoItem}>
          <IoPersonSharp size={16} />
          <span>{name}</span>
        </p>
        <p className={css.contactInfoItem}>
          <FaPhone size={16} />
          <span>{number}</span>
        </p>
      </div>
      <button className={css.deleteButton} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
