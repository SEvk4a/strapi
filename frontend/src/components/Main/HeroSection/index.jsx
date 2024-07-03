import s from './styles.module.scss'
import {Button} from "../../ui/Button/index.jsx";
import {useGetData} from "../../../hooks/useGetData.js";

export const HeroSection = () => {
    const {data} = useGetData('hero-section')

    return (
        <section className={s.hero}>
            <div className='container'>
                <div className={s.hero__wrapper}>
                    <div>
                        <h1 className={s.hero__title}>
                            {data?.attributes.title} <span>{data?.attributes.subTitle}</span>
                        </h1>
                    </div>
                    <div className={s.hero__description}>
                        <p>
                            {data?.attributes.text}
                        </p>
                    </div>
                    <div className={s.hero__buttons}>
                        <a href='#howItWorks'>
                            <Button>Узнать больше</Button>
                        </a>
                    </div>
                </div>
            </div>
            <img className={s.hero__decorDollar} src="/hero/dollar.webp" alt="decor"/>
            <img className={s.hero__decorTop} src="/hero/coin.webp" alt="decor"/>
            <img className={s.hero__decorLeft} src="/hero/coin.webp" alt="decor"/>
            <img className={s.hero__decorRight} src="/hero/coin.webp" alt="decor"/>
        </section>
    );
};

