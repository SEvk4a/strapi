import s from './styles.module.scss'
import {Button} from "../ui/Button/index.jsx";
import {Logo} from "../Logo/index.jsx";
import {useGetData} from "../../hooks/useGetData.js";

export const Header = () => {
    const {data} = useGetData('navitems')

    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.navbar}>
                    <Logo/>
                    <nav>
                        <ul className={s.navLinks}>
                            {data?.map(item =>
                                <a
                                    key={item.id}
                                    href={`#${item.attributes.link}`}
                                >
                                    {item.attributes.name}
                                </a>)}
                        </ul>
                    </nav>
                    <a href='#lead'>
                        <Button type='primary'>Оставить заявку</Button>
                    </a>
                </div>
            </div>
        </header>
    );
};

