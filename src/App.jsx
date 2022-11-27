import React from 'react';
import { Hero, Sales, FlexContent, Stories,Footer } from './components';

import { heroapi, popularsales, toprateslaes, highlight, sneaker, story } from './data/data';

const App = () => {
  return (
    <div>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Footer />
      </main>
    </div>
  )
}

export default App