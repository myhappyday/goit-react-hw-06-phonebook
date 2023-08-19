import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebookReducer';
import { ContactItem, Name, Number, Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <p>
        <Name>{name}:</Name>
        <Number>{number}</Number>
      </p>
      <Button
        type="button"
        aria-label="Delete"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  // onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
