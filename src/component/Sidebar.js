import React from 'react';
class Sidebar extends React.Component {
  state = {  }
  render() { 
    return (
      <>
      <div className="card my-4">
                  <h5 className="card-header">Search</h5>
                  <div className="card-body">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search for..." />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">Go!</button>
                      </span>
                    </div>
                  </div>
                </div>
        
                <div className="card my-4">
                  <h5 className="card-header">Categories</h5>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a href="/home">Web Design</a>
                          </li>
                          <li>
                            <a href="/home">HTML</a>
                          </li>
                          <li>
                            <a href="/home">Freebies</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a href="/home">JavaScript</a>
                          </li>
                          <li>
                            <a href="/home">CSS</a>
                          </li>
                          <li>
                            <a href="/home">Tutorials</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
        
                <div className="card my-4">
                  <h5 className="card-header">Side Widget</h5>
                  <div className="card-body">
                    You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                  </div>
                </div>
      </>
    );
  }
}
 
export default Sidebar;