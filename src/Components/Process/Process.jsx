import cls from "./Process.module.scss"
import BetweenTitle from "../BetweenTitle/BetweenTitle"
import LongBtn from "../LongBtn/LongBtn"
import ProgressCircle from "../ProgressCircle/ProgressCircle"

const Process = () => {
    return (
        <>
            <section className={cls.root}>
                <BetweenTitle content="How is the process of creating a project:"/>
                <div className={cls.process}>
                    <div className={cls.inlineProcess}>
                        <div>
                            <img className={cls.icon} src="/img/icon_contact.png" alt="contact-icon"/>
                            <img className={cls.arrow} src="/img/crooked_arrow.png" alt="crooked-arrow" />
                            <h1>Contact</h1>
                            <p>Send us a project application or a project idea.</p>
                        </div>
                        <div>
                            <img className={cls.icon} src="/img/icon_analyze.png" alt="analyze-icon"/>
                            <img className={cls.arrow} id={cls.arrow2} src="/img/crooked_arrow.png" alt="crooked-arrow" />
                            <h1>Analyze</h1>
                            <p>We will contact you to clarify requirements for your project.</p>
                        </div>
                    </div>
                    <div className={cls.inlineProcess}>
                        <div>
                            <img className={cls.icon} src="/img/icon_team.png" alt="team-icon"/>
                            <img className={cls.arrow} src="/img/crooked_arrow.png" alt="crooked-arrow" />
                            <h1>Team</h1>
                            <p>We will assemble and prepare a team for your project.</p>
                        </div>
                        <div>
                            <img className={cls.icon} src="/img/icon_start.png" alt="start-icon"/>
                            <h1>Start</h1>
                            <p>You will get to know the team and we let's get down to work on the project.</p>
                        </div>
                    </div>
                </div>
                <LongBtn content="Submit your application" color="black"/>
            </section>
            <section className={cls.metrics}>
                <BetweenTitle content="Mbc studios' key metrics" color="black"/>
                <div className={cls.inlineMetrics}>
                    <div className={cls.div}>
                        <ProgressCircle percentage={75} article="k"/>
                        <p>Hours worked</p>
                    </div>
                    <div className={cls.div}>
                        <ProgressCircle percentage={5} article=""/>
                        <p>Years in business</p>
                    </div>
                    <div className={cls.div}>
                        <ProgressCircle percentage={45} article=""/>
                        <p>Completed projects</p>
                    </div>
                    <div className={cls.div}>
                        <ProgressCircle percentage={24} article="/7"/>
                        <p>Support available</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process