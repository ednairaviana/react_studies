import PropTypes from "prop-types";

function PropsList(props) {
  const items = props.items;
  const category = props.category;

  const itemList = items.map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <>
      <h3>{category}</h3>
      <ul>{itemList}</ul>
      <br />
    </>
  );
}

PropsList.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
  ),
};

PropsList.defaultProps = {
  category: "Undefined Category",
  items: [],
};

export default PropsList;
