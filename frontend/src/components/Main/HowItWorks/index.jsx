import s from './styles.module.scss'
import {useGetData} from "../../../hooks/useGetData.js";

export const HowItWorks = () => {
    const {data} = useGetData('how-it-work')
    const {data: cards} = useGetData('how-it-works-cards')


    return (
        <section id='howItWorks' className={s.howItWorks}>
            <div className='container'>
                <p className='title'>{data?.attributes.title}</p>
                <div className={s.howItWorks__steps}>
                    {cards?.map(card =>
                        <div key={card.id} className={s.howItWorks__card}>
                            <div className={s.howItWorks__head}>
                                <p className={s.howItWorks__number}>{`0${card.id}`}</p>
                                <p>{card.attributes.label}</p>
                            </div>
                            <div>
                                <p>
                                    {card.attributes.text}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

