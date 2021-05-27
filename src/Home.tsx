import React from 'react';

import { useSelector } from 'react-redux';

function Home() {

  const state = useSelector((state: any) => state);

  return (
    <div>
      <header>
        <br/>
        <br/>
        <br/>
        {JSON.stringify(state)}
        <br/>
        Hello
        
      </header>
    </div>
  );
}

export default Home;
