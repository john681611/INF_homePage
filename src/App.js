import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import News from './components/News';
import Forum from './components/Forum';
import About from './components/About';
import Join from './components/Join';
import Servers from './components/Servers';
import Rules from './components/Rules';
import Links from './components/Links';
import CMDmsg from './components/CMDmsg';
import Donate from './components/Donate';
import Donators from './components/Donators';
import Roster from './components/Roster';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <News />
      <Forum />
      <About />
      <Join />
      <Servers />
      <Rules />
      <Links />
      <CMDmsg />
      <Roster />
      <Donate />
      <Donators />
      <Footer />
    </div>
  );
}

export default App;
