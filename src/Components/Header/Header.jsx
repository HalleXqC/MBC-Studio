import cls from './Header.module.scss'
import Title from '../Title/Title'
import LongBtn from '../LongBtn/LongBtn'
import useWindowDimensions from '../getWindowFunc/useWindowDimension'

const Header = () => {

    const {width} = useWindowDimensions()

    return (
        <section className={cls.header}>
            <Title redText="MBC" text1="Studio" text2="Marketing Business" text3="Creative Studio" rhombus={width <= 454 ? false : true}/>
            <div className={cls.bottomText}><a href="">What we do</a> <a href="">FaQ</a></div>
            <h1 className={cls.appearText}>We make your dream dome true.</h1>
            {width <= 454 ? (
                <button className={cls.orderBtn}>Order a project now</button>
            ) : (
                <LongBtn content="Get a consultation" color="white"/>
            )}
        </section>
    )
}

export default Header