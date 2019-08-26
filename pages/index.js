import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import ReactPlayer from 'react-player'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {
        
        return (
            <Layout>
                <Helmet
                    title="Turbo Direct - Online Turbo Retailer"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${pic01})` }}>
                            <header className="major">
                                <h3>Garrett G Series</h3>
                                <p>G-Series turbos tend to have more parts, larger in size, and represent early-generation technologies. Garrett GT Series first came into being in the early 90s, and they feature newer aerodynamic design, advanced design with fewer parts, and better overall performance.</p>
                            <button to="/products" className="prodbuttons">See More</button>
                            </header>
                            <Link to="/products" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic02})` }}>
                            <header className="major">
                                <h3>Garrett GTX Series</h3>
                                <p>Our full line of turbochargers from GT, GTX series. These turbos support a range of engine displacements from 1.4L – 12.0L and 140 horsepower up to 3000 horsepower.</p>
                            <button to="/products" className="prodbuttons">See More</button>
                            </header>
                            <Link to="/products" className="link primary"></Link>
                        </article>
                        <div className="video">
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=yeP0kr4CXUI'
                            width='100%'
                            height='100%'
                            light    
                            />
                            </div>
                    </section>


                </div>
            </Layout>
        )
    }
    _onReady(event) {
        event.target.pauseVideo();
      }
}

export default HomeIndex