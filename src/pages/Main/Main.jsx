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

const Main = () => {

    return (
        <div className={cls.root}>
            <Header/>
            <div className={cls.cases}>
                <BetweenTitle content="Cases" color="white"/>
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