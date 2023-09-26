export const Filter = ({loginInputId, filter,handleChange}) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="filter"
        name="filter"
        id={loginInputId}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
