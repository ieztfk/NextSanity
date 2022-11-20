import css from '../styles/Services.module.css'
import Image from 'next/image'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
export default function Services() {
    return (
        <>
            <div className={css.heading}>
                <span>WHAT WE SERVE</span>
                <span>Loved By People</span>
                <span>Delivery Partner</span>
            </div>

            <div className={css.services}>
                <div className={css.featurs}>
                    <div className={css.ImageWrapper}>
                        <Image src={s1} alt="" objectFit='cover' layout='intrinsic' />
                    </div>

                    <span>Easy To Order</span>
                    <span>Order Pizza in your Fingurtips</span>

                </div>
                <div className={css.featurs}>
                    <div className={css.ImageWrapper}>
                        <Image src={s2} alt="" objectFit='cover' layout='intrinsic' />
                    </div>
                    <span>Easy To Order</span>
                    <span>Order Pizza in your Fingurtips</span>
                </div>
         
            <div className={css.featurs}>
                <div className={css.ImageWrapper}>
                    <Image src={s3} alt="" objectFit='cover' layout='intrinsic' />
                </div>
                <span>Easy To Order</span>
                    <span>Order Pizza in your Fingurtips</span>
            </div>

        </div>

        </>
    )
}