import PropTypes from "prop-types";

function Task(props) {
  return (
    <div className="card">
      <p>{props.title}</p>
      <div className="checkbox">{props.isChecked && "✓"}</div>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string,
  isChecked: PropTypes.bool,
};

Task.defaultProps = {
  title: "Untitle task",
  isChecked: false,
};

export default Task;
