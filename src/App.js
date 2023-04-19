import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TransformWrapper
          initialScale={1}
          initialPositionX={200}
          initialPositionY={100}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              <div className="tools">
                <button onClick={() => zoomIn()}>Zoom +</button>
                <button onClick={() => zoomOut()}>Zomm -</button>
                <button onClick={() => resetTransform()}>Reset x</button>
              </div>
              <TransformComponent>
              <div>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
                <p>Example Text Zoom In Zoom Out</p>
              </div>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>

       

        
      </header>
    </div>
  );
}

export default App;
