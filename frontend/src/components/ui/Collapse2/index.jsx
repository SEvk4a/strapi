import s from './styles.module.scss'
import {PlusIcon} from "../../icons/PlusIcon.jsx";

export const Collapse2 = () => {
    return (
        <div className={s.collapse}>
            <div className={s.collapse__header}>
                <div className={s.collapse__icon}>
                    <PlusIcon/>
                </div>
                <span>
                    <h3>Profit Pilot работает на автомате полностью, нужно просто включить и потом выводить доходы?</h3>
                </span>
            </div>
            <div className={s.collapse__content}></div>
        </div>
    );
};

