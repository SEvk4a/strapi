import s from './styles.module.scss'
import cn from "classnames";

export const Button = ({children, type = 'dark'}) => {
    return (
        <button className={cn(s.button, s[`button__${type}`])}>
            {children}
        </button>
    );
};

