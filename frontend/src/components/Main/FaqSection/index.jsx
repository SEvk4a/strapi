import s from './styles.module.scss'
import cn from 'classnames'
import {CustomCollapse} from "../../ui/Collapse/index.jsx";
import {useGetData} from "../../../hooks/useGetData.js";

export const FaqSection = () => {
    const {data} = useGetData('faqs')

    return (
        <section id='faq' className={s.faqSection}>
            <div className='container'>
                <h2 className={cn(s.faqSection__title, 'title')}>FAQ</h2>
                <div>
                    <div className={s.faqSection__list}>
                        {data?.map(item =>
                            <CustomCollapse
                                key={item.attributes.id}
                                type='dark'
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

