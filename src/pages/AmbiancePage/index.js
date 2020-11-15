import React from 'react'
import ReturnButton from '../../components/ReturnButton';
import TriggerButton from '../../components/TriggerPlaylistButton';
import styles from './Ambiance.module.css'
import HomeLayout from "../../layout";



const AmbiancePage = () => {

    return (
      <div><ReturnButton/>

      <div>
      <HomeLayout />


    </div>
     <div className={styles.ambiancePageContainer}>
       
     
     
      <div className={styles.triggerPlaylist}>
      <h2 className={styles.TitreAmbiance}>Adapte tes musiques à chaque ambiance</h2>

      <div className={styles.item1}>

      <TriggerButton
        name= "Au boulot"
        color= "#F8F8F8"
        fontWeight= "700"
        backgroundColor = "rgb(238,238,238)"
        background = "linear-gradient(90deg, rgba(218,188,188,1) 0%, rgba(165,152,182,1) 31%, rgba(101,108,174,1) 65%, rgba(58,79,169,1) 100%)"
      
      />

      </div>

      <div className={styles.item2}>

      <TriggerButton
        name= "Douce nuit"
        color= "#F8F8F8"
        fontWeight= "700"
        backgroundColor = "rgb(238,238,238)"
        background = "linear-gradient(90deg, rgba(218,188,188,1) 0%, rgba(165,152,182,1) 31%, rgba(101,108,174,1) 65%, rgba(58,79,169,1) 100%)"
      
      />

      </div>

      <div className={styles.item3}>

      <TriggerButton
        name= "Training Day !"
        color= "#F8F8F8"
        fontWeight= "700"
        backgroundColor = "rgb(238,238,238)"
        background = "linear-gradient(90deg, rgba(218,188,188,1) 0%, rgba(165,152,182,1) 31%, rgba(101,108,174,1) 65%, rgba(58,79,169,1) 100%)"
      
      />

      </div>

      <div className={styles.item4}>

      <TriggerButton
        name= "Nuit de folie"
        color= "#F8F8F8"
        fontWeight= "700"
        backgroundColor = "rgb(238,238,238)"
        background = "linear-gradient(90deg, rgba(218,188,188,1) 0%, rgba(165,152,182,1) 31%, rgba(101,108,174,1) 65%, rgba(58,79,169,1) 100%)"
      
      />

      </div>

      <div className={styles.item5}>

      <TriggerButton
        name= "Réveille-toi !"
        color= "#F8F8F8"
        fontWeight= "700"
        backgroundColor = "rgb(238,238,238)"
        background = "linear-gradient(90deg, rgba(218,188,188,1) 0%, rgba(165,152,182,1) 31%, rgba(101,108,174,1) 65%, rgba(58,79,169,1) 100%)"
      
      />

      </div>

      <div className={styles.item6}>

      <TriggerButton
        name= "Jour de pluie"
        color= "#F8F8F8"
        fontWeight= "700"
        backgroundColor = "background: rgb(57,181,182)"
        background = "linear-gradient(96deg, rgba(57,181,182,1) 0%, rgba(190,185,198,0.7848442492012779) 100%)"
      
      />

      </div>

          
    <div className={styles.item7}>

    <TriggerButton
      name= "Il fait beau !"
      color= "#F8F8F8"
      fontWeight= "700"
      backgroundColor = "rgb(238,238,238)"
      background = "linear-gradient(90deg, rgba(218,188,188,1) 0%, rgba(165,152,182,1) 31%, rgba(101,108,174,1) 65%, rgba(58,79,169,1) 100%)"

    />

    </div>

    <div className={styles.item8}>

      <TriggerButton
        name= "Prendre l'air"
        color= "#F8F8F8"
        fontWeight= "700"
        backgroundColor = "rgb(33,160,162)"
        background = "linear-gradient(96deg, rgba(33,160,162,1) 0%, rgba(114,145,79,1) 36%, rgba(140,140,52,1) 65%, rgba(161,136,31,1) 100%"
    
      />

    </div>
    


    </div>
    </div>
    </div>
    );
  }
  
  export default AmbiancePage;
  