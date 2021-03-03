import { useState } from 'react';
import Message from './components/Message';
import PictureDisplay from './components/PictureDisplay';

function App() {
  const [size, setSize] = useState('s');
  const [featherCount, setFeatherCount] = useState(0);
  const [featherColors, setFeatherColors] = useState([]);
  const [red, setRed] = useState(false);
  const [orange, setOrange] = useState(false);
  const [brown, setBrown] = useState(false);
  const [lightBrown, setLightBrown] = useState(false);
  const [yellow, setYellow] = useState(false);

  console.log('colors', red, orange, brown, lightBrown, yellow);

  return (
    <>
      <h1>Turkey Builder</h1>
      <h3>Set the features of your turkey</h3>
      <div className='button-controls'>
        Size
        <button disabled={size === 's'} onClick={() => setSize('s')}>
          Small
        </button>
        <button disabled={size === 'm'} onClick={() => setSize('m')}>
          Mediium
        </button>
        <button disabled={size === 'l'} onClick={() => setSize('l')}>
          Large
        </button>
        <button disabled={size === 'xl'} onClick={() => setSize('xl')}>
          Extra Large
        </button>
      </div>
      <div className='button-controls'>
        Feather Count:
        <input
          onChange={(e) => console.log(e.target.value)}
          type='number'
          defaultValue={0}
          min={0}
          max={10}
        />
      </div>
      <div className='button-controls'>
        Feather Color(s):
        <label>
          <input
            type='checkbox'
            onChange={(e) => setRed(e.currentTarget.checked)}
          />
          Red
        </label>
        <label>
          <input
            type='checkbox'
            onChange={(e) => setOrange(e.currentTarget.checked)}
          />
          Orange
        </label>
        <label>
          <input
            type='checkbox'
            onChange={(e) => setBrown(e.currentTarget.checked)}
          />
          Brown
        </label>
        <label>
          <input
            type='checkbox'
            onChange={(e) => setLightBrown(e.currentTarget.checked)}
          />
          Light Brown
        </label>
        <label>
          <input
            type='checkbox'
            onChange={(e) => setYellow(e.currentTarget.checked)}
          />
          Yellow
        </label>
      </div>
      <h3>Enjoy Your Turkey </h3>
      <PictureDisplay
        size={size}
        featherCount={featherCount}
        featherColors={['red', 'yellow']}
      />
      <Message size={'m'} />
    </>
  );
}

export default App;
