import React from 'react';
import {ReactComponent as OrderIcon } from '../../assets/bucket.svg';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden,itemCount}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <OrderIcon className='order-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);
const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state =>({
    itemCount:selectCartItemsCount(state)
})
export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);