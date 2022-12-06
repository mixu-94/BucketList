import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

import React from 'react';

const Layout = props => {
  return (
    <div className="flex flex-col h-[100%]">
      <Header />
      <div className="flex-grow flex justify-center">
        <Main>{props.children}</Main>
      </div>
      <div className="flex-grow">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;