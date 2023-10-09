import React, { useState } from 'react';
import Header from './Component/Header';
import Video from './Component/Main';
import Footer from './Component/Footer';
import { createContext } from 'react';


export const DataParentContext = createContext();
const App = () => {
  const [ApiData, setApiData] = useState([]);
  return (
    <DataParentContext.Provider value={{ ApiData, setApiData }} >

        <Header />
        <Video/>
        <Footer />
      
    </DataParentContext.Provider>
  )
}

export default App