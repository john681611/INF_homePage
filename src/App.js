import React, { Component } from 'react';
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
import mockData from './mockData';

class App extends Component {
  constructor(props){
    super(props);
    this.state = mockData;
  }
  async componentDidMount(){
    // try {
    //   const result = await fetch('https://ironfists.azurewebsites.net/api',{
    //     mode: 'no-cors'})
    //   console.log(result.json());
    //   this.setState(result.json());
    // } catch (error) {
    //   return ('Damn something has gone wrong');
    // }
  }
  render() {
    return (
      <div>
        
        <Nav />
        <Header />
        <News news={this.state.news} />
        <Forum />
        <About />
        <Join />
        <Servers servers={this.state.servers} />
        <Rules />
        <Links />
        <CMDmsg />
        <Roster members={this.state.members} squads={this.state.squads} />
        <Donate />
        <Donators donators={this.state.donators} />
        <Footer />
      </div>
    );
  }
}

export default App;
