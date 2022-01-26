import cls from './Burger.module.scss'
import { HiOutlinePlus as Plus} from 'react-icons/hi'
import CustomLink from '../CustomLink/CustomLink'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Burger = ({active, closeBtn, changeLang, selectedLang}) => {

    const {selectedLang: {navbar}} = useSelector(s => s.lang)

    const [isOpenServices, setIsOpenServices] = useState(false)

    return (
        <div className={cls.root} id={active ? cls.active : null}>
            <div className={cls.floatingNav}>
                <Link to="/" className={cls.h1}>Logo</Link>
                <button onClick={() => closeBtn(false)} type="button"><Plus className={cls.icon}/></button>
            </div>
            <div className={cls.navLeft}>
                <ul>
                    <li 
                        className={cls.servicesLink}
                        style={isOpenServices ? {marginBottom: `200px`} : {marginBottom: "0"}}
                    >
                        <button 
                            className={cls.servicesBtn} 
                            onClick={() => {
                                setIsOpenServices(!isOpenServices)
                            }}
                        >
                            {navbar.services}
                        </button>

                        <ol style={isOpenServices ? {opacity: "1"} : {opacity: "0"}}>
                            <li style={isOpenServices ? {pointerEvents: "all"} : {pointerEvents: "none"}}><CustomLink className={cls.link} to="/frontend">Frontend</CustomLink></li>
                            <li style={isOpenServices ? {pointerEvents: "all"} : {pointerEvents: "none"}}><CustomLink className={cls.link} to="/ux-ui">Ux & Ui</CustomLink></li>
                            <li style={isOpenServices ? {pointerEvents: "all"} : {pointerEvents: "none"}}><CustomLink className={cls.link} to="/videoediting">{navbar.videoediting}</CustomLink></li>
                            <li style={isOpenServices ? {pointerEvents: "all"} : {pointerEvents: "none"}}><CustomLink className={cls.link} to="/backend">Backend</CustomLink></li>
                        </ol>
                    </li>
                    <hr />
                    <li className={cls.anotherLink}><CustomLink className={cls.link} to="/prices">{navbar.prices}</CustomLink></li>
                    <hr />
                    <li className={cls.anotherLink}><CustomLink className={cls.link} to="/cases">{navbar.cases}</CustomLink></li>
                    <hr />
                </ul>
            </div>
            <button className={cls.orderBtn}>Order a project now</button>
            <div className={cls.lang} onClick={() => {
                if(selectedLang === "RU"){
                    changeLang('EN')
                }else{
                    changeLang('RU')
                }
            }}>
                <img src="/img/globe_burger.png" alt="language" />
                <h1>{navbar.lang}</h1>
            </div>
        </div>
    )
}

export default Burger