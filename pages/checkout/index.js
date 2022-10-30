import {Checkout} from '../../components'
import Head from 'next/head'

const Index = () => {

    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>

            <Checkout products={[{name: "Product Name", price: 39, initialPrice: 47, bundle: "Single"}]}/>
        </>
    )
}

export default Index