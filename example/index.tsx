import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Background } from '../.';

const App = () => {
  return (
    <div>
      <Background type="triangles" backgroundColor="black" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
