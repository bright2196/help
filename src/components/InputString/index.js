import React from "react";
import styles from "./InputString.module.css";
import PropTypes from "prop-types";

class InputString extends React.Component {
  render() {
    return (
      <div>
        <input
          className={styles.Input}
          style={{
            backgroundColor: this.props.backgroundColor,
            color: this.props.color,
            fontWeight: this.props.fontWeight,
          }}
          type={this.props.inputType}
          placeholder={this.props.placeHolderInput}
          size={this.props.size}
        ></input>
      </div>
    );
  }
}

InputString.propTypes = {
  inputType: PropTypes.string,
  placeHolderInput: PropTypes.string,
  name: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};
export default InputString;
