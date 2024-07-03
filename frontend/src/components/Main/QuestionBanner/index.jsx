import {CustomInput} from "../../ui/Input/index.jsx";
import {Button} from "../../ui/Button/index.jsx";
import s from './styles.module.scss'
import cn from "classnames"
import {QuestionInputIcon} from "../../icons/QuestionInputIcon.jsx";
import {toast} from "react-toastify";
import {useState} from "react";
import {PhoneIcon} from "../../icons/PhoneIcon.jsx";
import {useGetData} from "../../../hooks/useGetData.js";

export const QuestionBanner = () => {
    const [question, setQuestion] = useState('')
    const [phone, setPhone] = useState('')

    const {data} = useGetData('question-banner-section')

    const onSubmit = (e) => {
        e.preventDefault();
        toast.success('Вопрос отправлен, ожидайте ответа');
        setQuestion('')
        setPhone('')
    }

    return (
        <section className={s.questionBanner}>
            <div className='container'>
                <div className={s.questionBanner__banner}>
                    <div className={s.questionBanner__textBlock}>
                        <p className={cn(s.questionBanner__title, 'title')}>{data?.attributes.title}</p>
                        <p className={s.questionBanner__subTitle}>{data?.attributes.text}</p>
                    </div>
                    <div className={s.questionBanner__formCard}>
                        <form className={s.questionBanner__form} onSubmit={onSubmit}>
                            <CustomInput
                                placeholder='Ваш вопрос'
                                label='Ваш вопрос'
                                size='large'
                                prefix={<QuestionInputIcon/>}
                                required
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                            <CustomInput
                                placeholder='Номер телефона для связи'
                                label='Телефон'
                                size='large'
                                prefix={<PhoneIcon/>}
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <div className={s.questionBanner__submitBlock}>
                                <Button type='primary'>Задать вопрос</Button>
                                <div className={s.questionBanner__legalText}>
                                    <p>
                                        {data?.attributes.warning}
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

