import 'react-app-polyfill/ie11';
import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Background } from '../.';
import { backgrounds } from 'addbackground/lib/backgrounds';

const backgroundTypes = Object.keys(backgrounds);

const App = () => {
  const [backgroundType, setBackgroundType] = useState(backgroundTypes[0]);

  return (
    <div>
      <div>
        {backgroundTypes.map(type => (
          <button onClick={() => setBackgroundType(type)} key={type}>
            {type}
          </button>
        ))}
      </div>
      <div style={{ minHeight: '400px', position: 'relative' }}>
        <Background type={backgroundType} backgroundColor="black" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
