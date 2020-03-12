import React from 'react';
const CartRow = (props) => {
   
        console.log(props.productName);
        return ( <div className="row">
        <div className="col-md-2">
            <img className="img-responsive" src="http://placehold.it/100x70" alt="abcd" />
        </div>
        <div className="col-md-4">
<h4 className="product-name"><strong>{props.productName}</strong></h4><h4><small>Product description</small></h4>
        </div>
        <div className="col-md-6">
        <div className="row">
          <div className="col-md-6 text-right">
            <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control input-sm" value="1" />
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-link btn-xs">
              <span className="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
          </div>
        </div>
      </div> );
}
 
export default CartRow;