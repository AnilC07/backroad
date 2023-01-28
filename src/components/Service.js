import React from 'react'



const ServicesComp = ({ id, icon, title, paragraphe }) => {
  return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{paragraphe}</p>
              </div>
            </article>
          );
}

export default ServicesComp