import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartTotal } from '../../redux/cart/cart.selectors';

import './cart-total.styles.css';

const CartTotal = ({total}) => (
    <div className='cart-total'>
        <b>Total:</b> {total}
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(CartTotal);
