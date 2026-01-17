import React from "react";
import moment from "moment";
const News = (props) => {
  const [showAll, setShowAll] = React.useState(false);
  return (
    <section id="news" className="section-wide">
      <div className="section__inner">
        <h2>News &amp; Events</h2>
        <div className="news-grid">
          {props.news.map((item, index) => {
            if (index < 3 || showAll) {
              return (
                <div key={index} className="news-item">
                  <h4>{item.title}</h4>
                  <div className="date">
                    {moment(item.date).format("DD-MM-YYYY")}
                  </div>

                  {item.imagelink ? (
                    <img
                      alt={item.title}
                      className="newsimg lazyload"
                      data-src={item.imagelink}
                    />
                  ) : null}
                  <p className="news-text">{item.text}</p>
                  <a
                    className="btn news-btn"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.event ? "Sign up" : "Read More"}
                  </a>
                </div>
              );
            }
            return null;
          })}
        </div>
          <button className="btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less" : "View More"}
          </button>
      </div>
    </section>
  );
};

export default News;
