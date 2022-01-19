import useWindowDimensions from '../getWindowFunc/useWindowDimension'
import LongCase from '../LongCase/LongCase';
import cls from './Cases.module.scss'

const Cases = () => {

    const { height, width } = useWindowDimensions()

    return (
                
        <div className={cls.casesContent}>
            <LongCase firstLine="The growth of" secondLine="IT Academy.kg" text="The It Academy in the Kyrgyzstan center of bishkek"/>
            {width >= 925 ? (
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
            ) : (
                <LongCase firstLine="The growth of" secondLine="IT Academy.kg" text="The It Academy in the Kyrgyzstan center of bishkek"/>
            )}
            <LongCase firstLine="The growth of" secondLine="IT Academy.kg" text="The It Academy in the Kyrgyzstan center of bishkek"/>
        </div>
    )
}

export default Cases