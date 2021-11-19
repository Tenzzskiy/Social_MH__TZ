import style from "./Steps.module.css";
import StepTwo from "../Step__link/Step__2/Step__2";
import StepOne from "../Step__link/Step__1/Step__1";
import React from "react";
import {Route} from "react-router-dom";
import StepThree from "../Step__link/Step__3/Step__3";
import StepFour from "../Step__link/Step__4/Step__4";
import StepFive from "../Step__link/Step__5/Step__5";
import StepShop from "../Step__link/StepShop/StepShop";


export const StepsNavBar = () => {

    return (
        <div className={style.Step__body}>
            <div className={style.Container}>

                <Route exact path='/' render={() => <Navbar
                    first={style.Navbar__item__1}
                    second={style.Navbar__item__2}
                    third={style.Navbar__item__3}
                    fourth={style.Navbar__item__4}
                    fifth={style.Navbar__item__5}
                    border1={style.Navbar__border}
                    border2={style.Navbar__border}
                    border3={style.Navbar__border}
                    border4={style.Navbar__border}
                />}/>
                <Route exact path='/StepTwo' render={() => <Navbar
                    first={style.Navbar__item__inactive}
                    second={style.Navbar__item__active}
                    third={style.Navbar__item__3}
                    fourth={style.Navbar__item__4}
                    fifth={style.Navbar__item__5}
                    border1={style.Navbar__border__active}
                    border2={style.Navbar__border}
                    border3={style.Navbar__border}
                    border4={style.Navbar__border}/>}/>
                <Route exact path='/StepThree' render={() => <Navbar
                    first={style.Navbar__item__inactive}
                    second={style.Navbar__item__inactive}
                    third={style.Navbar__item__active}
                    fourth={style.Navbar__item__4}
                    fifth={style.Navbar__item__5}
                    border1={style.Navbar__border__active}
                    border2={style.Navbar__border__active}
                    border3={style.Navbar__border}
                    border4={style.Navbar__border}
                />}/>
                <Route exact path='/StepFour' render={() => <Navbar
                    first={style.Navbar__item__inactive}
                    second={style.Navbar__item__inactive}
                    third={style.Navbar__item__inactive}
                    fourth={style.Navbar__item__active}
                    fifth={style.Navbar__item__5}
                    border1={style.Navbar__border__active}
                    border2={style.Navbar__border__active}
                    border3={style.Navbar__border__active}
                    border4={style.Navbar__border}
                />}/>
                <Route exact path='/StepFive' render={() => <Navbar
                    first={style.Navbar__item__inactive}
                    second={style.Navbar__item__inactive}
                    third={style.Navbar__item__inactive}
                    fourth={style.Navbar__item__inactive}
                    fifth={style.Navbar__item__active}
                    border1={style.Navbar__border__active}
                    border2={style.Navbar__border__active}
                    border3={style.Navbar__border__active}
                    border4={style.Navbar__border__active}
                />}/>


                <Route exact path='/' render={() => <StepOne/>}/>
                <Route exact path='/StepTwo' render={() => <StepTwo/>}/>
                <Route exact path='/StepThree' render={() => <StepThree/>}/>
                <Route exact path='/StepFour' render={() => <StepFour/>}/>
                <Route exact path='/StepFive' render={() => <StepFive/>}/>
                <Route exact path='/StepShop' render={() => <StepShop/>}/>


            </div>
        </div>


    );

}


const Navbar = (props) => {

    return (
        <div className={style.NavBar__position}>
            <div className={style.NavBar}>
                <div className={props.first}> 1</div>
                <div className={props.border1}> </div>
                <div className={props.second}> 2</div>
                <div className={props.border2}> </div>
                <div className={props.third}> 3</div>
                <div className={props.border3}> </div>
                <div className={props.fourth}> 4</div>
                <div className={props.border4}> </div>
                <div className={props.fifth}> 5</div>
            </div>
        </div>
    )
}



