import { useState } from 'react';
import './App.css';

function App() {
  const [creatureList, setCreatureList] = useState([
    { name: 'Unicorn', origin: 'Britain' },
    { name: 'Sphinx', origin: 'Egypt' },
    { name: 'Jackalope', origin: 'America' }
  ])

  const name = 'Kelsey'

  return (
    <>
      <header className="Header">
        <h1>React Mythical Creatures</h1>
      </header>
      <div className="App">
        <div>
          Splatting to the DOM looks like this:
          <pre>
            {/* We can use JSON.stringify() to dump raw data into our DOM */}
            {JSON.stringify(creatureList)}
          </pre>
          <p>Getting one creature looks like this: {creatureList[0].name}</p>
          <ul>
            {/* {creatureList.map(function (creature) {
              return (<li>{creature.name} is from {creature.origin}</li>)})} */}
            {creatureList.map(creature => 
              (<li key={creature.name}>
                {creature.name} is from {creature.origin}
              </li>)
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
