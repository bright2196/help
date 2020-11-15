import React from "react";
import styles from './SousTitre.module.css';
import PropTypes from 'prop-types';



class SousTitre extends React.Component {
  
  render() {
    return (

      <label className={styles.text} 
      style={{
        color: this.props.color,
        fontWeight: this.props.fontWeight,
        fontSize: this.props.fontSize}}
      >

      {this.props.name} 
      
      </label>
      
    );
  }
}


SousTitre.propTypes = {
    name: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string


  }
  export default SousTitre;