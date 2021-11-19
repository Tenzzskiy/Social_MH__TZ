import style from './Step__5.module.css'
import React from "react";
import jam from './../../assets/first__step.jpg'
import {NavLink} from "react-router-dom";
import amazon from './../../assets/amazon_ico.svg'


const  StepFive = () => {

    return (
        <div className={style.StepTwo}>
            <div className={style.Container}>
                <div className={style.title}>Step 5  </div>
                <div className={style.title__text}> Buy and Provide order <br /> ID to our Manager </div>


                <div className={style.description__text__mrgn}>
                <div className={style.description__text}>

                    Click the button <b> GO TO AMAZON </b> and <b> Buy a Product </b>
                </div>

                </div>


                <div className={style.button_description}>
                    <a href="https://www.amazon.com/" className={style.button__amazon__flex}>
                        <button className={style.button__3__ye}>Go to amazon <img src={amazon} alt=""/></button>
                    </a>
                </div>
                <div className={style.provide_description}> Click on the button below and <b>Provide Order ID to our Manager</b> in FB Messenger</div>
                <div className={style.description__provide__text}><i> (If you have any questions, you can ask them to our Manager)</i></div>
                <div className={style.button__flex}>
                <Button4 text={'provide order id'} road={'/StepShop'} styles={style.button__3__ye}/>




            </div>

            </div>

            <div className={style.StepOne__img}>
                   <img src={jam} alt=""/>
        </div>
        </div>
    );
}

export default StepFive;

const Button4 = (props) =>{
    return(
        <>
            <NavLink to={props.road} className={props.styles} > {props.text}  </NavLink>
        </>
    )
}