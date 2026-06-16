import React from 'react';
import './App.css';
import Nav from './Nav';       
import Main from './Main';     
import Footer from './Footer'; 
import UnderConstruction from './components/UnderConstruction';


function App() {
  return (
    // We use React Fragments <> </> here instead of <BrowserRouter>
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;




