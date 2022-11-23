import React from 'react';
import { Hero, Sales, FlexContent } from './components';

import { heroapi, popularsales, toprateslaes } from './data/data';

const App = () => {
  return (
    <div>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent />
      </main>
    </div>
  )
}

export default App