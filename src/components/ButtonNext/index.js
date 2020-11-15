import React from "react";
import styles from './ButtonNext.module.css';
import PropTypes from 'prop-types';



class ButtonNext extends React.Component {
  
  render() {
    return (
      <button className={styles.buttonNext} 
      style={{
        backgroundColor: this.props.backgroundColor,
        color: this.props.color,
        fontWeight: this.props.fontWeight}}
      >

      {this.props.name} 
      
      </button>
    );
  }
}


  ButtonNext.propTypes = {
    name: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string


  }
  export default ButtonNext;