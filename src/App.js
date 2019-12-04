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
import HttpsRedirect from 'react-https-redirect';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      news :[],
      servers:[],
      members:[],
      squads: [],
      donators:[]
    };
  }
  async componentDidMount(){
    try {
      const result = await fetch('https://ironfists.azurewebsites.net/api');
      this.setState(await result.json());
      const result2 = await fetch('/squad.xml');
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(await result2.text(),"text/xml");
      const xmlMember = []; 
      Array.from(xmlDoc.getElementsByTagName("member")).forEach(member => {
        xmlMember.push({
          nickname: member.getAttribute('nick'),
          position: member.querySelector('icq').innerHTML,
          remark:  member.querySelector('remark').innerHTML
        })
      })
      console.log(xmlMember);
    } catch (error) {
      return ('Damn something has gone wrong');
    }
  }
  render() {
    return (
      <HttpsRedirect>
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
      </HttpsRedirect>
    );
  }
}

export default App;
