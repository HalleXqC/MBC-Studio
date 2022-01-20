import cls from './Form.module.scss'
import BetweenTitle from '../BetweenTitle/BetweenTitle'

const Form = ({burger}) => {
    return (
        <div className={cls.root}>
            {burger ? '' : (
                <BetweenTitle content="Get in touch" color="#EC1C24"/>
            )}
            <div className={cls.howToContact}>
                <div className={cls.info}>
                    <div className={cls.infoTop}>
                        <div>
                            <p>Text us:</p>
                            <h1>edzen@gmail.com</h1>
                        </div>
                        <div>
                            <p>Call us:</p>
                            <h1>+996 703 00 00 00</h1>
                        </div>
                    </div>
                    <div className={cls.infoBottom}>
                        <a target="_blank" href="">
                            <img src="/img/whatsapp.png" alt="whatsapp-icon" />
                            <p>Whats`App</p>
                        </a>
                        <a target="_blank" href="">
                            <img src="/img/weChat.png" alt="wechat-icon" />
                            <p>WeChat</p>
                        </a>
                        <a target="_blank" href="">
                            <img src="/img/telegram.png" alt="telegram-icon" />
                            <p>Telegram</p>
                        </a>
                        <a target="_blank" href="">
                            <img src="/img/instagram.png" alt="instagram-icon" />
                            <p>Instagram</p>
                        </a>
                    </div>
                </div>
                <div className={cls.icons}>
                    <a target="_blank" href=""><img src="/img/twitter.png" alt="twitter" /></a>
                    <a target="_blank" href=""><img src="/img/facebook.png" alt="facebook" /></a>
                    <a target="_blank" href=""><img src="/img/instagram.png" alt="instagram" /></a>
                    <a target="_blank" href=""><img src="/img/youtube.png" alt="youtube" /></a>
                    <a target="_blank" href=""><img src="/img/linkedIn.png" alt="linkedin" /></a>
                </div>
                <form className={cls.form} style={burger ? {display: "none"} : null}>
                    <input placeholder="Jhon Smith" type="text" className={cls.littleInput}/>
                    <input placeholder="Your gmail*" type="text" className={cls.littleInput}/>
                    <textarea placeholder="Describe your project..." type="text" className={cls.bigInput}></textarea>
                    <input type="submit" value="Order a project now" className={cls.submitInput}/>
                </form>
            </div>
        </div>
    )
}

export default Form