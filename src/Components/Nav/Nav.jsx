import cls from './Nav.module.scss'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'
import { useState } from 'react'
import { FiChevronDown as ArrowDown} from 'react-icons/fi'

const Nav = () => {

    const [isOpenServices, setIsOpenServices] = useState(false)
    const [isOpenLang, setIsOpenLang] = useState(false)

    return (
        <div className={cls.root}>
            <nav className={cls.nav} id={isOpenServices ? cls.navBig : null}>
                <div className={cls.navLeft}>
                    <h1>LOGO</h1>
                    <ul>
                        <li><CustomLink className={cls.link} to="/">Home</CustomLink></li>
                        <li className={cls.servicesLink}>
                            <button 
                                className={cls.servicesBtn} 
                                onClick={() => {
                                    setIsOpenLang(false)
                                    setIsOpenServices(!isOpenServices)
                                }}
                            >
                                Services
                                <ArrowDown/>
                            </button>

                            <ol style={isOpenServices ? {display: "flex"} : {display: "none"}}>
                                <li><CustomLink className={cls.link} to="/frontend">Frontend</CustomLink></li>
                                <li><CustomLink className={cls.link} to="/ux-ui">Ux & Ui</CustomLink></li>
                                <li><CustomLink className={cls.link} to="/videoediting">Videoediting</CustomLink></li>
                                <li><CustomLink className={cls.link} to="/backend">Backend</CustomLink></li>
                            </ol>
                        </li>
                        <li><CustomLink className={cls.link} to="/prices">Prices</CustomLink></li>
                        <li><CustomLink className={cls.link} to="/cases">Cases</CustomLink></li>
                    </ul>
                </div>
                <div className={cls.navRight}>
                    <div className={cls.lang} id={isOpenLang ? cls.langOpen : null}>
                        <div className={cls.langTop}>
                            <button>
                                <img 
                                    src="/img/globe_lang.png" 
                                    alt="globe_lang" 
                                    onClick={() => {
                                        setIsOpenServices(false)
                                        setIsOpenLang(!isOpenLang)
                                    }}
                                />
                            </button>
                            <span className={cls.lang_en}>en</span>
                            <span className={cls.lang_stick}>|</span>
                            <Link className={cls.lang_ru} to="/ru">ru</Link>
                        </div>
                        <ol className={cls.langBottom} style={isOpenLang ? {display: "flex"} : {display: "none"}}>
                            <li><a href="#">Deutsch</a></li>
                            <li><a href="#">Deutsch</a></li>
                            <li><a href="#">Deutsch</a></li>
                            <li><a href="#">Deutsch</a></li>
                        </ol>
                    </div>
                    <div className={cls.number}>+996 703 00 00 00</div>
                    <div className={cls.btnDiv}><button className={cls.contactBtn}>Contact</button></div>
                </div>
            </nav>
        </div>
    )
}

export default Nav