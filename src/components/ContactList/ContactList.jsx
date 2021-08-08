import { List } from './ContactList.styles';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../redux/actions/contacts-action';
import { getVisibleContacts } from '../redux/selectors/contacts-selectors';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContacts = id => dispatch(contactsActions.deleteContact(id));
  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => onDeleteContacts(contact.id)}>
            Удалить
          </button>
        </li>
      ))}
    </List>
  );
}

export default ContactList;
