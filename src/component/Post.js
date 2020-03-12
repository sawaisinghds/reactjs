import React from 'react';
import {
    Link,
  } from "react-router-dom";

class Post extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="card mb-4">
                <img className="card-img-top" src="https://3.bp.blogspot.com/--C1wpaf_S4M/W7V__10nRoI/AAAAAAAAK24/1NSfapuYSIY0f0wzXY9NgoH0FjQLT07YACKgBGAs/s1600/maxresdefault.jpg" alt="Card cap" />
                <div className="card-body">
                    <h2 className="card-title">Post Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                  
                    <Link className="btn btn-primary" to="/post/post-title" >Read More →</Link>
                </div>
                <div className="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="/home">Start Bootstrap</a>
                </div>
            </div>
         );
    }
}
 
export default Post;