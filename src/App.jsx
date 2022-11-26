import React from 'react';
import { Hero, Sales, FlexContent, Stories } from './components';

import { heroapi, popularsales, toprateslaes, highlight, sneaker } from './data/data';

const App = () => {
  return (
    <div>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories />
      </main>
    </div>
  )
}

export default App