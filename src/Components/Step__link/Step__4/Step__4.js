import style from './Step__4.module.css'
import React from "react";
import jam from './../../assets/first__step.jpg'
import {NavLink} from "react-router-dom";
import present from './../../assets/present.svg'


const StepFour = () => {

    return (
        <div className={style.StepTwo}>
            <div className={style.Container}>
                <div className={style.title}>Step 4</div>


                <div className={style.title__text}> How to Buy a Product <br/> with 100% BONUS!</div>
                <div className={style.description__text__mrgn}>
                    <div className={style.description__text}>
                        <div className={style.first__description}>1</div>
                        <div className={style.second_description}>You need to Buy our Product on Amazon at the specified
                            price $20.89!
                        </div>

                    </div>
                    <div className={style.description__text}>
                        <div className={style.first__description}>2</div>
                        <div className={style.second_description}>After the purchase - Send us your Order Number or the
                            Screenshot to our manager in FB Messenger
                        </div>

                    </div>
                    <div className={style.description__text}>
                        <div className={style.first__description}>3</div>
                        <div className={style.second_description}>When you receive the product please use it and share
                            product reviews
                        </div>

                    </div>
                    <div className={style.description__text}>
                        <div className={style.first__description}>4</div>
                        <div className={style.second_description}>We will send you <b>the 25$ Amazon Gift Card</b> code
                            within 24 hours after we get short review from you.
                        </div>

                    </div>
                    <div className={style.description__text}>
                        <div className={style.first__description}><img src={present} alt=""/></div>
                        <div className={style.second_description}>As a result, you will receive <br/> our Product Free!
                        </div>

                    </div>
                </div>


                <div className={style.button__flex}>
                    <Button4 text={'Get Offer'} road={'/StepFive'} styles={style.button__3__yes}/>

                    <div className={style.button_description}>
                        <a href="https://www.amazon.com/"><b> I don't like offer terms</b></a>
                    </div>


                </div>

            </div>

            <div className={style.StepOne__img}>
                <img src={jam} alt=""/>
            </div>
        </div>
    );
}

export default StepFour;

const Button4 = (props) => {
    return (
        <>
            <NavLink to={props.road} className={props.styles}> {props.text}  </NavLink>
        </>
    )
}