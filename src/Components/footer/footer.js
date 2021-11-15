import style from './footer.module.css'
import React from "react";


function Footer() {
    return (
       <div className={style.footer}>
           <div className={style.Container}>

                   <div className={style.footer__text}> © All Rights Reserved </div>

           </div>

       </div>
    );
}

export default Footer;
