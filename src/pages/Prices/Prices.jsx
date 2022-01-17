import Title from '../../Components/Title/Title'
import cls from './Prices.module.scss'
import PriceBlock from '../../Components/PriceBlock/PriceBlock'
import Form from '../../Components/Form/Form'

const Prices = () => {
    return (
        <div className={cls.root}>
            <section className={cls.header} style={{background: "url('/img/prices_bg.jpg') center / cover"}}>
                <Title redText="Our" text1="prices" littleText="Our company offers you good prices."/>
            </section>
            <section className={cls.prices}>
                <PriceBlock title="Web Develop" content={{
                    list1: {
                        title: "Landing Page",
                        price: "100",
                        desc: "Great for business!",
                        item1: "Only 1 page",
                        item2: "We will do everything quality",
                        item3: "Fast!"
                    },
                    list2: {
                        title: "Corporative",
                        price: "250",
                        desc: "Great for business!",
                        item1: "How much do you want",
                        item2: "We will do website with design",
                        item3: "Fast!"
                    },
                    list3: {
                        title: "Internet Shop",
                        price: "330",
                        desc: "Great for business!",
                        item1: "How much do you want",
                        item2: "We will do website with design",
                        item3: "Fast!"
                    }
                }}/>
                <PriceBlock title="Video editing" content={{
                    list1: {
                        title: "Animation Roller",
                        price: "100",
                        desc: "Great for any kind of business!",
                        item1: "Only 1 page",
                        item2: "We will do everything quality",
                        item3: "Fast!"
                    },
                    list2: {
                        title: "Animation Roller",
                        price: "100",
                        desc: "Great for business!",
                        item1: "How much do you want",
                        item2: "We will do website with design",
                        item3: "Fast!"
                    },
                    list3: {
                        title: "Animation Roller",
                        price: "100",
                        desc: "Great for business!",
                        item1: "How much do you want",
                        item2: "We will do website with design",
                        item3: "Fast!"
                    }
                }}/>
                <PriceBlock title="Graphic Services" content={{
                    list1: {
                        title: "Creating logo",
                        price: "100",
                        desc: "Great for business!",
                        item1: "Only 1 page",
                        item2: "We will do everything quality",
                        item3: "Fast!"
                    },
                    list2: {
                        title: "UX / UI",
                        price: "100",
                        desc: "Creation of layouts for web projects!",
                        item1: "How much do you want",
                        item2: "We will do website with design",
                        item3: "Fast!"
                    },
                    list3: {
                        title: "UX / UI",
                        price: "100",
                        desc: "Great for business!",
                        item1: "How much do you want",
                        item2: "We will do website with design",
                        item3: "Fast!"
                    }
                }}/>
            </section>
            <Form/>
        </div>
    )
}

export default Prices