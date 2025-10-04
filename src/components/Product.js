import React from 'react'

const Product = (props) => {
  function  incrementQuantity(index){

    }
    return (
        <div className='row'>
            <div className='col-5'>
                <h2>{props.product.name} <span class="badge text-bg-secondary">₹{props.product.price}</span></h2>
            </div>

            <div className='col-3'>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">
                        -
                    </button>
                    <button type="button" class="btn btn-primary">
                        {props.product.quantity}
                    </button>
                    <button type="button" class="btn btn-primary" onClick={this.incrementQuantity(index)}>
                        +
                    </button>
                </div>
            </div>
            <div className='col-4'>
                {props.product.quantity * props.product.price}
            </div>
        </div>
    )
}

export default Product
