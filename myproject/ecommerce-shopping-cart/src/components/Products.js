import React, {Component}from 'react'
import { formatCurrency} from './util';

export default class Products extends Component {
    render(){
        const productsItems = this.props.products.map(product => { 
            <div className="col-md-4">
            <div className="thumbnail text-center">
                <a href={`#${product.id}`}onClick={this.props.handleAddCard}>
                    <img src={`/products/${products.sku}_2.jpg`} alt={products.title} />
                    <p>
                        {products.title}
                    </p>
                </a>
                <div>
                        <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-primary"
                    onClick={(e) =>this.props.handleAddCard(e, product)}> Add to Cart</button>
                </div>
                </div>
             </div>            
        })
        return (
            <div className="row">
                {productsItems}
            </div>
        )
    }
}