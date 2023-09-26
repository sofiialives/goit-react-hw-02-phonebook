import css from './ContactForm.module.css'
export const ContactForm = ({
  handleSubmit,
  loginInputId,
  handleChange,
  name,
  number,
}) => {
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={loginInputId}>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+$"
        minlength="3"
        maxlength="16"
        id={loginInputId}
        onChange={handleChange}
        value={name}
        className={css.inputName}
        required
      />
      <label htmlFor={loginInputId}>Number</label>
      <input
        type="tel"
        name="number"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        title="xxx-xx-xx"
        id={loginInputId}
        onChange={handleChange}
        value={number}
        className={css.inputName}
        required
      />
      <button type="submit" className={css.buttonContacts}>Add Contact</button>
    </form>
  );
};
