import React from 'react';
import CartRow from "./CartRow"
class Car extends React.Component {
  state = {  }
  render() { 
    return ( 
     
        <div class="row">
          <div class="col-sm-8">
            <div class="panel panel-info">
              <div class="panel-heading">
                <div class="panel-title">
                  <div class="row">
                    <div class="col-md-6">
                      <h5><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                    </div>
                    <div class="col-md-6">
                      <button type="button" class="btn btn-primary btn-sm btn-block">
                        <span class="glyphicon glyphicon-share-alt"></span> Continue shopping
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel-body">
                <CartRow productName="Product name 1" />
                
                <hr />
                <CartRow productName="Product name ABC" />
                <hr />
                <CartRow productName="Product name 3" />
                <hr />
                <div class="row text-center">
                    <div class="col-md-9">
                      <h6 class="text-right">Added items?</h6>
                    </div>
                    <div class="col-md-3">
                      <button type="button" class="btn btn-default btn-sm btn-block">
                        Update cart
                      </button>
                    </div>
                </div>
              </div>
              <div class="panel-footer">
                <div class="row text-center">
                  <div class="col-md-9">
                    <h4 class="text-right">Total <strong>$50.00</strong></h4>
                  </div>
                  <div class="col-md-3">
                    <button type="button" class="btn btn-success btn-block">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       );
  }
}
 
export default Car;