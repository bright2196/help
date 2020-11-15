import React from "react";
import HomeLayout from "../../layout";
import CalendarImage from "./img/calendrierMonth.svg";
import styles from "./Calendar.module.css";
import ReturnButton from "../../components/ReturnButton";
import GoogleIcon from "./img/googleIcon.svg";
import AppleIcon from "./img/appleIcon.svg";
import FacebookIcon from "./img/facebookIcon.svg";


const Calendar = () => {
  return (
    <div>
      <div>
        <ReturnButton/>
        <h1 className={styles.titrePlanning}>Mon planning</h1>

      
      <HomeLayout />
      <div className={styles.CalendarContainer}>
      <img className={styles.calendarImage} src={CalendarImage} alt="Calendrier, nous n'avons pas eu le temps de l'intégrer" />


      </div>
      <p className={styles.orText}>ou</p>

<div className={styles.containerIcon}>


<div className={styles.iconItem1}>
      <img
        src={FacebookIcon}
        alt="GoogleIcon"
      />
  

  </div>

  <div className={styles.iconItem2}>
      <img
       
        src={AppleIcon}
        alt="AppleIcon"
      />
  
  
  </div>


<div className={styles.iconItem3}>
      <img
       
        src={GoogleIcon}
        alt="GoogleIcon"
      />
  
  
  </div>
    </div>    
    </div>
    </div>
   
  );
};

export default Calendar;
