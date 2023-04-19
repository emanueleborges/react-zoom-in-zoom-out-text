import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import PrismaZoom from 'react-prismazoom'


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        EXEMPLO react-zoom-pan-pinch
        <TransformWrapper
          initialScale={1}
          initialPositionX={200}
          initialPositionY={100}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              <div className="tools">
                <button onClick={() => zoomIn()}>Zoom +</button>
                <button onClick={() => zoomOut()}>Zoom -</button>
                <button onClick={() => resetTransform()}>Reset x</button>
              </div>
              <TransformComponent>
              <div>
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
        
        EXEMPLO react-prismazoom
        <PrismaZoom>
          <p>A text that can be zoomed and dragged</p>
          <p>A text that can be zoomed and dragged</p>
          <p>A text that can be zoomed and dragged</p>
        </PrismaZoom>
      </header>
    </div>
  );
}

export default App;
