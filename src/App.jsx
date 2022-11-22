import React from 'react';
import { Hero, Sales } from './components';

import { heroapi, popularsales, toprateslaes } from './data/data';

const App = () => {
  return (
    <div>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} />
        <Sales endpoint={toprateslaes} />
      </main>
    </div>
  )
}

export default App