import style from './HowWork.module.css'
import first from './../assets/1.svg'
import second from './../assets/2.svg'
import third from './../assets/3.svg'
import fourth from './../assets/4.svg'
import fifth from './../assets/5.svg'
import next from './../assets/next.svg'
import React from "react";
const HowWork =() => {
  return (

  <div className={style.How}>
    <div className={style.How__Container}>
    <div className={style.How__title}>
      How does it work?
    </div>
    <div className={style.How__chain}>
          <div className={style.first__row}>
        <div className={style.How__chain__item__flex}>

          <div className={style.How__chain__item}>
            <img src={first} alt=""/>
          </div>

          <div className={style.How__chain__item__description__1}>empty </div>

        </div>




      <div className={style.next}> <img src={next} alt=""/> </div>

        <div className={style.How__chain__item__flex__2}>

          <div className={style.How__chain__item}>
            <img src={second} alt=""/>
          </div>

          <div className={style.How__chain__item__description__2}>Choose product </div>

        </div>
          </div>

      <div className={style.next__2}> <img src={next} alt=""/>  </div>
      <div className={style.second__row}>
    <div className={style.How__chain__item__flex}>

      <div className={style.How__chain__item}>
        <img src={third} alt=""/>
      </div>
      <div className={style.How__chain__item__description}>Buy product </div>
    </div>
      <div className={style.next}> <img src={next} alt=""/> </div>
    <div className={style.How__chain__item__flex}>

      <div className={style.How__chain__item}>
        <img src={fourth} alt=""/>
      </div>
      <div className={style.How__chain__item__description}>Test and share review </div>
    </div>
      </div>
      <div className={style.next__5}><img src={next} alt=""/>  </div>
      <div className={style.third__row}>
     <div className={style.How__chain__item__flex}>

       <div className={style.How__chain__item}>
         <img src={fifth} alt=""/>
       </div>
        <div className={style.How__chain__item__description__last}>Get 100% money back </div>
     </div>
    </div>
    </div>

    </div>

  </div>

  );
}

export default HowWork;
