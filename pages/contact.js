import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Contact from '../components/Contact'
import ContactLanding from '../components/ContactLanding'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Turbo Direct - Contact Us</title>
        </Helmet>
<ContactLanding />
        <div id="main" className="alt">
           <Contact />
            </div>
    </Layout>
)

export default Generic