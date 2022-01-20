import cls from './Burger.module.scss'
import { HiOutlinePlus as Plus} from 'react-icons/hi'
import CustomLink from '../CustomLink/CustomLink'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'

const Burger = ({active, closeBtn}) => {

    const [isOpenServices, setIsOpenServices] = useState(false)
    const listRef = useRef()
    const [height, setHeight] = useState()

    function getListSize(){
        const newHeight = listRef.current.clientHeight;
        setHeight(newHeight);
    };
    useEffect(() => {
        getListSize();
    }, [])

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
                        style={isOpenServices ? {marginBottom: `${height}px`} : {marginBottom: "0"}}
                    >
                        <button 
                            className={cls.servicesBtn} 
                            onClick={() => {
                                setIsOpenServices(!isOpenServices)
                            }}
                        >
                            Services
                        </button>

                        <ol ref={listRef} style={isOpenServices ? {opacity: "1"} : {opacity: "0"}}>
                            <li style={isOpenServices ? {pointerEvents: "all"} : {pointerEvents: "none"}}><CustomLink className={cls.link} to="/frontend">Frontend</CustomLink></li>
                            <li style={isOpenServices ? {pointerEvents: "all"} : {pointerEvents: "none"}}><CustomLink className={cls.link} to="/ux-ui">Ux & Ui</CustomLink></li>
                            <li style={isOpenServices ? {pointerEvents: "all"} : {pointerEvents: "none"}}><CustomLink className={cls.link} to="/videoediting">Videoediting</CustomLink></li>
                            <li style={isOpenServices ? {pointerEvents: "all"} : {pointerEvents: "none"}}><CustomLink className={cls.link} to="/backend">Backend</CustomLink></li>
                        </ol>
                    </li>
                    <hr />
                    <li className={cls.anotherLink}><CustomLink className={cls.link} to="/prices">Prices</CustomLink></li>
                    <hr />
                    <li className={cls.anotherLink}><CustomLink className={cls.link} to="/cases">Cases</CustomLink></li>
                    <hr />
                </ul>
            </div>
            <button className={cls.orderBtn}>Order a project now</button>
            <div className={cls.lang}>
                <img src="/img/globe_burger.png" alt="language" />
                <h1>English</h1>
            </div>
            {/* <Form burger/> */}
        </div>
    )
}

export default Burger