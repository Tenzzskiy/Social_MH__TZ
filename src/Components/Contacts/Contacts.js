import style from './Contacts.module.css'
import React from "react";


const Contacts = () => {
    return (
       <div className={style.contacts}>
           <div className={style.container}>
               <div className={style.contacts__flex}>

                   <div className={style.first__row}>
                    <div className={style.item}>Privacy and Terms </div>
                    <div className={style.item}>Need Help? </div>
                    <div className={style.item}>Social </div>

                   </div>

                   <div className={style.second__row}>
                       <div className={style.item}>Privacy Policy</div>
                       <div className={style.item}>mail@gmail.com </div>
                       <div className={style.item}>Facebook </div>
                   </div>

                   <div className={style.third__row}>
                       <div className={style.item}> Terms of use</div>
                       <div className={style.item}> Instagram</div>

                   </div>

               </div>


           </div>

       </div>

    );
}

export default Contacts;
