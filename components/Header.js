import React from 'react'
import 'react-sticky-header/styles.css'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Image from '../assets/images/turbodirect.png'
import StickyHeader from 'react-sticky-header';


const Header = (props) => (
    <StickyHeader
    header = { 
        <div id="header" className="alt">
        <Link to="/" ><img className="logo" src={Image} alt="Website Logo" /></Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/shoppingcart">Cart</Link>

        </nav> 
        </div>
    }
>
</StickyHeader>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
