import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import './css/products.css'
import Tiles from './Tiles'
class Home extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title} />
                        <span className="card-title">{item.title}</span>
                    </div>

                    <div className="card-content" id="card-section">
                        <p>{item.desc}</p>
                        <p><b>Price: $ {item.price}</b></p>
                        <span to="/" className="waves-effect waves-light green btn" onClick={() => { this.handleClick(item.id) }}><i className="medium material-icons">add_shopping_cart</i></span>

                    </div>
                </div>

            )
        })

        return (
            <div>
            <Tiles />

                <div className="container">
                    <h3 className="center main-title"></h3>
                    <div className="box">
                        {itemList}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)