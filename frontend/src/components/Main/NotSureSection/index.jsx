import {ArrowLineIcon} from "../../icons/ArrowLineIcon.jsx";
import {QuestionIcon} from "../../icons/QuestionIcon.jsx";
import s from './styles.module.scss'
import {Button} from "../../ui/Button/index.jsx";
import cn from "classnames";
import {useGetData} from "../../../hooks/useGetData.js";

export const NotSureSection = () => {
    const {data} = useGetData('question-section')
    const {data: questions} = useGetData('questions')

    return (
        <section className={s.notSure}>
            <div className='container'>
                <div className={s.notSure__wraper}>
                    <div className={s.notSure__left}>
                        <ArrowLineIcon/>
                        <p className={cn(s.notSure__title, 'title')}>{data?.attributes.title}</p>
                        <div className={s.notSure__questions}>
                            {questions?.map(item =>
                                <div key={item.id}>
                                    <QuestionIcon/>
                                    <p>{item.attributes.text}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={s.notSure__card}>
                        <div>
                            <p>
                                {data?.attributes.mainText}
                            </p>
                        </div>
                        <p className={s.caption}>
                            {data?.attributes.text}
                        </p>
                        <a href='#lead'>
                            <Button type='primary'>Начать обучение</Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

