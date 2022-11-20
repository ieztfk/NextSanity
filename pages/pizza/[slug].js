import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from '../../styles/Pizza.module.css'
import leftArrow from '../../assets/arrowLeft.png'
import rightArrow from '../../assets/arrowRight.png'
import { useState } from "react";
export default function Pizza({ pizza }) {
    const src = urlFor(pizza.image).url()
    const [size, setSize] = useState(1)
    const [quantity, setQuantity] = useState(1)

    const handleQ = (type) => {
        type === "inc" ? setQuantity((prev) => prev + 1) : quantity === 1 ? null : setQuantity((prev) => prev - 1)
    }

    return (

        <Layout>
            <div className={css.container}>
                <div className={css.ImageWrapper}>
                    <Image loader={() => src} src={src} layout='fill' unoptimized objectFit="cover" />
                </div>


                <div className={css.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details}</span>
                    <span> <span style={{ color: 'var(--themeRed)' }}>₹ :</span> {pizza.price[size]}</span>
                    <div className={css.size}>
                        <span>size</span>
                        <div className={css.sizevarient}>
                            <div onClick={() => setSize(0)} className={size === 0 ? css.seleceted : ""} >Small</div>
                            <div onClick={() => setSize(1)} className={size === 1 ? css.seleceted : ""}>Medium</div>
                            <div onClick={() => setSize(2)} className={size === 2 ? css.seleceted : ""}>Large</div>
                        </div>
                    </div>

                    <div className={css.quantity}>
                        <span>Quantity</span>
                        <div className={css.counter}>
                            <Image src={leftArrow} alt='' height={20} width={20} objectFit='contain' onClick={()=>handleQ("dec")} />
                            <span>{quantity}</span>
                            <Image src={rightArrow} alt='' height={20} width={20} objectFit='contain' onClick={()=>handleQ("inc")} />
                        </div>
                    </div>
                    <div className={`btn ${css.btn}`}>
                        Add to cart
                    </div>


                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    )
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: "blocking",
    }
}
export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    const pizza = await client.fetch(
        `*[_type=="pizza" && slug.current == '${slug}'][0]`
    )
    return {
        props: {
            pizza,
        }
    }
}