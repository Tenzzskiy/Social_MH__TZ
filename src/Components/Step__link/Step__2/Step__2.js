import style from './Step__2.module.css'
import React from "react";
import facebook from './../../assets/facebook_post.png'
import {NavLink} from "react-router-dom";


const  StepTwo = (props) => {

    return (
        <div className={style.StepTwo}>
            <div className={style.Container}>
                <div className={style.title}>Step 2  </div>


                <div className={style.title__text}> Share Facebook post </div>

                <div className={style.description__text}>To participate in this giveaway please share
                    this giveaway offer with your friends. Not only your friends will appreciate
                    this offer but you will receive $10 Amazon Gift Card for each of your friends
                    that participates in this giveaway! </div>

                <Button2 text={'continue'} road={'/StepThree'} />
            </div>

            <div className={style.StepOne__img}>
                <a href="https://www.facebook.com/">   <img src={facebook} alt=""/></a>
        </div>
        </div>
    );
}

export default StepTwo;

const Button2 = (props) =>{
    return(
        <>
            <NavLink to={props.road} className={style.button__2} > {props.text}  </NavLink>
        </>
    )
}