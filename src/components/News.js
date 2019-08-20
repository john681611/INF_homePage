import React from 'react'
import moment from 'moment'
const News = (props) => {
  return (
    <section id="news" className="section">
      <div className="section__inner">
        News
        <h2>News &amp; Events</h2>
        <button className="btn notification news">Enable News Push Notifications</button><br/><br/>
        {props.news.map((item, index) => {
          if (index < 3) { 
            return (
            <span  key={index}>
              <h3>
                {item.title}
              <div className="date">
                  {moment(item.date).format("DD-MM-YYYY")}
              </div>
              </h3>
              {item.imagelink ? <img alt={item.title} className="newsimg lazyload" data-src={item.imagelink} /> : null}
              <p>
                {item.text}
              </p>
              <a className="btn" href="<%= item.link%>" target="_blank">
                {item.event ? 'Sign up' : 'Read More'}
              </a>
              <hr/>
            </span>
        )}
        return null;
        })}
      <a className="btn" href="http://iron-fists.co.uk/forums/index.php" target="_blank" rel="noopener noreferrer">View More</a>
    </div>
  </section >
  )
}

export default News