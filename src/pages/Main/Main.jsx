import cls from './Main.module.scss'
import Nav from '../../Components/Nav/Nav'
import Title from '../../Components/Title/Title'
import LongBtn from '../../Components/LongBtn/LongBtn'
import Cases from '../../Components/Cases/Cases'
import BetweenTitle from '../../Components/BetweenTitle/BetweenTitle'
import { useState } from 'react'
import Process from '../../Components/Process/Process'
import Reviews from '../../Components/Reviews/Reviews'
import Form from '../../Components/Form/Form'

const Main = () => {

    const [checkbox, setCheckbox] = useState('')

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
            <section className={cls.tech}>
                <BetweenTitle content="Technologies & Tools" color="white"/>
                <ul>
                    <li>
                        <span 
                            className={cls.checkbox} 
                            onClick={() => setCheckbox('frontend')} 
                        >
                            {checkbox === 'frontend' ? (
                                <span className={cls.checkCircle}></span>
                            ) : null}
                        </span> 
                        Frontend
                    </li>
                    <li>
                        <span 
                            className={cls.checkbox} 
                            onClick={() => setCheckbox('design')} 
                        >
                            {checkbox === 'design' ? (
                                <span className={cls.checkCircle}></span>
                            ) : null}
                        </span> 
                        Ux & Ui
                    </li>
                    <li>
                        <span 
                            className={cls.checkbox} 
                            onClick={() => setCheckbox('video')} 
                        >
                            {checkbox === 'video' ? (
                                <span className={cls.checkCircle}></span>
                            ) : null}
                        </span> 
                        VideoEditing
                    </li>
                    <li>
                        <span 
                            className={cls.checkbox} 
                            onClick={() => setCheckbox('backend')} 
                        >
                            {checkbox === 'backend' ? (
                                <span className={cls.checkCircle}></span>
                            ) : null}
                        </span> 
                        Backend
                    </li>
                    <li>
                        <span 
                            className={cls.checkbox} 
                            onClick={() => setCheckbox('marketing')}
                        >
                            {checkbox === 'marketing' ? (
                                <span className={cls.checkCircle}></span>
                            ) : null}
                        </span> 
                        Marketing
                    </li>
                </ul>
            </section>
            <Process/>
            <Reviews/>
            <Form/>
        </div>
    )
}

export default Main