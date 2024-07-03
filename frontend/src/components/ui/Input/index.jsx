import {Input} from "antd";
import s from './styles.module.scss'

export const CustomInput = ({label, ...props}) => {
    return (
        <div className={s.wrapper}>
            <label className={s.wrapper__label}>
                <span className={s.text}>{label}</span>
                <Input {...props} className={s.wrapper__input}/>
            </label>
        </div>
    );
};

