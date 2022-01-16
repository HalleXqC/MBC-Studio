import Cases from '../../Components/Cases/Cases'
import Process from '../../Components/Process/Process'
import Reviews from '../../Components/Reviews/Reviews'
import Form from '../../Components/Form/Form'
import Tech from '../../Components/Tech/Tech'
import WhoWeAre from '../../Components/WhoWeAre/WhoWeAre'
import Header from '../../Components/Header/Header'

const Main = () => {

    return (
        <div>
            <Header/>
            <Cases/>
            <WhoWeAre/>
            <Tech/>
            <Process/>
            <Reviews/>
            <Form/>
        </div>
    )
}

export default Main