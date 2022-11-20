import Image from 'next/image'
import css from '../styles/Hero.module.css'
import cherry from '../assets/Cherry.png'
import heroImage from '../assets/HeroImage.png'
import Pizza1 from '../assets/p1.jpg'
import { UilPhone } from '@iconscout/react-unicons'
export default function Hero() {
    return (
        <div className={css.container}>
            {/*Left Side*/}
            <div className={css.left}>
                <div className={css.cherryDiv}>
                    <span> Delivering Love</span>
                    <Image src={cherry} alt='' width={40} height={25} />
                </div>


                <div className={css.heroTxt} >
                    <span>Being The Fastest</span>
                    <span>in Delivering</span>
                    <span>
                        Your <span style={{ color: "var(--themeRed)" }}>Pizza</span>
                    </span>
                </div>
                <span className={css.miniTxt} >
                    Our Mission is To Take Care of Your hunger with Fast and Free Delivery of Delicious and wide varity of Pizzas.
                </span>
                <button className={`btn ${css.btn}`}>Order Now</button>
            </div>
            {/*Right Side*/}
            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={heroImage} alt=' ' layout="intrinsic" />
                </div>

                <div className={css.ContactUs}>
                    <span>Contact Us</span>
                    <div>
                        <UilPhone color='#fff' />
                    </div>
                </div>

                <div className={css.Pizza}>
                  <div >
                   <Image src={Pizza1} alt='' objectFit='cover' layout="intrinsic" />
                  </div>
                  <div  className={css.details}>
                  <span>Italian Pizza</span>
                  <span> <span style={{ color:"var(--themeRed)" }}>Rs :</span> 380</span>
                  </div>
                </div>
            </div>
        </div>
    )
}