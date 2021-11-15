import header_banner from './../assets/banner_picture.png'
import style from './Header.module.css';
import React from "react";
const  Header = () => {

    return (
        <div className={style.header}>

        <div className={style.header__container}>
            <div className={style.header__description}>
                <div className={style.header__description__title}>
                    Autumn Giveaways for FREE
                </div >
                <div className={style.header__description__text}>
                    Participate in Autumn Giveaway and treat yourself to nice and refreshing cosmetics for free
                </div >
            </div>
                <div className={style.header__img}>
                    <img src={header_banner} alt=""/>
                </div>




        </div>
</div>
            );

}


export default Header;
