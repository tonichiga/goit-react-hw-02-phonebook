import s from './ButtonAddContact.module.scss';

const InputForm = ({
  onChangeName,
  onChangeNumber,
  valueNumber,
  valueName,
  onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <p>Name</p>
    <input
      type="text"
      onChange={onChangeName}
      value={valueName}
      name="name"
    ></input>
    <p>Number</p>
    <input
      type="number"
      onChange={onChangeNumber}
      value={valueNumber}
      name="number"
    ></input>

    <button type="submit" className={s.addButton}>
      Add contact
    </button>
  </form>
);

export default InputForm;
