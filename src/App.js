import React from 'react';
import logo from './logo.svg';
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
      <Nav/>
      <Header/>

      <section id="news" class="section">
          <div class="section__inner">
              <News/>
          </div>
      </section>

      <section id="forum" class="section">
          <div class="section__inner">
              <Forum/>
          </div>
      </section>

      <section id="about" class="section">
          <div class="section__inner">
              <About/>
          </div>
      </section>

      <section id="join" class="section">
          <div class="section__inner">
            <Join/>
          </div>
      </section>

      <section id="servers" class="section">
          <div class="section__inner">
              <Servers/>
          </div>
      </section>

      <section id="rules" class="section">
          <div class="section__inner">
            <Rules/>
          </div>
      </section>

      <section id="links" class="section">
          <div class="section__inner">
            <Links/>
          </div>
      </section>

      <section id="cmdmsg" class="section">
          <div class="section__inner">
            <CMDmsg/>
          </div>
      </section>

      <section id="roster" class="section">
          <div class="section__inner">
            <Roster/>
          </div>
      </section>

      <section id="donate" class="section">
          <div class="section__inner">
            <Donate/>
          </div>
      </section>

      <section id="donators" class="section">
          <div class="section__inner">
              <Donators/>
          </div>
      </section>
    
      <Footer/>
    </div>
  );
}

export default App;
