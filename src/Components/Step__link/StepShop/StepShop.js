import React from "react";
import style from './StepShop.module.css';
import acne from './../../assets/acne.png';

import second from './../../assets/2a2.png';
import third from './../../assets/3a.png';
import next from './../../assets/next2.svg';
import before from './../../assets/before.svg';
import stars from './../../assets/stars.svg';
import amazonPrime from './../../assets/amazon_prime_logo.svg';
import ellipse from './../../assets/ellipse.svg';

const StepShop = () =>{

    const [counter] = React.useState(1731);
    const [itemsCount] = React.useState(12);
    const [showInfoStyle, setShowInfoStyle] = React.useState(style.hide );
    const [readMoreStyle, setReadMoreStyle] = React.useState(style.show_readMore);
    const [mainPic,setMainPic] = React.useState(acne)
    const [defaultImage,setDefaultImage] = React.useState(style.default_image_show)
    const [changedImage,setChangedImage] = React.useState(style.slider__right__side)


     const onToggleClick = () =>{
            setReadMoreStyle({readMoreStyle:style.hide_readMore})
            setShowInfoStyle({showInfoStyle:style.show})

    }

    const setFirstMain = () =>{
        setMainPic({ mainPic:acne})
        setDefaultImage({defaultImage:style.default_image_hide})
        setChangedImage({changedImage:style.slider__right__side__show})
    }
    const setSecondMain = () =>{
        setMainPic({ mainPic:second})
        setDefaultImage({defaultImage:style.default_image_hide})
        setChangedImage({changedImage:style.slider__right__side__show})
    }
    const setThirdMain = () =>{
        setMainPic({ mainPic:third})
        setDefaultImage({defaultImage:style.default_image_hide})
        setChangedImage({changedImage:style.slider__right__side__show})
    }

    return(
        <div className={style.StepShop}>

            <div className={style.Container}>
            <div className={style.item__flex}>


        <div className={style.slider}>
            <div className={style.slider__container}>
        <div className={style.slider__left__side}>
        <div className={style.left__slider__item__next} ><img src={next} alt="" /> </div>
        <div className={style.left__slider__item} onClick={setFirstMain}><img src={acne} alt=""/></div>
        <div className={style.left__slider__item} onClick={setSecondMain}><img src={second} alt=""/></div>
        <div className={style.left__slider__item} onClick={setThirdMain}><img src={third} alt=""/></div>
        <div className={style.left__slider__item__before}><img src={before} alt=""/></div>

        </div>
                <div className={defaultImage.defaultImage}><img src={acne} alt="" className={defaultImage}/></div>
                <div className={changedImage.changedImage}>

                    <img src={mainPic.mainPic} alt=""/>

                </div>

        </div>
        </div>


        <div className={style.slider__description}>
            <div className={style.item__2__Container}>


        <div className={style.item__2__flex}>
        <div className={style.item__2__header__description} >Best seller </div>

        <div className={style.review__flex}>
        <div className={style.stars}><img src={stars} alt=""/> </div>
        <div className={style.reviews}>({counter} reviews)
        </div>
        </div>

        </div>

            <div className={style.description__title__acne}>Acne Treatment Cystic Acne heals, repairs & renews </div>
                <div>
                <div className={style.description__title__text}> Description:</div>
                <div className={style.description__text}>Addictively refreshing gel-cream leaves skin plump, dewy, glowing. </div>
                </div>

                <div className={style.button__border}>
                <button>items left: {itemsCount} </button>
                </div>

                <div className={style.price}>
                <div className={style.first_price}>us$25.89 </div>
                <div className={style.second__price}>$0.00 FREE </div>

                </div>
                <div className={style.amazonPrime__flex}>
                <div className={style.button}><button > Select</button></div>
                    <div className={style.amazonPrime}><a href="https://www.amazon.com/amazonprime"><img src={amazonPrime} alt=""/></a></div>
            </div>
        </div>

        </div>

            </div>
        </div>



            <div className={style.overview}>


            </div>
        <div className={style.overview__container}>
        <div className={style.overview__flex}>
            <div className={style.overview__title}   > Overview</div>
            <div className={style.overview__header}> Who It's For</div>
            <div className={style.overview__text__what}>Very Dry, Dry, Dry Combination Skin (Type 1, 2) </div>
        </div>
            <div className={style.overview__flex}>
                <div className={style.overview__header}> What It Is</div>
                <div className={style.overview__text__what}>Step 3 in our customized 3-Step Skincare System.<br/>
                    Dermatologist-developed face moisturizer softens, smooths, improves. Leaves skin glowing. </div>
            </div>
            <div className={style.overview__flex}>
                <div className={style.overview__header}> What It Does</div>

                <div >
                    <div className={style.what__it__does__item}>
                        <div> <img src={ellipse} alt=""/> </div>
                        <div className={style.overview__text}>Silky lotion delivers 8-hour hydration. </div>
                    </div>
                    <div className={style.what__it__does__item}>
                        <div> <img src={ellipse} alt=""/> </div>
                        <div className={style.overview__text} >Slips on easily, absorbs quickly. </div>
                    </div>
                    <div className={style.what__it__does__item__last}>
                        <div> <img src={ellipse} alt=""/> </div>
                        <div className={style.overview__text}> Helps strengthen skin’s own moisture
                            barrier so more moisture stays in. Skin that holds onto moisture has a youthful-looking glow. </div>
                    </div>

                </div>
                <span className={readMoreStyle.readMoreStyle} onClick={onToggleClick}  > <div className={style.show_readMore}> Read more... </div> </span>
                <div className={showInfoStyle}><div className={style.margin}>
                <div className={style.overview__header}> What It Is</div>
                <div className={style.overview__text__what}>Sunflower Seed Cake,
                    Barley Extract and Cucumber Fruit Extract help strengthen skin’s barrier,
                    improve its resiliency,
                    and balance and retain skin’s moisture levels. Hyaluronic acid acts as a natural moisture magnet/humectant. </div></div></div>
            </div>


        </div>
        </div>


    );
}
export default StepShop;