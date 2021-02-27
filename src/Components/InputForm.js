import s from './ButtonAddContact.module.scss';

const InputForm = ({
  onChangeName,
  onChangeNumber,

  onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <p>Name</p>
    <input type="text" onChange={onChangeName}></input>
    <p>Number</p>
    <input type="number" onChange={onChangeNumber}></input>

    <button type="submit" className={s.addButton}>
      Add contact
    </button>
  </form>
);

export default InputForm;
