import Benefits from '../../Components/Benefits/Benefits'
import BetweenTitle from '../../Components/BetweenTitle/BetweenTitle'
import StackBlock from '../../Components/StackBlock/StackBlock'
import Title from '../../Components/Title/Title'
import cls from './Frontend.module.scss'
import LongBtn from '../../Components/LongBtn/LongBtn'
import Form from '../../Components/Form/Form'

const Frontend = () => {
    return (
        <div className={cls.root}>
            <section className={cls.header} style={{background: "url('/img/header_front_bg.jpg') center / cover"}}>
                <Title redText="Frontend" text1="Solutions" text2="for Business Growth" littleText="Ensure Your Business Growth with Our Robust Frontend Solutions"/>
            </section>
            <section className={cls.stacks}>
                <h1 className={cls.title}>With years of experience, deepknowledge of various tools and technologies, we build creative solutions that will allow you to scale up your business and design.</h1>
                <StackBlock 
                    title={{
                        content: "Tech Stack We Love to Use",
                        color: "white"
                    }}
                    tool1={{
                        image: "/img/python.png",
                        title: "Python"
                    }}
                    tool2={{
                        image: "/img/python.png",
                        title: "Python"
                    }}
                    tool3={{
                        image: "/img/python.png",
                        title: "Python"
                    }}
                    tool4={{
                        image: "/img/python.png",
                        title: "Python"
                    }}
                    tool5={{
                        image: "/img/python.png",
                        title: "Python"
                    }}
                />
                <StackBlock 
                    title={{
                        content: "The tools we use",
                        color: "white"
                    }}
                    tool1={{
                        image: "/img/python.png",
                        title: "Python"
                    }}
                    tool2={{
                        image: "/img/python.png",
                        title: "Python"
                    }}
                    tool3={{
                        image: "/img/python.png",
                        title: "Python"
                    }}
                    tool4={{
                        image: "/img/python.png",
                        title: "Python"
                    }}
                    tool5={{
                        image: "/img/python.png",
                        title: "Python"
                    }}
                />
                <Benefits content={{
                    benefit1: {
                        number: "1",
                        title: "Agile methodology",
                        text: "Along with constant delivery and live demos, we love consistent and dynamic communication with our clients. Due to being constantly updated about how you feel regarding one or another project aspect, we deliver the result you expect."
                    },
                    benefit2: {
                        number: "2",
                        title: "Agile methodology",
                        text: "Along with constant delivery and live demos, we love consistent and dynamic communication with our clients. Due to being constantly updated about how you feel regarding one or another project aspect, we deliver the result you expect."
                    },
                    benefit3: {
                        number: "3",
                        title: "Agile methodology",
                        text: "Along with constant delivery and live demos, we love consistent and dynamic communication with our clients. Due to being constantly updated about how you feel regarding one or another project aspect, we deliver the result you expect."
                    },
                    benefit4: {
                        number: "4",
                        title: "Agile methodology",
                        text: "Along with constant delivery and live demos, we love consistent and dynamic communication with our clients. Due to being constantly updated about how you feel regarding one or another project aspect, we deliver the result you expect."
                    }
                }}/>
            </section>
            <section className={cls.case}>
                <BetweenTitle content="Case Studies" color="white"/>
                <div className={cls.caseBlock}>
                    <div className={cls.longCase}>
                        <img className={cls.logo} src="/img/it_academy_logo.png" alt="logo" />
                        <div className={cls.bottomInfo}>
                            <h1>The growth of <br/> IT Academy.kg</h1>
                            <span className={cls.popUpSpan}>
                                <p>The It Academy in the Kyrgyzstan center of bishkek</p>
                                <button className={cls.exploreBtn}>Explore</button>
                            </span>
                        </div>
                    </div>
                </div>
                <LongBtn content="See more case studies" color="white"/>
            </section>
            <Form/>
        </div>
    )
}

export default Frontend