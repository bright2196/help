import React from "react";
import styles from './TriggerPlaylistButton.module.css';
import PropTypes from 'prop-types';



class TriggerButton extends React.Component {
  
  render() {
    return (
      <button className={styles.buttonPlaylistTrigger} 
      style={{
        backgroundColor: this.props.backgroundColor,
        color: this.props.color,
        fontWeight: this.props.fontWeight,
        background:this.props.background}} // background is for the gradiant background
      >

      {this.props.name} 
      
      </button>
    );
  }
}


TriggerButton.propTypes = {
    name: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontWeight: PropTypes.string,
    background: PropTypes.string




  }
  export default TriggerButton;