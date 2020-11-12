import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsTotal } from '../../redux/cart/cart.selectors';

import './cart-total.styles.css';

const CartTotal = ({total}) => (
    <div className='cart-total'>
        <b>Total:</b> {total}
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    total: selectCartItemsTotal(state)
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(CartTotal);
