import React from "react";
import PropTypes from 'prop-types';
import styles from './Text.module.css'



class Text extends React.Component {
  
  render() {
    return (
<div className={styles.textContainer}>
      <h3 className={styles.textLink} 
      style={{
        colorLink: this.props.colorLink,
        fontWeightLink: this.props.fontWeightLink,
        fontSizeLink: this.props.fontSizeLink}}
      >

      {this.props.nameLink} 
      
      </h3>
      
      <label className={styles.textSubtitle}
      style={{
        colorSubtitle: this.props.colorSubtitle,
        fontWeightSubtitle: this.props.fontWeightSubtitle,
        fontSizeSubtitle: this.props.fontSizeSubtitle}}
      >

      {this.props.nameSubtitle} 
      
      </label>

      </div>
    );
  }
}


Text.propTypes = {
    nameLink: PropTypes.string,
    fontWeightSubtitle: PropTypes.string,
    fontSizeSubtitle: PropTypes.string,
    nameSubtitle: PropTypes.string,
    colorLink: PropTypes.string,
    colorSubtitle: PropTypes.string,
    fontWeightLink: PropTypes.string,
    fontSizeLink: PropTypes.string,





  }
  export default Text;