import React from 'react';

import Order_Data from './order.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
class OrderPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
         collections:Order_Data
        }
    };


render()
{
    const { collections } =this.state;
    return( <div className='order-page'>
        {
            collections.map(({id,...otherCollectionProps}) =>(
                <CollectionPreview key={ id } {...otherCollectionProps} />
            ))
        }
    </div>)
}
}
export default OrderPage;