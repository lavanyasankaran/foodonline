import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo } from '../../assets/home.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
//import Search from '../search/search.component';

const Header = ({hidden}) =>(
    <div className='header'>
    <Link className='logo-container' to="/">
        <Logo className='logo'/>
    </Link>
    
    <div className='options'>
        <Link className='option' to='/order'>Order</Link> 
        <Link className='option' to='/order'>Sort</Link> 
        <CartIcon />
    </div>
    {
     hidden?null:
     <CartDropdown />
    }
    
    </div>
);
 const mapStateToProps =({cart:{hidden}})=>({
     hidden
 });
export default connect(mapStateToProps) (Header);