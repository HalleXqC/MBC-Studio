import cls from './Reviews.module.scss'
import BetweenTitle from '../BetweenTitle/BetweenTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper'
import SingleReview from '../SingleReview/SingleReview';
import 'swiper/css';
import "swiper/css/navigation"

SwiperCore.use([Navigation])

const Reviews = () => {

    const slides = []

    for(let i = 0; i < 2; i++){
        slides.push(
            <SwiperSlide key={`slide-${i}`} className={cls.swiperSlide}>
                <div className={cls.inlineSlide}>
                    <SingleReview/>
                    <SingleReview/>
                </div>
                <div className={cls.inlineSlide}>
                    <SingleReview/>
                    <SingleReview/>
                </div>
            </SwiperSlide>
        )
    }

    return (
        <div className={cls.root}>
            <BetweenTitle content="MBC Studio Reviews" color="white"/>
            <p className={cls.bottomTitle}>You can help other people by leaving a review about us .</p>
            <div className={cls.exampleReview}>
                <p>4.5/5</p>
                <ul>
                    <li><img src="/img/star.png" alt="star"/></li>
                    <li><img src="/img/star.png" alt="star"/></li>
                    <li><img src="/img/star.png" alt="star"/></li>
                    <li><img src="/img/star.png" alt="star"/></li>
                    <li><img src="/img/halfstar.png" alt="star"/></li>
                </ul>
                <p>(13)</p> 
            </div>
            <Swiper id={cls.main} className={cls.swiper} navigation={true}>
                {slides}
            </Swiper>
        </div>
    )
}

export default Reviews