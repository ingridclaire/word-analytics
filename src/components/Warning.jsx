import PropTypes from "prop-types";

export default function Warning({ message }) {
  return <p className="warning">{message}</p>;
}

Warning.propTypes = {
  message: PropTypes.string.isRequired,
};
