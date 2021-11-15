import style from "./Steps.module.css";
import StepTwo from "../Step__link/Step__2/Step__2";
import StepOne from "../Step__link/Step__1/Step__1";
import React, {Component} from "react";
import {Route} from "react-router-dom";
import StepThree from "../Step__link/Step__3/Step__3";
import StepFour from "../Step__link/Step__4/Step__4";
import StepFive from "../Step__link/Step__5/Step__5";
import StepShop from "../Step__link/StepShop/StepShop";


export class StepsNavBar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            Navbar__item__1: style.Navbar__item__1,
            Navbar__item__2: style.Navbar__item__2,
            Navbar__item__3: style.Navbar__item__3,
            Navbar__item__4: style.Navbar__item__4,
            Navbar__item__5: style.Navbar__item__5,
            Navbar__border__1:style.Navbar__border,
            Navbar__border__2:style.Navbar__border,
            Navbar__border__3:style.Navbar__border,
            Navbar__border__4:style.Navbar__border,
            stepPath:'/'
        }
    }
    ChangeStepNumberOnTwo = () =>{
        if (window.location.href === 'http://localhost:3000/'){

            this.setState({
                Navbar__border__1:style.Navbar__border__active,
                Navbar__item__1: style.Navbar__item__1__inactive,
                Navbar__item__2: style.Navbar__item__2__active,

            })


        }

    }
    ChangeStepNumberOnThree = () =>{
        if (window.location.href === 'http://localhost:3000/StepTwo'){

            this.setState({
                Navbar__border__1:style.Navbar__border__active,
                Navbar__item__1: style.Navbar__item__1__inactive,
                Navbar__item__2: style.Navbar__item__2__inactive,
                Navbar__border__2:style.Navbar__border__active,
                Navbar__item__3: style.Navbar__item__3__active,
            })


        }

    }
    ChangeStepNumberOnFour = () =>{
        if (window.location.href === 'http://localhost:3000/StepThree'){

            this.setState({
                Navbar__border__1:style.Navbar__border__active,
                Navbar__item__1: style.Navbar__item__1__inactive,
                Navbar__item__2: style.Navbar__item__2__inactive,
                Navbar__border__2:style.Navbar__border__active,
                Navbar__item__3: style.Navbar__item__2__inactive,
                Navbar__border__3:style.Navbar__border__active,
                Navbar__item__4: style.Navbar__item__2__active,
            })


        }

    }
    ChangeStepNumberOnFive = () =>{
        if (window.location.href === 'http://localhost:3000/StepFour'){

            this.setState({
                Navbar__border__1:style.Navbar__border__active,
                Navbar__item__1: style.Navbar__item__1__inactive,
                Navbar__item__2: style.Navbar__item__2__inactive,
                Navbar__border__2:style.Navbar__border__active,
                Navbar__item__3: style.Navbar__item__2__inactive,
                Navbar__border__3:style.Navbar__border__active,
                Navbar__item__4: style.Navbar__item__2__inactive,
                Navbar__border__4:style.Navbar__border__active,
                Navbar__item__5: style.Navbar__item__2__active,
            })


        }

    }





    render(){



       return (
           <div className={style.Step__body}>
               <div className={style.Container}>
                   <Route exact path='/' render={() => <Navbar state={this.state}/> }/>
                   <Route exact path='/StepTwo' render={() => <Navbar state={this.state}/> }/>
                   <Route exact path='/StepThree' render={() => <Navbar state={this.state}/> }/>
                   <Route exact path='/StepFour' render={() => <Navbar state={this.state}/> }/>
                   <Route exact path='/StepFive' render={() =><Navbar state={this.state}/> }/>

                   <Route exact path='/'  render={ () =>  <StepOne state={this.state} ChangeStepNumberOnTwo={this.ChangeStepNumberOnTwo} />  } />
                   <Route exact path='/StepTwo' render={() => <StepTwo state={this.state} ChangeStepNumberOnThree={this.ChangeStepNumberOnThree} /> }/>
                   <Route exact path='/StepThree' render={() => <StepThree state={this.state} ChangeStepNumberOnFour={this.ChangeStepNumberOnFour} /> }/>
                   <Route exact path='/StepFour' render={() => <StepFour state={this.state} ChangeStepNumberOnFive={this.ChangeStepNumberOnFive}/> }/>
                   <Route exact path='/StepFive' render={() => <StepFive state={this.state} /> }/>
                   <Route exact path='/StepShop' render={() => <StepShop state={this.state} /> }/>



               </div>
           </div>


       );
   }
}


const Navbar = (props) =>{

    return(
        <div className={style.NavBar}>
            <div className={props.state.Navbar__item__1}> 1</div>
            <div className={props.state.Navbar__border__1}> </div>
            <div className={props.state.Navbar__item__2}> 2</div>
            <div className={props.state.Navbar__border__2}> </div>
            <div className={props.state.Navbar__item__3}> 3</div>
            <div className={props.state.Navbar__border__3}> </div>
            <div className={props.state.Navbar__item__4}> 4</div>
            <div className={props.state.Navbar__border__4}> </div>
            <div className={props.state.Navbar__item__5}> 5</div>
        </div>
    )
}




