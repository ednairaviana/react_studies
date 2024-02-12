import PropTypes from "prop-types";

function Person(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>
        Corno? {props.isCorno ? "Muito corno" : "Ainda não sabe que é corno"}
      </p>
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isCorno: PropTypes.bool,
};

Person.defaultProps = {
  name: "Biruleibe",
  age: 0,
  isCorno: false,
};

export default Person;
