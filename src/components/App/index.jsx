
import React, { Component } from 'react';
import './index.css';
import Nav from '../Nav';
import Header from '../Header';
import News from '../News';
import Forum from '../Forum';
import About from '../About';
import Join from '../Join';
import Servers from '../Servers';
import Rules from '../Rules';
import Links from '../Links';
import CMDmsg from '../CMDmsg';
import Donate from '../Donate';
import Donations from '../Donations';
import Roster from '../Roster';
import Footer from '../Footer';
import HttpsRedirect from 'react-https-redirect';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      news :[],
      servers:[],
      members:[],
      squads: [],
      donators:[],
      key: null
    };
  }
  async componentDidMount(){
    try {
      const members = [];
      const parser = new DOMParser();
      const data = await fetch('https://ironfists.azurewebsites.net/api').then(result => result.json());
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
      console.error(error)
    }
  }
  render() {
    return (
      <HttpsRedirect>
        <Nav subKey={this.state.key}/>
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
        <Donations donators={this.state.donators} />
        <Footer />
      </HttpsRedirect>
    );
  }
}

export default App;
