import cls from './Main.module.scss'
import Nav from '../../Components/Nav/Nav'
import Title from '../../Components/Title/Title'
import LongBtn from '../../Components/LongBtn/LongBtn'
import Cases from '../../Components/Cases/Cases'
import BetweenTitle from '../../Components/BetweenTitle/BetweenTitle'

const Main = () => {
    return (
        <div className={cls.root}>
            <section className={cls.header}>
                <Nav/>
                <Title redText="MBC" text1="Studio" text2="Marketing Business" text3="Creative Studio"/>
                <div className={cls.bottomText}><a href="">What we do</a> <a href="">FaQ</a></div>
                <LongBtn content="Get a consultation" color="white"/>
            </section>
            <Cases/>
            <section className={cls.who}>
                <h1 className={cls.whoWeAre}>Who we are</h1>
                <p className={cls.ourMissionIs}>Our mission is to assist businesses of any size in the adoption of digital solutions and untangling issues that emerge during periods of rapid growth to ensure smooth scaling.</p>
                <div className={cls.weDo}>
                    <BetweenTitle content="We do:" color="black"/>
                    <div className={cls.weDoBlock}>
                        <div>
                            <p>Consultation</p>
                            <p>Technical support</p>
                        </div>
                        <div>
                            <p>Web Platforms</p>
                            <p>Comprehensive promotion</p>
                        </div>
                        <div>
                            <p>UI Design</p>
                            <p>UX Prototyping</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main