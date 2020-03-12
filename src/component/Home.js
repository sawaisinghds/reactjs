import React from 'react';
import Post from './Post';
import Sidebar from './Sidebar';

class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>

<header className="bg-primary py-5 mb-5">
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-lg-12">
          <h1 className="display-4 text-white mt-5 mb-2">Business Name or Tagline</h1>
          <p className="lead mb-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.</p>
        </div>
      </div>
    </div>
  </header>

  <div className="container">

    <div className="row">


      <div className="col-md-8">

        <h1 className="my-4">Page Heading
          <small>Secondary Text</small>
        </h1>

        <Post />

        <Post />

        <Post />

        <Post />


  
        <ul className="pagination justify-content-center mb-4">
          <li className="page-item">
            <a className="page-link" href="/home">← Older</a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="/home">Newer →</a>
          </li>
        </ul>

      </div>

    
      <div className="col-md-4">

        <Sidebar />

      </div>

    </div>


  </div>

            </>
         );
    }
}
 
export default Home;