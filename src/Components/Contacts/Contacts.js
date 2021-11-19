import style from './Contacts.module.css'
import React from "react";


const Contacts = () => {
    return (
       <div className={style.contacts}>
           <div className={style.container}>
               <div className={style.contacts__flex}>
                   <div className={style.adaptive__div}>
                   <div className={style.first__column}>
                    <div className={style.item__1}>Privacy and Terms </div>
                    <div className={style.item}> Privacy Policy </div>
                    <div className={style.item}>  Terms of use </div>

                   </div>

                   <div className={style.second__column}>
                       <div className={style.item__1}> Need Help?</div>
                       <div className={style.item}>mail@gmail.com</div>
                        <div> </div>
                   </div>
               </div>
                   <div className={style.third__column}>
                       <div className={style.item__1}>Social</div>
                       <div className={style.item}> Facebook</div>
                       <div className={style.item}>Instagram </div>
                   </div>



               </div>


           </div>

       </div>

    );
}

export default Contacts;
