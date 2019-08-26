import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import ProductList from '../components/ProductList'
import CheckoutForm from '../components/CheckoutForm'

const Products = (props) => (
    <Layout>
        <Helmet>
            <title>Turbo Direct</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
    <ProductList />
        </div>
    </Layout>
)

export default Products