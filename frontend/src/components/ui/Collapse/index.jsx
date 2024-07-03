import {useState} from "react";
import {ArrowIcon} from "../../icons/ArrowIcon.jsx";
import s from './styles.module.scss'
import cn from "classnames"

export const CustomCollapse = ({text, value, type = 'light'}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={cn(s.collapse, s[`collapse__${type}`], {[s.active]: isOpen})}>
            <div className={s.collapse__wrapper}>
                <div className={s.collapse__header} onClick={() => setIsOpen(!isOpen)}>
                    <div className={s.collapse__icon}>
                        <ArrowIcon/>
                    </div>
                    <span className={s.collapse__text}>
                    <h3>{text}</h3>
                </span>
                </div>
                <div className={s.collapse__content}>
                    <div><p>{value}</p></div>
                </div>
            </div>
        </div>
    );
};

