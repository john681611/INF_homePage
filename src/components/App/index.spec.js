import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '.';
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

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render the HttpsRedirect Component', () => {
    expect(wrapper.containsMatchingElement(  <HttpsRedirect>
        <Nav />
        <Header />
        <News news={wrapper.instance().news} />
        <Forum />
        <About />
        <Join />
        <Servers servers={wrapper.instance().servers} />
        <Rules />
        <Links />
        <CMDmsg />
        <Roster members={wrapper.instance().members} squads={wrapper.instance().squads} />
        <Donate />
        <Donations donators={wrapper.instance().donators} />
        <Footer />
      </HttpsRedirect>)).toEqual(true);
  });
});

describe('componentDidMount', () => {
  let wrapper, spy, errorLog;
  const defaultJsonResponse = {
    json: () => {return {
      members: [
        {
          name: ' Bob',
          info: 'something'
        },
        {
          name: 'newPerson',
          info: 'newb'
        }
      ]
    }}
  }

  const defaultTextResponse = {
    text: () => `
    <?xml version="1.0"?>
    <!DOCTYPE squad SYSTEM "squad.dtd">
    <?xml-stylesheet href="squad.xsl?" type="text/xsl"?>
    
    <squad nick="INF">
      <name>Iron Fists</name>
      <web>https://iron-fists.co.uk / ts3.iron-fists.co.uk</web>
      <picture>sqd_logo.paa</picture>
      <title>INF</title>
    
      <member id="76561197995337740" nick="INF_H@wKEYE">
        <name>Shaun</name>
        <icq>Alpha 1</icq>
        <remark>(INF 1IC)</remark>
      </member>

      <member id="76561197995337740" nick="bob">
        <name>Fred</name>
        <email>a</email>
        <icq>Alpha 1</icq>
        <remark>(INF 1IC)</remark>
      </member>
    </squad>
    `
  }

  beforeEach(() => {
    wrapper = mount(<App />)
    errorLog = jest.spyOn(console, 'error');
  });

  afterEach(() => {    
    jest.clearAllMocks();
  });

  it('should call fetch twice', async () => {
    spy = jest.spyOn(global, 'fetch')
    .mockResolvedValueOnce(defaultJsonResponse)
    .mockResolvedValueOnce(defaultTextResponse);
    await wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith('https://ironfists.azurewebsites.net/api');
    expect(spy).toHaveBeenCalledWith('/forums/INF/insignia/squad.xml');
  });

  it('should merge squad and API data', async () => {
    spy = jest.spyOn(global, 'fetch')
    .mockResolvedValueOnce(defaultJsonResponse)
    .mockResolvedValueOnce(defaultTextResponse);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state().members).toEqual([
      {nickname: "INF_H@wKEYE", position: "Alpha 1", remark: "(INF 1IC)"},
      {info: "something", name: " Bob", nickname: "bob", position: "Alpha 1", remark: "(INF 1IC)"}
    ])
  })

  it('should return general error API call fails', async () => {
    spy = jest.spyOn(global, 'fetch').mockRejectedValueOnce('BANG');
    await wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual({donators: [], members: [], news: [], servers: [], squads: []})
    expect(errorLog).toHaveBeenCalledWith('BANG');
  });


  it('should return general error Squad call fails', async () => {
    spy = jest.spyOn(global, 'fetch')
    .mockResolvedValueOnce(defaultJsonResponse)
    .mockRejectedValueOnce('BANG');
    await wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith('https://ironfists.azurewebsites.net/api');
    expect(wrapper.state()).toEqual({donators: [], members: [], news: [], servers: [], squads: []})
    expect(errorLog).toHaveBeenCalledWith('BANG');
  });
});