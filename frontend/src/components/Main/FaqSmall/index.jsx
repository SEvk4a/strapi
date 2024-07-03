import s from './styles.module.scss'
import {useGetData} from "../../../hooks/useGetData.js";
import {CustomCollapse} from "../../ui/Collapse/index.jsx";

export const FaqSmall = () => {
    const {data: faqs} = useGetData('minifaqs')
    const {data} = useGetData('mini-faq-section')

    return (
        <section className={s.faqSmall}>
            <div className='container'>
                <div className={s.faqSmall__wrapper}>
                    <div>
                        <p className='title'>{data?.attributes.title}</p>
                    </div>
                    <div className={s.faqSmall__list}>
                        {faqs?.map(item =>
                            <CustomCollapse
                                key={item.id}
                                text={item.attributes.text}
                                value={item.attributes.value}
                            />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

