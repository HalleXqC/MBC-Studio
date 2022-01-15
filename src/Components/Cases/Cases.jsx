import cls from './Cases.module.scss'
import LongBtn from '../LongBtn/LongBtn'
import BetweenTitle from '../BetweenTitle/BetweenTitle'

const Cases = () => {
    return (
        <section className={cls.cases}>
                <BetweenTitle content="Cases" color="white"/>
                <div className={cls.casesContent}>
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

                    <div className={cls.inlineCasesBlock}>
                        <div className={cls.biggerCase}>
                            <img className={cls.logo} src="/img/it_academy_logo.png" alt="logo" />
                            <div className={cls.bottomInfo}>
                                <h1>The growth of <br/> IT Academy.kg</h1>
                                <span className={cls.popUpSpan}>
                                    <p>The It Academy in the Kyrgyzstan center of bishkek</p>
                                    <button className={cls.exploreBtn}>Explore</button>
                                </span>
                            </div>
                        </div>
                        <div className={cls.smallerCase}>
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
                <LongBtn content="See all works" color="white"/>
            </section>
    )
}

export default Cases