import {CustomInput} from "../../ui/Input/index.jsx";
import {Button} from "../../ui/Button/index.jsx";
import s from './styles.module.scss'
import {UserIcon} from "../../icons/UserIcon.jsx";
import {toast} from "react-toastify";
import {useState} from "react";
import {PhoneIcon} from "../../icons/PhoneIcon.jsx";
import {useGetData} from "../../../hooks/useGetData.js";

export const LeadSection = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const {data} = useGetData('lead-section')

    const onSubmit = (e) => {
        e.preventDefault();
        toast.success('Заявка отправлена, ожидайте ответа');
        setName('')
        setPhone('')
    }

    return (
        <section id='lead' className={s.leadSection}>
            <div className='container'>
                <div className={s.leadSection__wrapper}>
                    <div className={s.leadSection__textBlock}>
                        <h2 className='title'>{data?.attributes.title}</h2>
                        <p>{data?.attributes.text}</p>
                    </div>
                    <div className={s.leadSection__formCard}>
                        <form onSubmit={onSubmit}>
                            <CustomInput
                                placeholder='Ваше имя'
                                label='Имя'
                                size='large'
                                prefix={<UserIcon/>}
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                            <div className={s.leadSection__submitBlock}>
                                <Button type='primary'>Оставить заявку</Button>
                                <div>
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

