import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Cart from '../components/Cart.js'
import BannerLanding from '../components/BannerLanding'

const ShoppingCart = (props) => (
    <Layout>
        <Helmet>
            <title>Turbo Direct</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <Cart />
        </div>

    </Layout>
)

export default ShoppingCart