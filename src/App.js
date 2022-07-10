import './App.css';
import fccLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Counter from './components/Counter'
import { useState } from 'react'



function App() {

  const [numClicks, setNumClicks] = useState(0)


  const incrementCount = () => {
    setNumClicks(numClicks + 1)
  }

  const resetCounter = () => {
    setNumClicks(0)
  }



  return (
    <div className="App">
      <div className="fcc-logo-container">
        <img className='fcc-logo'
          src={fccLogo}
          alt="fcc-logo" />
      </div>

      <div className="counter-container">

        <Counter
          numClicks={numClicks}
        />

        <Button
          btnText='Click to Count'
          isCounter={true}
          handleClick={incrementCount}
        />

        <Button
          btnText='Reset Count'
          isCounter={false}
          handleClick={resetCounter}
        />


      </div>

    </div >
  );
}

export default App;
