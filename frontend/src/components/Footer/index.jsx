import s from './styles.module.scss'
import {Logo} from "../Logo/index.jsx";
import {useGetData} from "../../hooks/useGetData.js";

export const Footer = () => {
    const {data} = useGetData('footer')

    return (
        <footer className={s.footer}>
            <div className='container'>
                <div className={s.footer__wraper}>
                    <div className={s.footer__nameBlock}>
                        <Logo/>
                        <div className={s.footer__divider}></div>
                        <div className={s.footer__legalText}>
                            <p>{data?.attributes.name}<br/>{data?.attributes.info}<br/>{data?.attributes.adress}
                            </p>
                        </div>
                    </div>
                    <div className={s.footer__offert}>
                        <a>Публичная оферта</a>
                        <a>Политика обработки персональных данных</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

