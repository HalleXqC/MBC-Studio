import Cases from '../../Components/Cases/Cases'
import Process from '../../Components/Process/Process'
import Reviews from '../../Components/Reviews/Reviews'
import Form from '../../Components/Form/Form'
import Tech from '../../Components/Tech/Tech'
import WhoWeAre from '../../Components/WhoWeAre/WhoWeAre'
import Header from '../../Components/Header/Header'
import cls from './Main.module.scss'
import BetweenTitle from '../../Components/BetweenTitle/BetweenTitle'
import LongBtn from '../../Components/LongBtn/LongBtn'
import useWindowDimensions from "../../Components/getWindowFunc/useWindowDimension"
import { useSelector } from 'react-redux'

const Main = () => {
    const {selectedLang:{cases}} = useSelector(s => s.lang)
    const {width} = useWindowDimensions()

    return (
        <div className={cls.root}>
            <Header width={width}/>
            <div className={cls.cases}>
                <BetweenTitle content={cases} color="white"/>
                <Cases/>
                <LongBtn content="See all works" color="white"/>
            </div>
            <WhoWeAre/>
            <Tech/>
            <Process/>
            <Reviews/>
            <Form/>
        </div>
    )
}

export default Main