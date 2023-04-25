import React, { useState , useEffect} from 'react';
import './App.css';
function App() {
  const [originalSize, setOriginalSize] = useState(16); 

  const [fontSize, setFontSize] = useState(16); 
  useEffect(() => {
    setOriginalSize(fontSize);
  }, []);

  const zoomIn = () => {
    setFontSize((prevSize) => prevSize + 2);
  };
  const zoomOut = () => {
    setFontSize((prevSize) => (prevSize > 2 ? prevSize - 2 : prevSize));
  };

  const zoomReset = () => {
    setFontSize(originalSize);
  };

  return (
    <div className="App">
      <button onClick={zoomIn}>Zoom In </button>
      <button onClick={zoomOut}>Zoom Out</button>
      <button onClick={zoomReset}>Reset</button>

      <p style={{ fontSize: `${fontSize}px` }}>
          
          <div className="card-body">
                  <h1 className="card-title pricing-card-title">Pricing</h1>
                  <p className="list-unstyled mt-3 mb-4">Quickly build an effective pricing table for your potential customers with this Bootstrap example. </p>
                  <p className="list-unstyled mt-3 mb-4">It's built with default Bootstrap components and utilities with little customization.</p>
          </div>
          <div className="container">
                  <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                      <div className="card-header">
                        <h4 className="list-unstyled mt-3 mb-4">Free</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>10 users included</li>
                          <li>2 GB of storage</li>
                          <li>Email support</li>
                          <li>Help center access</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                      </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                      <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Pro</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>20 users included</li>
                          <li>10 GB of storage</li>
                          <li>Priority email support</li>
                          <li>Help center access</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                      </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                      <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Enterprise</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>30 users included</li>
                          <li>15 GB of storage</li>
                          <li>Phone and email support</li>
                          <li>Help center access</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
                      </div>
                    </div>
                  </div>

                  <footer className="pt-4 my-md-5 pt-md-5 border-top">
                    <div className="row">
                      <div className="col-12 col-md">
                        {/* <img className="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"> */}
                        <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
                      </div>
                      <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                          <li><a className="text-muted" href="#">Cool stuff</a></li>
                          <li><a className="text-muted" href="#">Random feature</a></li>
                          <li><a className="text-muted" href="#">Team feature</a></li>
                          <li><a className="text-muted" href="#">Stuff for developers</a></li>
                          <li><a className="text-muted" href="#">Another one</a></li>
                          <li><a className="text-muted" href="#">Last time</a></li>
                        </ul>
                      </div>
                      <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                          <li><a className="text-muted" href="#">Resource</a></li>
                          <li><a className="text-muted" href="#">Resource name</a></li>
                          <li><a className="text-muted" href="#">Another resource</a></li>
                          <li><a className="text-muted" href="#">Final resource</a></li>
                        </ul>
                      </div>
                      <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                          <li><a className="text-muted" href="#">Team</a></li>
                          <li><a className="text-muted" href="#">Locations</a></li>
                          <li><a className="text-muted" href="#">Privacy</a></li>
                          <li><a className="text-muted" href="#">Terms</a></li>
                        </ul>
                      </div>
                    </div>
                  </footer>
          </div>
      </p>
    </div>
  );
}

export default App;
