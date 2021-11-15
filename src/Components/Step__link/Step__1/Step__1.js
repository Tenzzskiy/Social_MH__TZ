import style from './Step__1.module.css'
import React from "react";
import firstStep from '../../assets/first__step.jpg'
import {NavLink} from "react-router-dom";
const  StepOne = (props) => {




    return (
        <div className={style.StepOne}>
            <div className={style.Container}>
                <div className={style.title}>Step 1  </div>


                <div className={style.title__text}> Lorem ipsum dolor sit amet </div>

                    <div className={style.description__text}>Aliquam urna arcu, scelerisque vel viverra sed, pellentesque sit amet metus.
                        Curabitur at luctus massa. Vestibulum pretium sem tortor, vitae mattis odio
                        accumsan vitae. Fusce id luctus erat: </div>
                <div className={style.description}>
                    <div className={style.first__description}>
                        <div className={style.number}> 1.</div>
                        <div>Mauris rutrum interdum condimentum. </div>

                    </div>
                    <div className={style.second__description}>
                        <div className={style.number}>2.</div>
                        <div>Donec commodo quis arcu eget pretium. </div>


                    </div>

                </div>


                <Button1 text={'Agree and continue'} road= '/StepTwo' ChangeStepNumberOnTwo={props.ChangeStepNumberOnTwo} />


            </div>

            <div className={style.StepOne__img}>
                <img src={firstStep} alt=""/>
            </div>
        </div>
    );
}

export default StepOne;

const Button1 = (props) =>{
    return(
        <>
            <NavLink to={props.road} className={style.button__1} onClick={props.ChangeStepNumberOnTwo}> {props.text}  </NavLink>
        </>
    )
}