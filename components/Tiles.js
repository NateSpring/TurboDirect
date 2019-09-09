import React from 'react'
import { Route } from 'react-router-dom'
import pic01 from './assets/images/pic01.jpg'
import pic02 from './assets/images/pic02.jpg'

const Tiles = () => (
<section id="one" className="tiles">
<article>
<div className="productheader">
                    <h4>Our selection of specialty TurboChargers... <br/> a fit for every application.</h4>
                    </div>
                    </article>
                        <article style={{ backgroundImage: `url(${pic01})` }}>
                            <header className="major">
                                <h1>Now Featuring:</h1>
                                <h3>Garrett G Series</h3>
                                <p>The G-Series line of turbos tend to be larger in size, and are capable of power ranging between 200hp - 2000hp engines. </p>
                            </header>
                            <Route path="/products" className="link primary"></Route>
                        </article>
                        <article style={{ backgroundImage: `url(${pic02})` }}>
                            <header className="major">
                            <h1>Now On Sale:</h1>
                                <h3>Garrett GTX Series</h3>
                                <p>Our full line of turbochargers from GT, GTX series. These turbos support a range of engine displacements from 1.4L – 12.0L and 140 horsepower up to 3000 horsepower.</p>
                            </header>
                            <Route path="/products" className="link primary"></Route>
                        </article>
                        <article>
                            <h1>Full Product List Below <span id="flashy-arrow"><i class="fa fa-arrow-down" aria-hidden="true"></i>
</span></h1>
                        </article>
                    </section>


    )

export default Tiles