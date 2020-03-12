import React from 'react';
import Sidebar from './Sidebar';

class PostDetail extends React.Component {
    state = {  }

    

    render() { 
        console.log(this.props.match.params.slug);
        return ( 
            <div className="container">

            <div className="row">
        
        
              <div className="col-md-8">
        
                <h1 className="my-4">Page Heading: {this.props.match.params.slug}
                </h1>
        <p className="text-muted">Posted on January 1, 2019 at 12:00 PM  by <a href="/home">Start Bootstrap</a></p>

        <img className="img-fluid rounded" src="https://3.bp.blogspot.com/--C1wpaf_S4M/W7V__10nRoI/AAAAAAAAK24/1NSfapuYSIY0f0wzXY9NgoH0FjQLT07YACKgBGAs/s1600/maxresdefault.jpg" alt="Card cap" />

       
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>

  
        
        <div className="card my-4">
          <h5 className="card-header">Leave a Comment:</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <div className="media mb-4">
          <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
          <div className="media-body">
            <h5 className="mt-0">Commenter Name</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>

    
        <div className="media mb-4">
          <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
          <div className="media-body">
            <h5 className="mt-0">Commenter Name</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

            <div className="media mt-4">
              <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
              <div className="media-body">
                <h5 className="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>

            <div className="media mt-4">
              <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
              <div className="media-body">
                <h5 className="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>

          </div>
        </div>
           



              </div>
        
            
              <div className="col-md-4">

                  <Sidebar />
        
                
        
              </div>
        
            </div>
        
        
          </div>
           );
    }
}
 
export default PostDetail;