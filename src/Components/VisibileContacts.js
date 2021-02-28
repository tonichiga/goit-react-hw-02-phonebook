import ContactElement from './VisibileContacts/';
import s from './VisibileContacts.module.scss';

const VisibileContacts = ({
  data,
  onFindContact,
  filterContact,
  valueFilter,
}) => {
  return (
    <>
      <h2>Contacts</h2>
      <p>Find contact</p>
      <input
        type="text"
        placeholder="enter name"
        onChange={onFindContact}
        value={valueFilter}
      ></input>
      <p>{filterContact.map(({ name }) => name)}</p>
      <ul className={s.list}>
        {data.map(data => (
          <ContactElement name={data.name} number={data.number} key={data.id} />
        ))}
      </ul>
    </>
  );
};

export default VisibileContacts;
