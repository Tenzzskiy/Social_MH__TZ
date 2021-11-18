import style from './Step__3.module.css'
import React from "react";
import jam from './../../assets/first__step.jpg'
import {NavLink} from "react-router-dom";



const  StepThree = (props) => {

    return (
        <div className={style.StepTwo}>
            <div className={style.Container}>
                <div className={style.title}>Step 3  </div>


                <div className={style.title__text}> Amazon Prime </div>

                <div className={style.description__text}>
                <div className={style.first__description}>
                    Do you have an Amazon Prime account?
                </div>
                    <div>
                        To be able to participate in this giveaway you need to have Amazon Prime.
                    </div>

                </div>
                <div className={style.button__flex}>
                <Button3 text={'Yes, i have'} road={'/StepFour'} styles={style.button__3__yes} />
                    <a href="https://www.amazon.com/">
                    <button className={style.button__3__no}>no, i don’t have </button>
                    </a>

            </div>
            </div>

            <div className={style.StepOne__img}>
                   <img src={jam} alt=""/>
        </div>
        </div>
    );
}

export default StepThree;

const Button3 = (props) =>{
    return(
        <>
            <NavLink to={props.road} className={props.styles} > {props.text}  </NavLink>
        </>
    )
}