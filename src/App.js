import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import PrismaZoom from 'react-prismazoom'


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        EXEMPLO 1 - react-zoom-pan-pinch
        <a href='https://prc5.github.io/react-zoom-pan-pinch/' target='_blank'> Demo react-zoom-pan-pinch </a>
'
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
        
        EXEMPLO 2 - react-prismazoom
        <a href='https://www.npmjs.com/package/react-prismazoom' target='_blank'> Demo react-prismazoom </a>

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
