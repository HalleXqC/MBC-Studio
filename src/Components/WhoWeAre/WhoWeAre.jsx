import cls from './WhoWeAre.module.scss'
import BetweenTitle from '../BetweenTitle/BetweenTitle'

const WhoWeAre = () => {
    return (
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
    )
}

export default WhoWeAre