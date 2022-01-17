import cls from './Header.module.scss'
import Title from '../Title/Title'
import LongBtn from '../LongBtn/LongBtn'

const Header = () => {
    return (
        <section className={cls.header}>
            <Title redText="MBC" text1="Studio" text2="Marketing Business" text3="Creative Studio" rhombus/>
            <div className={cls.bottomText}><a href="">What we do</a> <a href="">FaQ</a></div>
            <LongBtn content="Get a consultation" color="white"/>
        </section>
    )
}

export default Header