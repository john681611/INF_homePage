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
      const members = [];
      const parser = new DOMParser();
      const data = await fetch('https://ironfists.azurewebsites.net/api').then(result => result.json())
      const squadXML = await fetch('/forums/INF/insignia/squad.xml').then(result => result.text());
      const squadDom = parser.parseFromString(squadXML,"text/xml");
      Array.from(squadDom.getElementsByTagName("member")).forEach(member => {
        const memberObj = {
          nickname: member.getAttribute('nick'),
          position: member.querySelector('icq').innerHTML,
          remark:  member.querySelector('remark').innerHTML
        }
        const index = data.members.findIndex(dataMemb => memberObj.nickname.toLowerCase().includes(dataMemb.name.trim().toLowerCase()));
        if(index !== -1){
          members.push(Object.assign({}, data.members[index], memberObj));
        } else {
          members.push(memberObj);
        }
      });
      members.sort((a,b) => a.position.localeCompare(b.position));
      data.members = members;
      this.setState(data);
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
