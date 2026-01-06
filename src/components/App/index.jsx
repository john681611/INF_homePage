
import React, { useEffect } from 'react';
import './index.css';
import Nav from '../Nav';
import Header from '../Header';
import News from '../News';
import Forum from '../Forum';
import About from '../About';
import Join from '../Join';
import Servers from '../Servers';
import ServerRules from '../ServerRules';
import Links from '../Links';
import CMDmsg from '../CMDmsg';
import Donate from '../Donate';
import Donations from '../Donations';
import Roster from '../Roster';
import Footer from '../Footer';
import HttpsRedirect from 'react-https-redirect';
import ClanRules from '../ClanRules';


function App () {
  const [initialData, setInitialData] = React.useState(null);
  useEffect(() => {
    const callApi = async () => {
    try {
      const members = [];
      const parser = new DOMParser();
      const dataProm = fetch('https://ironfists.azurewebsites.net/api').then(result => result.json())
      const squadXMLProm = fetch('https://iron-fists.co.uk/tags/squad.xml').then(result => result.text())
      const [data, squadXML] = await Promise.all([dataProm,squadXMLProm]).catch(err => {throw err});
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
      data.subKey = data.key
      delete data.key;
      setInitialData(data);
    } catch (error) {
      console.error("useEffect: ", error)
    }
  }
    callApi();
  }, []);
    return (
      <HttpsRedirect>
        <Nav subKey={(initialData && initialData.subKey) || ""}/>
        <Header />
        <About />
        <Join />
        <Forum />
        <ClanRules />
        {initialData && <News news={initialData.news} />}
        <Links />
        {initialData && <Roster members={initialData.members} squads={initialData.squads} />}
        <Donate />
        {initialData && <Donations donators={initialData.donators} />}
        <ServerRules />
        {initialData && <Servers servers={initialData.servers } />}
        <CMDmsg />
        <Footer />
      </HttpsRedirect>
    );
}

export default App;
