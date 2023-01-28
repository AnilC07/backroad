import React from "react";

const PageLinks = ({ parentClass, itemClass, href, id, text }) => {
  return (
    
      <li key={id}>
        <a href={href} className={itemClass}>
          {" "}
          {text}{" "}
        </a>
      </li>

  );
};

export default PageLinks;
