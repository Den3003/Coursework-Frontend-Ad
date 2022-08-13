import React from 'react';
import './App.css';
import { Header } from './layouts/Header/Header';
import { Banner } from './layouts/Banner/Banner'
import { Products } from './layouts/Products/Products';
import { Clients } from './layouts/Clients/Clients';
import { Begin } from './layouts/Begin';
import { Requests } from './layouts/Requests/Requests';
import { Footer } from './layouts/Footer/Footer';

function App() {
  return (
    <div className="App bg-[#EEEEEE]">
       <Header />
       <main>
          <Banner />
          <div className='bg-[#EEEEEE]'>
          <Products />
          <Clients />
          <Begin />
          <Requests />
          </div>
       </main>
          <Footer />
    </div>
  );
}

export default App;
