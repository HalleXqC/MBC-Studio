import cls from './LongCase.module.scss'

const LongCase = ({firstLine, secondLine, text}) => {
    return (
        <div className={cls.caseBlock}>
            <div className={cls.longCase} style={{background: 'url("./img/case1.jpg") center / cover no-repeat'}}>
                <img className={cls.logo} src="/img/it_academy_logo.png" alt="logo" />
                <div className={cls.bottomInfo}>
                    <h1>{firstLine} <br/> {secondLine}</h1>
                    <span className={cls.popUpSpan}>
                        <p>{text}</p>
                        <button className={cls.exploreBtn}>Explore</button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LongCase